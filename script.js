document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200); // Each section appears 200ms apart
    });

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.innerHTML = nav.classList.contains('open') 
        ? '×' // Close symbol
        : '☰'; // Menu symbol
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.innerHTML = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.innerHTML = '☰';
      }
    });
  });
  
  