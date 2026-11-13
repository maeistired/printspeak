// Home hero carousel. Markup and slide copy: index.html #hero. Look and timing: styles.css HERO CAROUSEL.
// The timer is the CSS fill animation on the current dot: when it ends, the next slide shows. Pausing the
// animation pauses the timer, so hover, focus and a hidden tab all hold it exactly where it is.
(() => {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;

  const slides = [...root.querySelectorAll(".hero-slide")];
  const viewport = root.querySelector(".hero-slides");
  const controls = root.querySelector(".hero-controls");
  const dotsWrap = root.querySelector(".hero-dots");
  const toggle = root.querySelector("[data-hero-toggle]");
  if (slides.length < 2 || !controls || !dotsWrap || !toggle) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let index = 0;
  let hovering = false;
  let focused = false;

  const dots = slides.map((slide, i) => {
    const title = slide.querySelector("h2")?.textContent.trim() ?? "";
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", `Slide ${i + 1} of ${slides.length}: ${title}`);
    dot.append(document.createElement("span"));
    dot.addEventListener("click", () => show(i));
    dotsWrap.append(dot);
    return dot;
  });

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("is-active", active);
      slide.inert = !active;
    });
    dots.forEach((dot, i) => dot.setAttribute("aria-current", String(i === index)));
  }

  function setStopped(stopped) {
    root.classList.toggle("is-stopped", stopped);
    toggle.setAttribute("aria-label", stopped ? "Play slideshow" : "Pause slideshow");
    // Announce slide changes only when the user is driving them.
    viewport.setAttribute("aria-live", stopped ? "polite" : "off");
  }

  function updateHold() {
    root.classList.toggle("is-held", hovering || focused || document.hidden);
  }

  dotsWrap.addEventListener("animationend", (event) => {
    if (event.animationName === "hero-progress") show(index + 1);
  });

  root.querySelector("[data-hero-prev]").addEventListener("click", () => show(index - 1));
  root.querySelector("[data-hero-next]").addEventListener("click", () => show(index + 1));
  toggle.addEventListener("click", () => setStopped(!root.classList.contains("is-stopped")));

  root.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") { hovering = true; updateHold(); }
  });
  root.addEventListener("pointerleave", () => { hovering = false; updateHold(); });
  // Keyboard focus inside the hero holds the slide, except on the play/pause button itself,
  // so pressing Play there visibly starts the slideshow.
  root.addEventListener("focusin", (event) => { focused = event.target !== toggle; updateHold(); });
  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget)) { focused = false; updateHold(); }
  });
  document.addEventListener("visibilitychange", updateHold);

  controls.hidden = false;
  show(0);
  // Reduced motion: no autoplay; the user can still press Play.
  setStopped(reduceMotion.matches);
})();
