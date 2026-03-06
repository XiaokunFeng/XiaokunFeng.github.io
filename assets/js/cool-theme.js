/**
 * Cool Theme JS - Academic Homepage
 * Pure vanilla JS: particle constellation, scroll animations,
 * typing effect, back-to-top, smooth scrolling
 */

(function () {
  'use strict';

  // Only run on cool-dark-theme pages
  if (!document.body.classList.contains('cool-dark-theme')) return;

  /* ============================================
     1. Particle Constellation Background
     ============================================ */
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  let mouseX = -9999;
  let mouseY = -9999;
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 40 : 80;
  const CONNECTION_DISTANCE = isMobile ? 100 : 150;
  const MOUSE_RADIUS = 180;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(96, 165, 250, ' + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles and mouse connections
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse interaction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS) {
        const alpha = (1 - dist / MOUSE_RADIUS) * 0.3;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = 'rgba(167, 139, 250, ' + alpha + ')';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Gentle push away from mouse
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
        p.vx -= dx * force;
        p.vy -= dy * force;
      }

      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1.5) {
        p.vx = (p.vx / speed) * 1.5;
        p.vy = (p.vy / speed) * 1.5;
      }

      // Friction to restore gentle drift
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(96, 165, 250, ' + p.opacity + ')';
      ctx.fill();
    }

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  initParticles();
  drawParticles();

  window.addEventListener('resize', function () {
    resizeCanvas();
    // Re-init if particle count should change (orientation switch)
    if ((window.innerWidth < 768) !== isMobile) {
      location.reload();
    }
  });

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseleave', function () {
    mouseX = -9999;
    mouseY = -9999;
  });

  /* ============================================
     2. Scroll-Triggered Fade-In Animations
     ============================================ */
  function setupScrollAnimations() {
    // Add fade-in class to major content sections
    var content = document.querySelector('.page__content');
    if (!content) return;

    // Mark h1 sections and their following siblings
    var children = content.children;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      var tag = el.tagName;

      if (tag === 'H1' || tag === 'H2') {
        el.classList.add('fade-in-section');
      } else if (tag === 'DIV' && (el.classList.contains('paper-box') || el.classList.contains('school-box'))) {
        el.classList.add('fade-in-item');
      } else if (tag === 'UL' || tag === 'OL') {
        // Add fade-in to individual list items
        var items = el.children;
        for (var j = 0; j < items.length; j++) {
          items[j].classList.add('fade-in-item');
          items[j].style.transitionDelay = (j * 0.08) + 's';
        }
      } else if (tag === 'BLOCKQUOTE' || tag === 'P') {
        el.classList.add('fade-in-section');
      }
    }

    // Observe elements
    if ('IntersectionObserver' in window) {
      var observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
      };

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in-section, .fade-in-item').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything immediately
      document.querySelectorAll('.fade-in-section, .fade-in-item').forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* ============================================
     3. Typing Effect on Author Name
     ============================================ */
  function setupTypingEffect() {
    var nameEl = document.querySelector('.author__name');
    if (!nameEl) return;

    var fullName = nameEl.textContent.trim();
    nameEl.textContent = '';

    // Add cursor element
    var cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    nameEl.appendChild(cursor);

    var charIndex = 0;
    var typingSpeed = 100;

    function typeChar() {
      if (charIndex < fullName.length) {
        // Insert character before cursor
        var textNode = document.createTextNode(fullName.charAt(charIndex));
        nameEl.insertBefore(textNode, cursor);
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Remove cursor after a delay
        setTimeout(function () {
          cursor.style.animation = 'cursorBlink 1s step-end 3';
          setTimeout(function () {
            cursor.style.display = 'none';
          }, 3000);
        }, 1000);
      }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 600);
  }

  /* ============================================
     4. Back-to-Top Button
     ============================================ */
  function setupBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    var scrollThreshold = 400;

    window.addEventListener('scroll', function () {
      if (window.scrollY > scrollThreshold) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================
     5. Smooth Scrolling for Navigation Links
     ============================================ */
  function setupSmoothScrolling() {
    var navLinks = document.querySelectorAll('.greedy-nav a[href*="#"]');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        // Handle both "/#section" and "#section" formats
        var hash = href.indexOf('#') !== -1 ? href.substring(href.indexOf('#')) : null;
        if (!hash) return;

        var target = document.querySelector(hash);
        if (!target) {
          // Try decoding the hash (for emoji-based IDs)
          try {
            target = document.getElementById(decodeURIComponent(hash.substring(1)));
          } catch (ex) {
            return;
          }
        }
        if (!target) return;

        e.preventDefault();

        var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }

  /* ============================================
     6. Initialize Everything on DOM Ready
     ============================================ */
  function init() {
    setupTypingEffect();
    setupScrollAnimations();
    setupBackToTop();
    setupSmoothScrolling();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
