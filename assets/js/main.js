(function () {
  "use strict";

  // ---- Mobile nav toggle ------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // ---- Lightbox -----------------------------------------------------------
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  var lightboxImage = lightbox.querySelector(".lightbox-image");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox-trigger]"));
  var currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    var trigger = triggers[currentIndex];
    lightboxImage.src = trigger.getAttribute("data-src");
    lightboxImage.alt = trigger.getAttribute("data-alt") || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  function showRelative(delta) {
    if (triggers.length === 0) return;
    currentIndex = (currentIndex + delta + triggers.length) % triggers.length;
    openLightbox(currentIndex);
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  var closeBtn = lightbox.querySelector(".lightbox-close");
  var prevBtn = lightbox.querySelector(".lightbox-prev");
  var nextBtn = lightbox.querySelector(".lightbox-next");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", function () { showRelative(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { showRelative(1); });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showRelative(-1);
    if (event.key === "ArrowRight") showRelative(1);
  });
})();
