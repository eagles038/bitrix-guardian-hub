/**
 * Blog Page - JavaScript
 * /blog
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initBlogSearch();
    initPagination();
  });

  // =========================================
  // Blog Search
  // =========================================
  function initBlogSearch() {
    const searchInput = document.querySelector('.blog-hero__search-input');
    const blogPosts = document.querySelectorAll('.blog-post-card');
    const emptyState = document.querySelector('.blog-list__empty');
    const countElement = document.querySelector('.blog-list__count');
    
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

      if (countElement) {
        countElement.textContent = 'Показано статей: ' + visibleCount;
      }
    }, 300));
  }

  // =========================================
  // Pagination
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
        
        console.log('Navigate to page:', this.dataset.page);
      });
    });
  }

  // =========================================
  // Utility Functions
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
})();
