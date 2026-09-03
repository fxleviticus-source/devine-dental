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
    const open = () => { drawer.classList.add("open"); document.body.style.overflow = "hidden"; openBtn.setAttribute("aria-expanded", "true"); };
    const close = () => { drawer.classList.remove("open"); document.body.style.overflow = ""; openBtn.setAttribute("aria-expanded", "false"); };
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------------- Scroll reveal ---------------- */
  function armReveal(root = document) {
    const els = root.querySelectorAll(".reveal:not(.in)");
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
});
