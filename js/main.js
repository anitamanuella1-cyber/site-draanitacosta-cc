// AOS init
AOS.init({ once: true, offset: 60, duration: 700, easing: 'ease-out-cubic', delay: 0 });

// Header shadow on scroll
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});

// Close menu on nav link click
nav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// Parallax suave na hero image
const heroImg = document.querySelector('.hero__image');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroImg.style.transform = `translateY(${y * 0.12}px)`;
  }, { passive: true });
}

// Contador animado nos números da trust bar
const counters = document.querySelectorAll('.hero__trust-item strong');
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'counter-up .5s ease-out forwards';
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 1 });
counters.forEach(c => countObserver.observe(c));

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

