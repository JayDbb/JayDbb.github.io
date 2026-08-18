(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  // Nav border on scroll
  window.addEventListener('scroll', function () {
    nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  }, { passive: true });

  // Mobile menu toggle
  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('nav__links--open');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('nav__links--open');
    });
  });

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // Stagger hero elements on load
  const heroElements = document.querySelectorAll('.hero .fade-in');
  heroElements.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('visible');
    }, 150 + i * 120);
  });
})();
