document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("masonry");
  const lightbox = document.getElementById("lightbox");
  if (!wrap || !lightbox || typeof GALLERY === "undefined") return;

  GALLERY.forEach((g) => {
    const div = document.createElement("div");
    div.className = "masonry-item reveal";
    div.dataset.full = g.full;
    div.dataset.caption = g.cap;
    div.innerHTML = `<img src="${g.src}" alt="${g.cap}" loading="lazy"><span class="cap">${g.cap}</span>`;
    wrap.appendChild(div);
  });
  if (window.armReveal) window.armReveal(wrap);

  const items = Array.from(wrap.querySelectorAll(".masonry-item"));
  const img = lightbox.querySelector("img");
  const cap = lightbox.querySelector(".lightbox-cap");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  let current = 0;

  function open(i) {
    current = i;
    img.src = items[i].dataset.full;
    cap.textContent = items[i].dataset.caption || "";
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() { lightbox.classList.remove("open"); document.body.style.overflow = ""; }
  function step(dir) { current = (current + dir + items.length) % items.length; open(current); }

  items.forEach((el, i) => {
    el.addEventListener("click", () => open(i));
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } });
  });
  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
});
