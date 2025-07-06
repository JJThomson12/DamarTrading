// Modern JavaScript for Damar Trading Website
class DamarTrading {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupSmoothScrolling();
    this.setupBackToTop();
    this.setupWhatsAppIntegration();
    this.setupContactForm();
    this.setupOrderForm();
    this.setupModal();
    this.setupAnimations();
    this.setupNotificationSystem();
    this.setupIntersectionObserver();
  }

  // Navigation Setup
  setupNavigation() {
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
    e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
  });
});
  }

// Back to Top Button
  setupBackToTop() {
const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'flex';
          backToTopBtn.style.opacity = '1';
  } else {
          backToTopBtn.style.opacity = '0';
          setTimeout(() => {
            if (window.pageYOffset <= 300) {
    backToTopBtn.style.display = 'none';
            }
          }, 300);
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
    }
  }

// WhatsApp Integration
  setupWhatsAppIntegration() {
    window.openWhatsApp = (product) => {
      const phoneNumber = '6281371453492';
      const message = `Halo! Saya tertarik dengan produk ${product} dari Damar Trading. Mohon informasi lebih lanjut tentang harga dan pengiriman.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
    };

    window.showContact = () => {
      const contactSection = document.getElementById('kontak');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };
}

// Contact Form Handling
  setupContactForm() {
const contactForm = document.getElementById('contactForm');
    
if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
        const formData = new FormData(contactForm);
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!this.validateForm({ name, email, phone, message })) {
      return;
    }
    
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
          this.showNotification('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.', 'success');
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
    }, 2000);
  });
    }
}

// Order Form Handling
  setupOrderForm() {
const orderForm = document.getElementById('orderForm');
    
if (orderForm) {
      orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
        const customerName = document.getElementById('customerName').value.trim();
        const customerPhone = document.getElementById('customerPhone').value.trim();
        const customerAddress = document.getElementById('customerAddress').value.trim();
        
        if (!this.validateOrderForm({ product, quantity, customerName, customerPhone, customerAddress })) {
      return;
    }
    
        // Show loading state
        const submitBtn = orderForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate order submission
    setTimeout(() => {
          this.showNotification('Pesanan berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.', 'success');
          orderForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          this.closeModal();
    }, 2000);
  });
    }
}

// Modal Functions
  setupModal() {
    window.openModal = () => {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
        modal.classList.add('active');
  }
    };

    window.closeModal = () => {
  const modal = document.getElementById('orderModal');
  if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
        }, 300);
  }
    };

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('orderModal');
  if (e.target === modal) {
        this.closeModal();
  }
});

// Close modal with X button
const closeBtn = document.querySelector('.close');
if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  // Animations Setup
  setupAnimations() {
    // Counter animation for stats
    this.animateCounters();
    
    // Parallax effect for hero section
    this.setupParallax();
    
    // Hover effects for cards
    this.setupHoverEffects();
  }

  // Counter Animation
  animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const increment = target / 50;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
        }
      };
      
      updateCounter();
    };

    // Trigger animation when stats are visible
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(counter => animateCounter(counter));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(statsSection);
    }
  }

  // Parallax Effect
  setupParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.hero-image img');
      
      parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  // Hover Effects
  setupHoverEffects() {
    // Product cards hover effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Why us items hover effect
    const whyUsItems = document.querySelectorAll('.why-us-item');
    whyUsItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
      });
    });
  }

  // Intersection Observer for animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .why-us-item, .testimonial-card, .feature');
    animateElements.forEach(el => observer.observe(el));
}

// Notification System
  setupNotificationSystem() {
    this.showNotification = (message, type = 'info') => {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
          notification.style.opacity = '0';
          setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
      
      // Close button functionality
      const closeBtn = notification.querySelector('.notification-close');
      closeBtn.addEventListener('click', () => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
      });
    };
  }

  // Form Validation
  validateForm(data) {
    const { name, email, phone, message } = data;
    
    if (!name || !email || !phone || !message) {
      this.showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showNotification('Format email tidak valid.', 'error');
      return false;
    }
    
    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      this.showNotification('Format nomor telepon tidak valid.', 'error');
      return false;
    }
    
    return true;
  }

  validateOrderForm(data) {
    const { product, quantity, customerName, customerPhone, customerAddress } = data;
    
    if (!product || !quantity || !customerName || !customerPhone || !customerAddress) {
      this.showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
      return false;
    }
    
    if (quantity < 1) {
      this.showNotification('Jumlah minimal adalah 1.', 'error');
      return false;
    }
    
    return true;
  }

  closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DamarTrading();
});

// Add CSS for navbar scroll effect
const style = document.createElement('style');
style.textContent = `
  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .modal.active {
    animation: modalFadeIn 0.3s ease-out;
  }
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .notification {
    animation: slideInRight 0.3s ease-out;
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);
