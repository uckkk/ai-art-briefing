/* =========================================================
   skin-effects.js · Canvas 动态背景效果
   Matrix Rain / Aurora Flow / Liquid Glass blobs
   随皮肤切换自动启动 / 停止
   ========================================================= */
(function () {
  "use strict";

  var canvas = null;
  var ctx = null;
  var animationId = null;
  var currentSkin = "default";
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* —— 初始化 Canvas —— */
  function init() {
    canvas = document.createElement("canvas");
    canvas.id = "skin-canvas";
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;";
    document.body.insertBefore(canvas, document.body.firstChild);
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
      } else {
        if (currentSkin !== "default" && !animationId && !reducedMotion) {
          startEffect(currentSkin);
        }
      }
    });
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function stopCurrent() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function setSkin(skin) {
    currentSkin = skin;
    stopCurrent();
    if (reducedMotion) return;
    if (skin === "default" || skin === "beautiful" || skin === "vhs") return;
    startEffect(skin);
  }

  function startEffect(skin) {
    switch (skin) {
      case "matrix":  startMatrix();  break;
      case "aurora":  startAurora();  break;
      case "glass":   startGlass();   break;
    }
  }

  /* =========================================================
     Matrix Rain — 降雨字符（canvasui.dev Glyph Rain 风格）
     ========================================================= */
  function startMatrix() {
    var fontSize = 14;
    var columns = Math.ceil(canvas.width / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }
    var chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789ABCDEF<>{}|/\\";
    var charLen = chars.length;

    function draw() {
      /* 半透明黑色覆盖 -> 拖尾效果 */
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px ui-monospace, monospace";
      ctx.textBaseline = "top";

      for (var i = 0; i < drops.length; i++) {
        var ch = chars.charAt(Math.floor(Math.random() * charLen));
        var x = i * fontSize;
        var y = drops[i];

        /* 头部字符（亮白） */
        ctx.fillStyle = "rgba(180, 255, 180, 0.9)";
        ctx.fillText(ch, x, y);

        /* 尾部字符（矩阵绿，渐暗） */
        ctx.fillStyle = "rgba(0, 255, 65, 0.5)";
        ctx.fillText(ch, x, y - fontSize);

        ctx.fillStyle = "rgba(0, 255, 65, 0.25)";
        ctx.fillText(chars.charAt(Math.floor(Math.random() * charLen)), x, y - fontSize * 2);

        drops[i] += fontSize;
        if (drops[i] > canvas.height + fontSize * 4 && Math.random() > 0.975) {
          drops[i] = -fontSize * Math.floor(Math.random() * 10);
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
  }

  /* =========================================================
     Aurora Flow — 极光粒子流（21st.dev Futuristic/Ethereal 风格）
     ========================================================= */
  function startAurora() {
    var particleCount = Math.min(100, Math.floor(canvas.width / 12));
    var particles = [];
    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.5 + 0.5,
        hue: 170 + Math.random() * 160,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.005
      });
    }

    function draw() {
      /* 淡背景拖尾 */
      ctx.fillStyle = "rgba(20, 10, 45, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.speed;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        var alpha = (Math.sin(p.phase) * 0.5 + 0.5) * 0.5;
        var glow = p.size * 4;

        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
        grad.addColorStop(0, "hsla(" + p.hue + ", 75%, 65%, " + alpha + ")");
        grad.addColorStop(1, "hsla(" + p.hue + ", 75%, 65%, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(p.x - glow, p.y - glow, glow * 2, glow * 2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(" + p.hue + ", 80%, 70%, " + (alpha + 0.2) + ")";
        ctx.fill();
      }

      /* 连线（近邻粒子） */
      ctx.strokeStyle = "rgba(100, 200, 220, 0.04)";
      ctx.lineWidth = 1;
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = dx * dx + dy * dy;
          if (dist < 10000) {
            ctx.globalAlpha = (1 - dist / 10000) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    }
    draw();
  }

  /* =========================================================
     Liquid Glass — 渐变 Blob 浮动（canvasui.dev Glass + 21st.dev Liquid）
     ========================================================= */
  function startGlass() {
    var blobCount = 5;
    var blobs = [];
    var hues = [200, 260, 290, 330, 180];
    for (var i = 0; i < blobCount; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 180 + Math.random() * 250,
        hue: hues[i],
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.002 + Math.random() * 0.003
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < blobs.length; i++) {
        var b = blobs[i];
        b.x += b.vx;
        b.y += b.vy;
        b.phase += b.phaseSpeed;

        /* 边界回弹 */
        if (b.x < -b.r) b.vx = Math.abs(b.vx);
        if (b.x > canvas.width + b.r) b.vx = -Math.abs(b.vx);
        if (b.y < -b.r) b.vy = Math.abs(b.vy);
        if (b.y > canvas.height + b.r) b.vy = -Math.abs(b.vy);

        var r = b.r + Math.sin(b.phase) * 40;
        var grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        grad.addColorStop(0, "hsla(" + b.hue + ", 75%, 55%, 0.14)");
        grad.addColorStop(0.5, "hsla(" + b.hue + ", 75%, 55%, 0.04)");
        grad.addColorStop(1, "hsla(" + b.hue + ", 75%, 55%, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(draw);
    }
    draw();
  }

  /* —— 导出 —— */
  window.SkinEffects = {
    init: init,
    setSkin: setSkin,
    stop: stopCurrent
  };

  /* —— DOM 就绪后初始化 —— */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
