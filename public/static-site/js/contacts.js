/**
 * Contacts Page - JavaScript
 * /contacts
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initContactsForm();
  });

  // =========================================
  // Contacts Form
  // =========================================
  function initContactsForm() {
    const form = document.querySelector('.contacts-form__card form');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn?.innerHTML;
      
      // Validate
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('form-input--error');
        } else {
          field.classList.remove('form-input--error');
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
        const formCard = form.closest('.contacts-form__card');
        if (formCard) {
          formCard.innerHTML = `
            <div class="contact__success">
              <svg class="contact__success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="contact__success-title">Заявка отправлена!</h3>
              <p class="contact__success-text">Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
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
      });
    });
  }
})();
