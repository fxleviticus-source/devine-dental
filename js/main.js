/* ==========================================================================
   DEVINE DENTAL — SHARED SITE BEHAVIOR
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Welcome intro (home page only, once per session) ---------------- */
  const intro = document.getElementById("intro");
  if (intro) {
    const seen = sessionStorage.getItem("devine_intro_seen");
    if (seen || prefersReducedMotion) {
      intro.remove();
    } else {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        intro.classList.add("hide");
        sessionStorage.setItem("devine_intro_seen", "1");
        setTimeout(() => { document.body.style.overflow = ""; }, 550);
      }, 2100);
    }
  }

  /* ---------------- Header solid-on-scroll ---------------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => { if (header) header.classList.toggle("solid", window.scrollY > 30); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Active nav link ---------------- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-drawer nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });

  /* ---------------- Mobile drawer ---------------- */
  const drawer = document.getElementById("mobileDrawer");
  const openBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  const backdrop = document.querySelector(".mobile-drawer-backdrop");
  if (drawer && openBtn) {
    let lastFocused = null;
    const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])';

    const open = () => {
      lastFocused = document.activeElement;
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      openBtn.setAttribute("aria-expanded", "true");
      const firstFocusable = drawer.querySelector(focusableSelector);
      if (firstFocusable) firstFocusable.focus();
    };
    const close = () => {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      openBtn.setAttribute("aria-expanded", "false");
      if (lastFocused) lastFocused.focus();
    };
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (!drawer.classList.contains("open")) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        const focusables = Array.from(drawer.querySelectorAll(focusableSelector));
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------------- Scroll progress bar ---------------- */
  const progressBar = document.createElement("div");
  progressBar.id = "scrollProgress";
  document.body.appendChild(progressBar);
  function updateProgress() {
    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------- Scroll reveal (staggered per parent) ---------------- */
  function armReveal(root = document) {
    const els = Array.from(root.querySelectorAll(".reveal:not(.in)"));
    const groups = new Map();
    els.forEach((el) => {
      const p = el.parentElement;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p).push(el);
    });
    groups.forEach((list) => {
      list.forEach((el, i) => {
        if (list.length > 1) el.style.transitionDelay = Math.min(i * 70, 420) + "ms";
      });
    });
    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
      els.forEach((el) => io.observe(el));
    } else {
      els.forEach((el) => el.classList.add("in"));
    }
  }
  window.armReveal = armReveal;
  armReveal();

  /* ---------------- Patient journey connecting line ---------------- */
  const journeyEl = document.querySelector(".journey");
  if (journeyEl) {
    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      const jio = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { journeyEl.classList.add("in-view"); jio.unobserve(journeyEl); }
        });
      }, { threshold: 0.3 });
      jio.observe(journeyEl);
    } else {
      journeyEl.classList.add("in-view");
    }
  }
});
