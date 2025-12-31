/**
 * Portfolio Detail Page - Vanilla JavaScript
 * Методология БЭМ
 */

(function() {
  'use strict';

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    var burger = document.getElementById('burger-menu');
    var mobileNav = document.getElementById('mobile-nav');

    if (!burger || !mobileNav) return;

    burger.addEventListener('click', function() {
      burger.classList.toggle('header__burger--active');
      mobileNav.classList.toggle('header__mobile-nav--open');
    });

    // Close menu when clicking on links
    var mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('header__burger--active');
        mobileNav.classList.remove('header__mobile-nav--open');
      });
    });
  }

  /**
   * Scroll Animations using Intersection Observer
   */
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('[data-animate]');

    if (!animatedElements.length) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      animatedElements.forEach(function(el) {
        el.classList.add('animate--visible');
      });
      return;
    }

    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-delay') || 0;
          
          setTimeout(function() {
            entry.target.classList.add('animate--visible');
          }, parseInt(delay, 10));

          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  /**
   * Header Scroll Effect
   */
  function initHeaderScroll() {
    var header = document.querySelector('.header');
    
    if (!header) return;

    var scrollThreshold = 50;

    function updateHeader() {
      if (window.scrollY > scrollThreshold) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = link.getAttribute('href');
        
        if (href === '#') return;

        var target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          var headerHeight = document.querySelector('.header').offsetHeight;
          var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Image Lazy Loading Enhancement
   */
  function initLazyImages() {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(function(img) {
      img.addEventListener('load', function() {
        img.style.opacity = '1';
      });

      // Initial opacity
      if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
      }
    });
  }

  /**
   * Initialize all modules
   */
  function init() {
    initMobileMenu();
    initScrollAnimations();
    initHeaderScroll();
    initSmoothScroll();
    initLazyImages();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
