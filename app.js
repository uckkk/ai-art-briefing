(function () {
  "use strict";

  var html = document.documentElement;
  var B = window.BRIEFING;
  var archive = window.ARCHIVE || {};
  var current = (B && B.meta && B.meta.date) || "2026-07-15";

  /* —— 皮肤系统 —— */
  var SKIN_LABELS = {
    "default-dark":  "默认 · 深色",
    "default-light": "默认 · 浅色",
    "beautiful":     "Beautiful AI",
    "matrix":        "Matrix Rain",
    "glass":         "Liquid Glass",
    "aurora":        "Aurora Flow",
    "vhs":           "Retro VHS"
  };

  function parseSkin(val) {
    /* "default-dark" -> skin="default", theme="dark" */
    if (val === "default-dark" || val === "default-light") {
      return { skin: "default", theme: val.split("-")[1], effect: "default" };
    }
    return { skin: val, theme: "dark", effect: val };
  }

  function applySkin(val) {
    var parsed = parseSkin(val);
    html.setAttribute("data-skin", parsed.skin);
    html.setAttribute("data-theme", parsed.theme);
    try { localStorage.setItem("briefing-skin", val); } catch (e) {}

    /* 更新按钮标签 */
    var labelEl = document.getElementById("skinLabel");
    if (labelEl) labelEl.textContent = SKIN_LABELS[val] || val;

    /* 高亮菜单当前项 */
    var menuItems = document.querySelectorAll("#skinMenu li");
    menuItems.forEach(function (li) {
      if (li.getAttribute("data-skin") === val) li.setAttribute("data-active", "");
      else li.removeAttribute("data-active");
    });

    /* 启动/停止 Canvas 效果 */
    if (window.SkinEffects && window.SkinEffects.setSkin) {
      window.SkinEffects.setSkin(parsed.effect);
    }
  }

  /* 读取已保存的皮肤 */
  var savedSkin = null;
  try { savedSkin = localStorage.getItem("briefing-skin"); } catch (e) {}
  /* 向后兼容：旧版只存了 briefing-theme */
  if (!savedSkin) {
    try {
      var oldTheme = localStorage.getItem("briefing-theme");
      if (oldTheme) savedSkin = "default-" + oldTheme;
    } catch (e) {}
  }
  if (!savedSkin) savedSkin = "default-dark";
  applySkin(savedSkin);

  /* 皮肤切换器交互 */
  var skinBtn = document.getElementById("skinBtn");
  var skinMenu = document.getElementById("skinMenu");

  if (skinBtn && skinMenu) {
    skinBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = skinMenu.classList.contains("skin-menu--open");
      if (open) {
        skinMenu.classList.remove("skin-menu--open");
        skinBtn.setAttribute("aria-expanded", "false");
        skinMenu.setAttribute("aria-hidden", "true");
      } else {
        skinMenu.classList.add("skin-menu--open");
        skinBtn.setAttribute("aria-expanded", "true");
        skinMenu.setAttribute("aria-hidden", "false");
      }
    });

    /* 菜单项点击 */
    skinMenu.addEventListener("click", function (e) {
      var li = e.target.closest("li");
      if (!li) return;
      var val = li.getAttribute("data-skin");
      if (!val) return;
      applySkin(val);
      skinMenu.classList.remove("skin-menu--open");
      skinBtn.setAttribute("aria-expanded", "false");
      skinMenu.setAttribute("aria-hidden", "true");
    });

    /* 点击外部关闭菜单 */
    document.addEventListener("click", function (e) {
      if (!skinMenu.contains(e.target) && !skinBtn.contains(e.target)) {
        skinMenu.classList.remove("skin-menu--open");
        skinBtn.setAttribute("aria-expanded", "false");
        skinMenu.setAttribute("aria-hidden", "true");
      }
    });

    /* ESC 关闭 */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && skinMenu.classList.contains("skin-menu--open")) {
        skinMenu.classList.remove("skin-menu--open");
        skinBtn.setAttribute("aria-expanded", "false");
        skinMenu.setAttribute("aria-hidden", "true");
      }
    });
  }

  /* —— 工具 —— */
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function clear(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = "";
    return el;
  }

  function fillList(id, arr, make) {
    var host = document.getElementById(id);
    if (!host || !arr) return;
    arr.forEach(function (x) { host.appendChild(make(x)); });
  }

  function isTypingTarget(el) {
    if (!el) return false;
    var tag = (el.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (el.isContentEditable) return true;
    return false;
  }

  function firstSentence(text) {
    if (!text) return "";
    var s = String(text);
    var yi = s.indexOf("。");
    var dash = s.indexOf("—");
    var cut = -1;
    if (yi === -1) cut = dash;
    else if (dash === -1) cut = yi;
    else cut = Math.min(yi, dash);
    if (cut === -1) return s;
    if (s.charAt(cut) === "。") return s.slice(0, cut + 1);
    return s.slice(0, cut).replace(/\s+$/, "");
  }

  function itemAction(item) {
    if (!item) return "";
    if (item.action) return item.action;
    return firstSentence(item.value || "");
  }

  function appendChips(host, tags, className) {
    if (!host || !tags || !tags.length) return;
    var wrap = document.createElement("div");
    wrap.className = className || "chips";
    tags.slice(0, 2).forEach(function (tag) {
      var c = document.createElement("span");
      c.className = "chip";
      c.textContent = tag;
      wrap.appendChild(c);
    });
    host.appendChild(wrap);
  }

  /* —— 报头 —— */
  function renderMeta(meta) {
    if (!meta) return;
    setText("title", meta.title);
    setText("date", meta.date);
    setText("tagline", meta.tagline);
    document.title = meta.title + " · " + meta.date;
  }

  /* —— 今日三句话 —— */
  function renderEditorFrame(list) {
    var host = clear("editorFrame");
    if (!host || !list) return;
    list.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      host.appendChild(li);
    });
  }

  /* —— 层级 —— */
  function renderLayer(key, layer) {
    var host = clear("layer" + key);
    if (!host || !layer || !layer.items) return;
    layer.items.forEach(function (item, i) {
      var btn = document.createElement("button");
      btn.className = "item";
      btn.type = "button";
      btn.setAttribute("data-layer", key);
      btn.setAttribute("data-i", String(i));

      var idx = document.createElement("div");
      idx.className = "item__idx";
      idx.textContent = item.idx || "";
      btn.appendChild(idx);

      var main = document.createElement("div");
      main.className = "item__main";

      var t = document.createElement("h3");
      t.className = "item__title";
      t.textContent = item.title;
      main.appendChild(t);

      var sum = document.createElement("p");
      sum.className = "item__summary";
      sum.textContent = item.summary || "";
      main.appendChild(sum);

      var foot = document.createElement("div");
      foot.className = "item__foot";

      var links = document.createElement("div");
      links.className = "item__links";
      (item.links || []).forEach(function (l) {
        var a = document.createElement("a");
        a.className = "src";
        a.href = l.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.textContent = l.label;
        a.addEventListener("click", function (e) { e.stopPropagation(); });
        links.appendChild(a);
      });
      foot.appendChild(links);
      appendChips(foot, item.tags, "item__chips");

      main.appendChild(foot);
      btn.appendChild(main);

      btn.addEventListener("click", function () { openDetail(item, key, i, btn); });
      host.appendChild(btn);
    });
  }

  /* —— 二级浮层：详情抽屉 —— */
  var dialog = document.getElementById("detail");
  var detailBody = document.getElementById("detailBody");
  var detailClose = document.getElementById("detailClose");
  var detailState = { layerKey: null, index: -1, opener: null };

  function layerLabel(layerKey) {
    return layerKey === "B" ? "B AI 上游信息" : "A 游戏美术应用层";
  }

  function collectFlatItems() {
    var list = [];
    if (!B || !B.layers) return list;
    ["A", "B"].forEach(function (key) {
      var layer = B.layers[key];
      if (!layer || !layer.items) return;
      layer.items.forEach(function (item, i) {
        list.push({ item: item, layerKey: key, index: i });
      });
    });
    return list;
  }

  function findItemButton(layerKey, index) {
    var host = document.getElementById("layer" + layerKey);
    if (!host) return null;
    var buttons = host.querySelectorAll(".item");
    return buttons[index] || null;
  }

  function openDetail(item, layerKey, index, opener) {
    if (!dialog || !detailBody || !item) return;
    detailState.layerKey = layerKey;
    detailState.index = typeof index === "number" ? index : 0;
    if (opener) detailState.opener = opener;
    else detailState.opener = findItemButton(layerKey, detailState.index);

    dialog.setAttribute("data-layer", layerKey || "A");
    renderDetail(item, layerKey);

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }

    var title = document.getElementById("detailTitle");
    if (title) {
      title.setAttribute("tabindex", "-1");
      try { title.focus(); } catch (e) {}
    }
  }

  function renderDetail(item, layerKey) {
    detailBody.innerHTML = "";

    var meta = document.createElement("div");
    meta.className = "d-meta";

    var tag = document.createElement("div");
    tag.className = "d-tag";
    tag.textContent = layerLabel(layerKey);
    meta.appendChild(tag);

    if (item.tags && item.tags.length) {
      appendChips(meta, item.tags, "d-chips");
    }

    if (item.sourceType) {
      var src = document.createElement("span");
      src.className = "d-source";
      src.textContent = item.sourceType;
      meta.appendChild(src);
    }

    detailBody.appendChild(meta);

    var h = document.createElement("h3");
    h.className = "d-title";
    h.id = "detailTitle";
    h.textContent = item.title;
    detailBody.appendChild(h);

    if (item.links && item.links.length) {
      var lk = document.createElement("div");
      lk.className = "d-links";
      item.links.forEach(function (l) {
        var a = document.createElement("a");
        a.href = l.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.textContent = l.label;
        lk.appendChild(a);
      });
      detailBody.appendChild(lk);
    }

    appendBlock("summary", "发生了什么", item.summary);

    var actionText = itemAction(item);
    if (actionText) {
      var actionWrap = document.createElement("div");
      actionWrap.className = "d-block d-block--action";

      var actionHead = document.createElement("div");
      actionHead.className = "d-block__h";
      var actionLabel = document.createElement("span");
      actionLabel.textContent = "本周动作";
      actionHead.appendChild(actionLabel);

      var copy = document.createElement("button");
      copy.className = "d-copy";
      copy.type = "button";
      copy.textContent = "复制动作";
      copy.setAttribute("aria-label", "复制本周动作");
      copy.addEventListener("click", function () {
        copyText(actionText);
        var prev = copy.textContent;
        copy.textContent = "已复制";
        setTimeout(function () { copy.textContent = prev; }, 2000);
      });
      actionHead.appendChild(copy);
      actionWrap.appendChild(actionHead);

      var actionP = document.createElement("p");
      actionP.textContent = actionText;
      actionWrap.appendChild(actionP);
      detailBody.appendChild(actionWrap);
    }

    if (item.cost) {
      var cost = document.createElement("div");
      cost.className = "d-cost";
      var costH = document.createElement("span");
      costH.className = "d-cost__k";
      costH.textContent = "成本";
      var costV = document.createElement("span");
      costV.textContent = item.cost;
      cost.appendChild(costH);
      cost.appendChild(costV);
      detailBody.appendChild(cost);
    }

    appendBlock("value", "对你的价值", item.value);
    appendBlock("impact", "行业影响判断", item.impact);
    if (item.conduction) {
      appendBlock("conduction", "传导到你的游戏美术生产", item.conduction);
    }
  }

  function appendBlock(kind, label, text) {
    var el = block(kind, label, text);
    if (el) detailBody.appendChild(el);
  }

  function block(kind, label, text) {
    if (text == null || text === "") return null;
    var wrap = document.createElement("div");
    wrap.className = "d-block d-block--" + kind;
    var hh = document.createElement("div");
    hh.className = "d-block__h";
    var s = document.createElement("span");
    s.textContent = label;
    hh.appendChild(s);
    var p = document.createElement("p");
    p.textContent = text;
    wrap.appendChild(hh);
    wrap.appendChild(p);
    return wrap;
  }

  function navigateDetail(dir) {
    var flat = collectFlatItems();
    if (!flat.length) return;
    var pos = -1;
    var i;
    for (i = 0; i < flat.length; i++) {
      if (flat[i].layerKey === detailState.layerKey && flat[i].index === detailState.index) {
        pos = i;
        break;
      }
    }
    if (pos === -1) pos = 0;
    var next = (pos + dir + flat.length) % flat.length;
    var entry = flat[next];
    openDetail(entry.item, entry.layerKey, entry.index, findItemButton(entry.layerKey, entry.index));
  }

  function closeDetail() {
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  function restoreOpenerFocus() {
    var opener = detailState.opener;
    if (opener && typeof opener.focus === "function") {
      try { opener.focus(); } catch (e) {}
    }
  }

  if (detailClose) {
    detailClose.addEventListener("click", function () { closeDetail(); });
  }

  if (dialog) {
    dialog.addEventListener("click", function (e) {
      var rect = dialog.getBoundingClientRect();
      var inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) closeDetail();
    });

    dialog.addEventListener("close", function () {
      restoreOpenerFocus();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!dialog || !dialog.open) return;
    if (isTypingTarget(e.target)) return;
    var down = e.key === "j" || e.key === "J" || e.key === "ArrowDown";
    var up = e.key === "k" || e.key === "K" || e.key === "ArrowUp";
    if (!down && !up) return;
    e.preventDefault();
    navigateDetail(down ? 1 : -1);
  });

  /* —— 行动：展开路径 + 可复制提示词 —— */
  function renderActions(actions, paths) {
    var host = clear("actions");
    if (!host || !actions) return;
    actions.forEach(function (text, i) {
      var li = document.createElement("li");
      li.className = "action";

      var head = document.createElement("div");
      head.className = "action__head";
      head.textContent = text;
      li.appendChild(head);

      var path = (paths || [])[i];
      if (path) {
        var expand = document.createElement("button");
        expand.className = "action__expand";
        expand.type = "button";
        expand.textContent = "展开行动路径 / 复制提示词";
        li.appendChild(expand);

        var body = document.createElement("div");
        body.className = "action__body";
        body.style.display = "none";

        var summary = document.createElement("p");
        summary.className = "action__summary";
        summary.textContent = path.summary || "";
        body.appendChild(summary);

        if (path.deploy && path.deploy.length) {
          var deployH = document.createElement("div");
          deployH.className = "action__sub";
          deployH.textContent = "部署/开发所需信息";
          body.appendChild(deployH);
          var ul = document.createElement("ul");
          ul.className = "action__deploy";
          path.deploy.forEach(function (d) {
            var dli = document.createElement("li");
            dli.textContent = d;
            ul.appendChild(dli);
          });
          body.appendChild(ul);
        }

        var promptH = document.createElement("div");
        promptH.className = "action__sub";
        promptH.textContent = "可一键复制的完整提示词";
        body.appendChild(promptH);

        var pre = document.createElement("pre");
        pre.className = "action__prompt";
        pre.textContent = path.prompt || "";
        body.appendChild(pre);

        var copy = document.createElement("button");
        copy.className = "action__copy";
        copy.type = "button";
        copy.textContent = "复制提示词";
        copy.addEventListener("click", function () {
          copyText(path.prompt || "");
        });
        body.appendChild(copy);

        expand.addEventListener("click", function () {
          var open = body.style.display === "block";
          body.style.display = open ? "none" : "block";
          expand.textContent = open ? "展开行动路径 / 复制提示词" : "收起";
        });

        li.appendChild(body);
      }

      host.appendChild(li);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopyToast, function () { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showCopyToast();
    } catch (e) {}
    document.body.removeChild(ta);
  }

  function showCopyToast() {
    var toast = document.getElementById("copyToast");
    if (!toast) return;
    toast.classList.add("copy-toast--show");
    setTimeout(function () { toast.classList.remove("copy-toast--show"); }, 2000);
  }

  /* —— 时间轴（极简：日期无圆点，周/月总结用不同标签样式） —— */
  var currentView = { type: "day", key: current };

  function renderTimeline(timeline) {
    var host = document.getElementById("timelineNodes");
    if (!host || !timeline) return;
    host.innerHTML = "";

    var nodes = timeline.nodes || timeline.days || [];

    nodes.forEach(function (n) {
      var type = n.type || "day";
      var key = type === "day" ? n.date : n.id;
      var node = document.createElement("button");
      node.className = "timeline__node timeline__node--" + type;
      node.type = "button";
      node.setAttribute("data-key", key || "");
      if (type === currentView.type && key === currentView.key) {
        node.classList.add("timeline__node--active");
      }
      node.setAttribute("aria-label",
        type === "day" ? "日报 " + n.date :
        type === "week" ? "周总结 " + n.label :
        "月总结 " + n.label
      );

      var lab = document.createElement("span");
      lab.className = "timeline__label";
      lab.textContent = n.label || n.date;
      node.appendChild(lab);

      node.addEventListener("click", function () {
        if (type === "day") loadDay(n.date);
        else loadSummary(n, type);
      });

      host.appendChild(node);
    });
  }

  /* —— 周/月总结：切换主界面（与切换日期同一逻辑，非弹窗） —— */
  function loadSummary(node, type) {
    if (!node) return;
    currentView = { type: type, key: node.id };

    setText("svTitle", node.label + " · " + (type === "week" ? "周总结" : "月总结"));
    setText("date", node.range || "");

    /* focus 按分号拆成编号列表 */
    var list = clear("svFocus");
    if (list) {
      var parts = String(node.focus || "").split(/；|;/).filter(function (s) {
        return s.trim().length > 0;
      });
      if (!parts.length) parts = ["本期没有特别值得立即验证的事。"];
      parts.forEach(function (text) {
        var li = document.createElement("li");
        li.textContent = text.trim();
        list.appendChild(li);
      });
    }

    /* 隐藏日报区块，显示总结视图 */
    var frame = document.querySelector(".frame");
    var main = document.getElementById("main");
    var foot = document.querySelector(".foot");
    var sv = document.getElementById("summaryView");
    if (frame) frame.hidden = true;
    if (main) main.hidden = true;
    if (foot) foot.hidden = true;
    if (sv) sv.hidden = false;

    document.title = node.label + " · " + (type === "week" ? "周总结" : "月总结");

    /* 刷新时间轴激活态 */
    if (window.BRIEFING && window.BRIEFING.timeline) renderTimeline(window.BRIEFING.timeline);

    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* —— 恢复日报视图 —— */
  function showDailyView() {
    var frame = document.querySelector(".frame");
    var main = document.getElementById("main");
    var foot = document.querySelector(".foot");
    var sv = document.getElementById("summaryView");
    if (sv) sv.hidden = true;
    if (frame) frame.hidden = false;
    if (main) main.hidden = false;
    if (foot) foot.hidden = false;
  }

  /* —— 切换日期 —— */
  function loadDay(date) {
    var data = archive[date];
    if (!data) {
      /* 当前日期不在 archive 中，从原始 BRIEFING 加载 */
      if (window.BRIEFING && window.BRIEFING.meta && window.BRIEFING.meta.date === date) {
        data = window.BRIEFING;
      } else {
        return;
      }
    }
    current = date;
    currentView = { type: "day", key: date };
    B = data;
    showDailyView();
    renderAll(data);
  }

  function renderAll(data) {
    renderMeta(data.meta);
    renderEditorFrame(data.editorFrame);
    if (data.layers) {
      renderLayer("A", data.layers.A);
      renderLayer("B", data.layers.B);
    }
    renderActions(data.actions, data.actionPaths);
    if (data.timeline) renderTimeline(data.timeline);
    else if (window.BRIEFING && window.BRIEFING.timeline) renderTimeline(window.BRIEFING.timeline);
  }

  /* —— 初始化 —— */
  renderAll(B);
})();
