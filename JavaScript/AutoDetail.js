// hamburger menu
document.querySelector(".mobile-menu-icon").addEventListener("click", function () {
  document.querySelector(".menu-main-div").classList.toggle("menu-open");
  this.classList.toggle("menu-open");
});

// header scroll
let lastScroll = 0;
const header = document.querySelector(".header-mobile");
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > 0) {
    topbar.classList.add("topbar-hidden");
    header.classList.add("header-scrolled");
  } else {
    topbar.classList.remove("topbar-hidden");
    setTimeout(() => {
      header.classList.remove("header-scrolled");
    }, 1000);
  }

  if (currentScroll > lastScroll && currentScroll > 10) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

// about us counter animation
const timers = document.querySelectorAll(".timer");

function animateCounter(el) {
  const target = +el.getAttribute("data-to");
  const speed = +el.getAttribute("data-speed");
  const step = target / (speed / 16);
  let current = 0;

  el.textContent = "0";

  const update = () => {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

timers.forEach((timer) => {
  timer.textContent = "0";
  observer.observe(timer);
});

// about jarallax
jarallax(document.querySelectorAll(".jarallax"), {
  speed: 0.25,
});

// owl carousel
$(".wlcm-bottom-carousel").owlCarousel({
  margin: 40,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    599: {
      items: 4,
    },
    999: {
      items: 6,
    },
  },
});

// img-comp-slider
setTimeout(() => {
  const slider = document.querySelector("img-comparison-slider");
  if (slider.shadowRoot) {
    const style = document.createElement("style");
    style.textContent = `.handle-container { z-index: 10; }`;
    slider.shadowRoot.appendChild(style);
  }
}, 1000);

const slider = document.querySelector("img-comparison-slider");
const overlay = document.querySelector(".slider-overlay");

slider.addEventListener("mousemove", (e) => {
  const rect = slider.getBoundingClientRect();
  const exposure = slider.exposure ?? 50;
  const handleX = (exposure / 100) * rect.width;
  const mouseX = e.clientX - rect.left;

  if (Math.abs(mouseX - handleX) < 30) {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } else {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "none";
  }
});

slider.addEventListener("mouseleave", () => {
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
});

// testimonial-carousel
$(".testimonial-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 2000,
  nav: false,
  dots: true,
  margin: 25,
  responsive: {
    0: {
      items: 1,
    },
    599: {
      items: 2,
    },
    993: {
      items: 3,
    },
  },
});

// why choose us accordion
document.querySelectorAll(".accordion-section-title").forEach((title) => {
  title.addEventListener("click", function () {
    const content = document.querySelector(this.getAttribute("data-tab"));
    const isOpen = content.style.display === "block";
    document.querySelectorAll(".accordion-section-content").forEach((c) => (c.style.display = "none"));
    content.style.display = isOpen ? "none" : "block";
  });
});
