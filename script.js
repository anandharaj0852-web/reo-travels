document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });

  // Form Submissions (Prevent Default for Demo)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get the submit button to show success state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      
      submitBtn.innerText = 'Processing...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        submitBtn.innerText = 'Success! We will contact you soon.';
        submitBtn.style.backgroundColor = '#10b981'; // Success Green
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      }, 1500);
    });
  });

  // Highlight Current Page in Nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
