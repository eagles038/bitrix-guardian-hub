/**
 * Portfolio Detail Page - JavaScript
 * /portfolio/[slug]
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initImageLightbox();
  });

  // =========================================
  // Image Lightbox
  // =========================================
  function initImageLightbox() {
    const images = document.querySelectorAll('.portfolio-detail__screenshots-image');
    
    images.forEach(function(img) {
      img.style.cursor = 'zoom-in';
      
      img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.style.cssText = `
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: hsla(0, 0%, 0%, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
        `;
        
        const image = document.createElement('img');
        image.src = this.src;
        image.alt = this.alt;
        image.style.cssText = `
          max-width: 100%;
          max-height: 100%;
          border-radius: 0.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        
        overlay.appendChild(image);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        
        overlay.addEventListener('click', function() {
          document.body.removeChild(overlay);
          document.body.style.overflow = '';
        });
        
        document.addEventListener('keydown', function closeOnEscape(e) {
          if (e.key === 'Escape') {
            if (document.body.contains(overlay)) {
              document.body.removeChild(overlay);
              document.body.style.overflow = '';
            }
            document.removeEventListener('keydown', closeOnEscape);
          }
        });
      });
    });
  }
})();
