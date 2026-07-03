/* =============================================
   Site Pessoal — Silvio Roberto Filho
   Scripts & Interatividade
   ============================================= */

'use strict';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // 1. Navbar — scroll effect
  // =============================================
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  const handleNavbarScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  // Trigger once on load to set initial state
  handleNavbarScroll();

  // =============================================
  // 2. Hamburger menu (mobile)
  // =============================================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      // Prevent body scroll when menu is open
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767 && navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // =============================================
  // 3. Highlight active nav link based on page
  // =============================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // =============================================
  // 4. Scroll to Top button
  // =============================================
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    const handleScrollTopVisibility = () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =============================================
  // 5. Contact Form validation & submission
  // =============================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const formGroups = contactForm.querySelectorAll('.form-group');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formSuccess = document.getElementById('formSuccess');

    // Real-time validation on blur
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('blur', () => {
        validateField(field);
      });

      field.addEventListener('input', () => {
        // Clear error state as user types
        const formGroup = field.closest('.form-group');
        if (formGroup) {
          field.classList.remove('error');
          const errorMsg = formGroup.querySelector('.error-message');
          if (errorMsg) errorMsg.remove();
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate all fields
      contactForm.querySelectorAll('input, textarea').forEach(field => {
        if (!validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
          firstError.focus({ preventScroll: true });
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Simulate submission
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.classList.add('show');
        }
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensagem';
      }, 1500);
    });

    function validateField(field) {
      const formGroup = field.closest('.form-group');
      // Remove existing error message
      const existingError = formGroup ? formGroup.querySelector('.error-message') : null;
      if (existingError) existingError.remove();

      field.classList.remove('error');

      let errorMessage = '';

      if (field.hasAttribute('required') && field.value.trim() === '') {
        errorMessage = 'Este campo é obrigatório.';
      } else if (field.type === 'email' && field.value.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          errorMessage = 'Insira um e-mail válido.';
        }
      } else if (field.tagName === 'TEXTAREA' && field.value.trim().length < 10) {
        errorMessage = 'A mensagem deve ter pelo menos 10 caracteres.';
      }

      if (errorMessage) {
        field.classList.add('error');
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.style.cssText = 'color: var(--color-secondary); font-size: 0.8rem; margin-top: 4px; display: block; font-weight: 500;';
        errorEl.textContent = errorMessage;
        if (formGroup) formGroup.appendChild(errorEl);
        return false;
      }

      return true;
    }
  }

  // =============================================
  // 6. Scroll Reveal Animation
  // =============================================
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  };

  // Add class for elements that should animate on scroll
  document.querySelectorAll('.project-card, .about-card, .contact-item, .skill-tag').forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s`;
  });

  // Add visible state style
  const style = document.createElement('style');
  style.textContent = `
    .animate-on-scroll.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Throttled scroll listener for animations
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = requestAnimationFrame(() => {
      animateOnScroll();
      scrollTimeout = null;
    });
  }, { passive: true });

  // Trigger once on load
  animateOnScroll();

  // =============================================
  // 7. Smooth scroll for anchor links
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =============================================
  // 8. Dynamic year in footer
  // =============================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log(`%c
  ╔══════════════════════════════╗
  ║   Silvio Roberto Filho       ║
  ║   Site Pessoal · v1.0        ║
  ╚══════════════════════════════╝
  `, 'color: #6C63FF; font-size: 14px; font-weight: bold;');
});
