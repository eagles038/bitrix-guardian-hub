/**
 * Index Page - Главная страница
 * JavaScript функции
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initCertificatesModal();
    initTestimonialsCarousel();
    initContactForm();
  });

  // =========================================
  // Certificates Modal
  // =========================================
  function initCertificatesModal() {
    const modal = document.querySelector('.modal');
    const modalImage = modal?.querySelector('.modal__image img');
    const modalTitle = modal?.querySelector('.modal__title');
    const modalClose = modal?.querySelector('.modal__close');
    
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
  // Testimonials Carousel
  // =========================================
  function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials__track');
    const prevBtn = document.querySelector('.testimonials__nav--prev');
    const nextBtn = document.querySelector('.testimonials__nav--next');
    
    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 16;
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
  // Contact Form
  // =========================================
  function initContactForm() {
    const form = document.querySelector('.contact__form form');
    
    if (!form) return;

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

    // Clear error on input
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('form-input--error');
        const error = this.parentElement.querySelector('.form-error');
        if (error) error.style.display = 'none';
      });
    });
  }
})();
