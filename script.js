document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200); // Each section appears 200ms apart
    });
  });
  