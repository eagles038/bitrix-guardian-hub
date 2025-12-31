/**
 * BitrixPro - Main JavaScript
 * Все интерактивные функции сайта
 */

(function() {
  'use strict';

  // =========================================
  // 1. DOM Ready
  // =========================================
  document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initCertificatesModal();
    initTestimonialsCarousel();
    initContactForm();
    initBlogSearch();
    initPagination();
    initCodeCopy();
    initLazyLoading();
  });

  // =========================================
  // 2. Header Scroll Effect
  // =========================================
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;
      
      if (scrollY > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });

    updateHeader();
  }

  // =========================================
  // 3. Mobile Menu
  // =========================================
  function initMobileMenu() {
    const menuBtn = document.querySelector('.header__menu-btn');
    const mobileNav = document.querySelector('.header__mobile-nav');
    const menuIcon = document.querySelector('.header__menu-icon');
    
    if (!menuBtn || !mobileNav) return;

    let isOpen = false;

    menuBtn.addEventListener('click', function() {
      isOpen = !isOpen;
      mobileNav.classList.toggle('header__mobile-nav--open', isOpen);
      
      // Update icon
      if (menuIcon) {
        menuIcon.innerHTML = isOpen 
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    // Close menu on link click
    const mobileLinks = mobileNav.querySelectorAll('.header__mobile-link');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        isOpen = false;
        mobileNav.classList.remove('header__mobile-nav--open');
        if (menuIcon) {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
      if (isOpen && !menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        isOpen = false;
        mobileNav.classList.remove('header__mobile-nav--open');
        if (menuIcon) {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      }
    });
  }

  // =========================================
  // 4. Scroll Animations
  // =========================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.animateDelay || 0;
          setTimeout(function() {
            entry.target.classList.add('animate-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // =========================================
  // 5. Smooth Scroll
  // =========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =========================================
  // 6. Certificates Modal
  // =========================================
  function initCertificatesModal() {
    const modal = document.querySelector('.modal');
    const modalContent = modal?.querySelector('.modal__content');
    const modalClose = modal?.querySelector('.modal__close');
    const modalImage = modal?.querySelector('.modal__image img');
    const modalTitle = modal?.querySelector('.modal__title');
    
    if (!modal) return;

    const certificates = document.querySelectorAll('.certificate-card');
    
    certificates.forEach(function(cert) {
      cert.addEventListener('click', function() {
        const img = this.querySelector('img');
        const title = this.querySelector('.certificate-card__title')?.textContent;
        
        if (modalImage && img) {
          modalImage.src = img.src;
          modalImage.alt = img.alt;
        }
        
        if (modalTitle && title) {
          modalTitle.textContent = title;
        }
        
        modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close modal
    function closeModal() {
      modal.classList.remove('modal--open');
      document.body.style.overflow = '';
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal();
      }
    });
  }

  // =========================================
  // 7. Testimonials Carousel
  // =========================================
  function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials__track');
    const prevBtn = document.querySelector('.testimonials__nav--prev');
    const nextBtn = document.querySelector('.testimonials__nav--next');
    
    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 16; // width + gap
    const visibleCards = Math.floor(track.offsetWidth / cardWidth);
    const maxIndex = Math.max(0, cards.length - visibleCards);

    function updateCarousel() {
      track.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateCarousel();
      });
    }

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          currentIndex = Math.min(maxIndex, currentIndex + 1);
        } else {
          currentIndex = Math.max(0, currentIndex - 1);
        }
        updateCarousel();
      }
    }
  }

  // =========================================
  // 8. Contact Form
  // =========================================
  function initContactForm() {
    const forms = document.querySelectorAll('.contact__form form, .contacts-page form');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn?.innerHTML;
        
        // Validate
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(function(field) {
          const error = field.parentElement.querySelector('.form-error');
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('form-input--error');
            if (error) error.style.display = 'block';
          } else {
            field.classList.remove('form-input--error');
            if (error) error.style.display = 'none';
          }
        });

        // Email validation
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.classList.add('form-input--error');
          }
        }

        if (!isValid) return;

        // Show loading
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Отправка...';
        }

        // Simulate submission
        setTimeout(function() {
          // Show success
          const formWrapper = form.closest('.glass-card');
          if (formWrapper) {
            formWrapper.innerHTML = `
              <div class="contact__success">
                <svg class="contact__success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="contact__success-title">Заявка отправлена!</h3>
                <p class="contact__success-text">Спасибо за обращение. Свяжемся с вами в ближайшее время.</p>
              </div>
            `;
          }
        }, 1000);
      });
    });

    // Clear error on input
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('form-input--error');
        const error = this.parentElement.querySelector('.form-error');
        if (error) error.style.display = 'none';
      });
    });
  }

  // =========================================
  // 9. Blog Search
  // =========================================
  function initBlogSearch() {
    const searchInput = document.querySelector('.blog-hero__search-input');
    const blogPosts = document.querySelectorAll('.blog-post-card');
    const emptyState = document.querySelector('.blog-list__empty');
    
    if (!searchInput || !blogPosts.length) return;

    searchInput.addEventListener('input', debounce(function() {
      const query = this.value.toLowerCase().trim();
      let visibleCount = 0;

      blogPosts.forEach(function(post) {
        const title = post.querySelector('.blog-post-card__title')?.textContent.toLowerCase() || '';
        const excerpt = post.querySelector('.blog-post-card__excerpt')?.textContent.toLowerCase() || '';
        const category = post.querySelector('.blog-post-card__category')?.textContent.toLowerCase() || '';
        
        const isMatch = !query || title.includes(query) || excerpt.includes(query) || category.includes(query);
        
        post.style.display = isMatch ? 'block' : 'none';
        if (isMatch) visibleCount++;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }, 300));
  }

  // =========================================
  // 10. Pagination
  // =========================================
  function initPagination() {
    const paginationBtns = document.querySelectorAll('.pagination__btn[data-page]');
    
    paginationBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all
        paginationBtns.forEach(function(b) {
          b.classList.remove('pagination__btn--active');
        });
        
        // Add active to clicked
        this.classList.add('pagination__btn--active');
        
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Here you would normally load the next page content
        console.log('Navigate to page:', this.dataset.page);
      });
    });
  }

  // =========================================
  // 11. Code Copy Button
  // =========================================
  function initCodeCopy() {
    const copyBtns = document.querySelectorAll('.code-block__copy');
    
    copyBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const codeBlock = this.closest('.code-block');
        const code = codeBlock?.querySelector('code')?.textContent;
        
        if (code) {
          navigator.clipboard.writeText(code).then(function() {
            const originalText = btn.textContent;
            btn.textContent = 'Скопировано!';
            setTimeout(function() {
              btn.textContent = originalText;
            }, 2000);
          });
        }
      });
    });
  }

  // =========================================
  // 12. Lazy Loading Images
  // =========================================
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      return;
    }

    // Fallback for older browsers
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // =========================================
  // 13. Utility Functions
  // =========================================
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  // Format date for blog posts
  window.formatDate = function(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
  };

  // Format views count
  window.formatViews = function(views) {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

})();
