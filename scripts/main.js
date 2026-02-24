
document.addEventListener('DOMContentLoaded', () => {
  
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/') {
      item.classList.add('active');
    } else if (currentPath === '/' || currentPath.endsWith(' ./')) {
      if (href === ' ./' || href === '/') {
        item.classList.add('active');
      }
    }
  });

  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        
        setTimeout(() => {
          submitBtn.textContent = 'Message Sent!';
          submitBtn.style.backgroundColor = 'var(--color-secondary)';
          submitBtn.style.color = 'var(--color-primary)';
          form.reset();

          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
          }, 3000);
        }, 1500);
      }
    });
  });
});
