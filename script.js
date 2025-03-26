document.addEventListener("DOMContentLoaded", function () {
  // Scroll-to-top बटन की functionality (सभी viewports में लागू)
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
          scrollToTopBtn.style.display = "flex";
          scrollToTopBtn.style.opacity = "1";
      } else {
          scrollToTopBtn.style.opacity = "0";
          setTimeout(() => {
              scrollToTopBtn.style.display = "none";
          }, 300);
      }
  });

  scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Conditional toggle functionality केवल Desktop (viewport > 768px) में
  if (window.innerWidth > 768) {
      const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
      const headerEl = document.querySelector(".header");

      toggleHeaderBtn.addEventListener("click", () => {
          // अगर header बंद है, तो खोलें
          if (headerEl.style.display === "none" || window.getComputedStyle(headerEl).display === "none") {
              headerEl.style.display = "block";
              toggleHeaderBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
              toggleHeaderBtn.setAttribute("data-tooltip", "Close Menu");
          } else {
              // अगर header खुला है, तो बंद करें
              headerEl.style.display = "none";
              toggleHeaderBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
              toggleHeaderBtn.setAttribute("data-tooltip", "Open Menu");
          }
      });
  } else {
      // Mobile view में toggle button और hamburger को छिपा दें
      const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
      if (toggleHeaderBtn) {
          toggleHeaderBtn.style.display = "none";
      }
      const hamburger = document.getElementById("hamburger");
      if (hamburger) {
          hamburger.style.display = "none";
      }
  }
});
