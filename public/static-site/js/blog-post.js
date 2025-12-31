/**
 * Blog Post Page - JavaScript
 * /blog/[slug]
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initCodeCopy();
    initShareButtons();
  });

  // =========================================
  // Code Copy Button
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
  // Share Buttons
  // =========================================
  function initShareButtons() {
    const shareBtn = document.querySelector('.blog-post-share__btn');
    
    if (shareBtn) {
      shareBtn.addEventListener('click', function() {
        const url = window.location.href;
        const title = document.title;
        
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url
          });
        } else {
          navigator.clipboard.writeText(url).then(function() {
            alert('Ссылка скопирована!');
          });
        }
      });
    }
  }
})();
