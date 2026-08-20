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
    layer.items.forEach(function (item) {
      var btn = document.createElement("button");
      btn.className = "item";
      btn.type = "button";
      btn.setAttribute("data-layer", key);

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
        links.appendChild(a);
      });
      foot.appendChild(links);

      var more = document.createElement("span");
      more.className = "item__more";
      more.textContent = "展开价值 / 行业判断 →";
      foot.appendChild(more);

      main.appendChild(foot);
      btn.appendChild(main);

      btn.addEventListener("click", function () { openDetail(item, key); });
      host.appendChild(btn);
    });
  }

  /* —— 二级浮层：详情 —— */
  var dialog = document.getElementById("detail");
  var detailBody = document.getElementById("detailBody");
  var detailClose = document.getElementById("detailClose");

  function openDetail(item, layerKey) {
    detailBody.innerHTML = "";
    var tag = document.createElement("div");
    tag.className = "d-tag";
    tag.textContent = (layerKey === "B" ? "AI 上游信息" : "游戏美术应用层");
    detailBody.appendChild(tag);

    var h = document.createElement("h3");
    h.className = "d-title";
    h.id = "detailTitle";
    h.textContent = item.title;
    detailBody.appendChild(h);

    if (item.links && item.links.length) {
      var lk = document.createElement("div");
      lk.className = "d-links";
      lk.style.marginBottom = "var(--s-5)";
      item.links.forEach(function (l) {
        var a = document.createElement("a");
        a.href = l.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.textContent = "↗ " + l.label;
        lk.appendChild(a);
      });
      detailBody.appendChild(lk);
    }

    detailBody.appendChild(block("value", "🎯", "对你的价值", item.value));
    detailBody.appendChild(block("impact", "🌐", "行业影响判断", item.impact));
    if (item.conduction) {
      detailBody.appendChild(block("conduction", "↗", "传导到你的游戏美术生产", item.conduction));
    }

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function block(kind, ic, label, text) {
    var wrap = document.createElement("div");
    wrap.className = "d-block d-block--" + kind;
    var hh = document.createElement("div");
    hh.className = "d-block__h";
    var i = document.createElement("span");
    i.className = "ic"; i.textContent = ic;
    var s = document.createElement("span"); s.textContent = label;
    hh.appendChild(i); hh.appendChild(s);
    var p = document.createElement("p");
    p.textContent = text;
    wrap.appendChild(hh); wrap.appendChild(p);
    return wrap;
  }

  if (detailClose) {
    detailClose.addEventListener("click", function () { dialog.close(); });
  }

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
    setText("svRange", node.range || "");
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
