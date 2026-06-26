document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // CUSTOM CURSOR
  // ==========================================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateRing = () => {
      // Smooth interpolation for the ring lag effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover effect on interactive elements
    const hoverables = document.querySelectorAll('a, button, .logo-box, .skill-badge, .project-card, .cert-flip-card, select, input, textarea');
    hoverables.forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.backgroundColor = 'rgba(0, 245, 255, 0.1)';
        cursorRing.style.borderColor = 'transparent';
      });
      item.addEventListener('mouseleave', () => {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.backgroundColor = 'transparent';
        cursorRing.style.borderColor = 'var(--accent-primary)';
      });
    });
  }

  // ==========================================================================
  // SIMULATED LOADING SCREEN
  // ==========================================================================
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingBar = document.getElementById('loadingBar');

  if (loadingScreen && loadingBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.visibility = 'hidden';
          // Trigger animations of first section
          document.body.classList.add('loaded');
          startTypewriter();
          animateCounters();
        }, 300);
      }
      loadingBar.style.width = `${progress}%`;
    }, 100);
  }

  // ==========================================================================
  // SCROLL PROGRESS BAR
  // ==========================================================================
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const scrollPct = (window.pageYOffset / totalScroll) * 100;
      scrollProgress.style.width = `${scrollPct}%`;
    }
  });

  // ==========================================================================
  // MOBILE HAMBURGER MENU
  // ==========================================================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // HERO CANVAS PARTICLES
  // ==========================================================================
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 245, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Interaction with mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density * 0.5;
            let directionY = forceDirectionY * force * this.density * 0.5;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 100);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            let opacity = (1 - (dist / 100)) * 0.15;
            ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      requestAnimationFrame(animateParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    resizeCanvas();
    animateParticles();
  }

  // ==========================================================================
  // TYPEWRITER ANIMATION
  // ==========================================================================
  const typewriter = document.getElementById('typewriter');
  const roles = ["ECE Student", "Embedded Systems Developer", "VLSI Designer", "IoT Creator"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const startTypewriter = () => {
    if (!typewriter) return;
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriter.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriter.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1500; // pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // pause before typing next
    }

    setTimeout(startTypewriter, typeSpeed);
  };

  // ==========================================================================
  // STAT COUNTERS
  // ==========================================================================
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = target / 30; // dynamic duration speed
      
      const updateCount = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          setTimeout(updateCount, 40);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  };

  // ==========================================================================
  // SCROLL REVEAL (IntersectionObserver)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
  const progressFills = document.querySelectorAll('.learn-fill, .skill-bar-fill');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Custom check to trigger width transition for progress bars
        const fill = entry.target.querySelector('.learn-fill, .skill-bar-fill');
        if (fill) {
          const width = fill.getAttribute('data-width');
          fill.style.width = `${width}%`;
        }
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
  progressFills.forEach(el => revealObserver.observe(el.parentElement));

  // Also trigger active dot indicator & Navbar active states on scroll
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.dot');
  const navLinksList = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href') === `#${currentSectionId}`) {
          dot.classList.add('active');
        }
      });
      navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // SKILLS FILTER TABS
  // ==========================================================================
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillBadges = document.querySelectorAll('.skill-badge');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      skillBadges.forEach(badge => {
        if (filterValue === 'all' || badge.getAttribute('data-category') === filterValue) {
          badge.style.display = 'flex';
          badge.style.opacity = '1';
        } else {
          badge.style.opacity = '0';
          setTimeout(() => badge.style.display = 'none', 300);
        }
      });
    });
  });

  // ==========================================================================
  // WORKSHOP CAROUSEL (Horizontal slider)
  // ==========================================================================
  const workshopTrack = document.getElementById('workshopTrack');
  const prevBtn = document.getElementById('workshopPrev');
  const nextBtn = document.getElementById('workshopNext');
  const dotsContainer = document.getElementById('workshopDots');

  if (workshopTrack && prevBtn && nextBtn) {
    const getCards = () => document.querySelectorAll('.workshop-card');
    let currentIndex = 0;
    
    // Create dots indicator
    const updateCarousel = () => {
      const cards = getCards();
      const cardWidth = cards[0].offsetWidth + 25; // width + gap
      workshopTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      
      // Update dots
      const dots = document.querySelectorAll('.c-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    const maxIndex = () => {
      const cards = getCards();
      let visibleCount = 3;
      if (window.innerWidth <= 992) visibleCount = 2;
      if (window.innerWidth <= 768) visibleCount = 1;
      return Math.max(0, cards.length - visibleCount);
    };

    const buildDots = () => {
      dotsContainer.innerHTML = '';
      const dotCount = maxIndex() + 1;
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('c-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    };

    buildDots();
    window.addEventListener('resize', () => {
      buildDots();
      currentIndex = Math.min(currentIndex, maxIndex());
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex()) {
        currentIndex++;
      } else {
        currentIndex = 0; // Wrap around
      }
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex(); // Wrap to end
      }
      updateCarousel();
    });
  }

  // ==========================================================================
  // PROJECTS INTERACTIVE MODAL & SPECIFIC PROJECTS DETAILS
  // ==========================================================================
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');

  const projectDetails = {
    footstep: {
      title: "Footstep Power Generator System",
      badge: "✅ Completed",
      desc: "An innovative, eco-friendly energy project. It converts human movement into electrical power using piezoelectric sensors. This project has practical applications in busy public places like railway stations, malls, or sidewalks.",
      features: [
        "Uses piezoelectric sensors configured in a matrix pattern under floor tiles.",
        "Integrated a high-efficiency Boost Converter to step up the sensor output voltage.",
        "Equipped with Arduino to count footsteps and calculate the average voltage generated.",
        "Displays real-time footstep statistics and voltage on an LCD monitor."
      ],
      duration: "Duration: 2 Months | Team Size: 2 Members",
      github: "https://github.com/Tamil01-star",
      tags: ["Arduino", "Piezoelectric", "Power Electronics", "LCD Display"]
    },
    notes: {
      title: "Student Notes Management System",
      badge: "✅ Completed",
      desc: "A secure digital dashboard built for students to organize, search, share, and review lecture notes and reference documents. This web application streamlines study schedules, lets students set reminders, and enables collaborative folder organization.",
      features: [
        "Interactive dashboard interface with subject-wise folders.",
        "Real-time search bar that filters notes by keywords, tags, or authors.",
        "Custom upload manager for pdfs, images, and text notes with cloud storage options.",
        "LocalStorage integration to preserve student custom notes and reminders offline."
      ],
      duration: "Duration: 1.5 Months | Personal Project",
      github: "https://github.com/Tamil01-star",
      live: "https://engineering-notes-library-85mv-km7tbdj61-tamil01-stars-projects.vercel.app/",
      tags: ["HTML/CSS", "JavaScript", "Student App"]
    },
    restricted: {
      title: "Restricted Area Protection System in Industries & Factories",
      badge: "✅ Completed",
      desc: "An automated safety guardian system designed to prevent industrial accidents. Using a combination of sensors and a microcontroller, the system monitors designated high-risk zones and automatically cuts off machinery or sounds alarms when unauthorized entry is detected.",
      features: [
        "Uses PIR motion sensors and ultrasonic ranging to detect human presence near hazardous areas.",
        "Equipped with a high-intensity buzzer and warning LEDs for alert signals.",
        "Designed safety interlocks to automatically stop machinery if zones are breached.",
        "Optional wireless transmitter module (RF/LoRa) to send emergency alerts to supervisor consoles."
      ],
      duration: "Duration: 1.5 Months | Team Size: 3 Members",
      github: "https://github.com/Tamil01-star",
      tags: ["Sensors", "Embedded C", "Industrial Safety"]
    },
    attendance: {
      title: "Smart RFID & IoT Attendance System",
      badge: "🏆 Contribution Project",
      desc: "A contactless attendance solution that eliminates manual paper sheets. Students scan their RFID tags at the door, and the ESP32 microcontroller processes the tag ID, checks WiFi connectivity, and sends a secure HTTP request to automatically register attendance in real-time.",
      features: [
        "Features ESP32 microchip to connect to regional WiFi network and send cloud API requests.",
        "Features RC522 RFID reader that retrieves unique card serial numbers instantly.",
        "Integrates with Google Sheets API via Google Apps Script for automated cloud sheet logging.",
        "Includes a status OLED display showing student name and check-in confirmation."
      ],
      duration: "Duration: 1 Month | Personal Project",
      github: "https://github.com/Tamil01-star",
      tags: ["ESP32", "RFID RC522", "IoT Cloud", "OLED Screen"]
    },
    testportal: {
      title: "Students Test Portal",
      badge: "✅ Completed",
      desc: "A comprehensive online testing platform designed for students to take assessments and track their scores. It provides an intuitive interface for managing online exams and quizzes.",
      features: [
        "Interactive dashboard for students to view upcoming and past tests.",
        "Real-time timer and automated submission for online exams.",
        "Detailed score tracking and performance analytics.",
        "Secure login and authentication for student profiles."
      ],
      duration: "Duration: 1 Month | Personal Project",
      github: "https://github.com/Tamil01-star",
      live: "https://students-test-portal.vercel.app/",
      tags: ["HTML/CSS", "JavaScript", "Student App"]
    },
    vault: {
      title: "Secured Personal Vault",
      badge: "✅ Completed",
      desc: "A highly secure web application for safely storing and managing sensitive personal data and credentials. Features encrypted storage and secure access protocols.",
      features: [
        "End-to-end encryption for all stored passwords and sensitive documents.",
        "Secure user authentication and session management.",
        "Intuitive interface for organizing and categorizing secure notes.",
        "Responsive design ensuring access across devices."
      ],
      duration: "Duration: 1 Month | Personal Project",
      github: "https://github.com/Tamil01-star",
      live: "https://personal-vault-fawn-five.vercel.app/",
      tags: ["HTML/CSS", "JavaScript", "Security", "Web App"]
    }
  };

  window.openModal = (key) => {
    if (!projectDetails[key] || !modalOverlay || !modalContent) return;
    const detail = projectDetails[key];
    modalContent.innerHTML = `
      <h3 class="modal-title">${detail.title}</h3>
      <div class="modal-badge-row">
        <span class="proj-status completed">${detail.badge}</span>
        <span style="font-size:0.85rem; color:var(--text-secondary); align-self:center;">${detail.duration}</span>
      </div>
      ${detail.tags ? `
      <div class="proj-tags" style="margin: 15px 0;">
        ${detail.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
      </div>
      ` : ''}
      <p class="modal-desc">${detail.desc}</p>
      <h4 class="modal-section-title">Key Features</h4>
      <ul class="modal-list">
        ${detail.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="modal-footer" style="display:flex; gap:10px;">
        <a href="${detail.github}" target="_blank" class="proj-gh-btn">GitHub Repository ↗</a>
        ${detail.live ? `<a href="${detail.live}" target="_blank" class="proj-gh-btn" style="background:var(--primary-color); color:var(--bg-dark); border:none;">Live Demo ↗</a>` : ''}
      </div>
    `;
    modalOverlay.classList.add('active');
  };

  window.closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  };

  // Close project modal with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ==========================================================================
  // CERTIFICATE IMAGE MODAL
  // ==========================================================================
  window.openCertModal = (imgSrc, title, pdfSrc) => {
    const overlay = document.getElementById('certModalOverlay');
    const titleEl = document.getElementById('certModalTitle');
    const imgEl = document.getElementById('certModalImg');
    const dlEl = document.getElementById('certModalDl');
    
    if (!overlay) return;
    
    if (titleEl) titleEl.textContent = title;
    if (imgEl) imgEl.src = imgSrc;
    if (dlEl && pdfSrc) {
      dlEl.href = pdfSrc;
      dlEl.style.display = 'inline-block';
    } else if (dlEl) {
      dlEl.style.display = 'none';
    }
    
    overlay.classList.add('active');
  };

  window.closeCertModal = () => {
    const overlay = document.getElementById('certModalOverlay');
    if (overlay) overlay.classList.remove('active');
  };

  // Close certificate modal with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });

  // ==========================================================================
  // CONTACT FORM SUBMISSION WITH SPINNER & TOAST
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const btnSpinner = document.getElementById('btnSpinner');
  const btnText = document.getElementById('btnText');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show spinner state
      if (btnSpinner && btnText) {
        btnSpinner.style.display = 'block';
        btnText.style.display = 'none';
      }

      // Simulate network request
      setTimeout(() => {
        if (btnSpinner && btnText) {
          btnSpinner.style.display = 'none';
          btnText.style.display = 'inline-block';
        }
        
        // Show success toast
        showToast("Message Sent Successfully! 🚀 Thank you for connecting.");
        contactForm.reset();
      }, 1500);
    });
  }

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // ==========================================================================
  // EASTER EGG IMPLEMENTATION
  // ==========================================================================
  let clickCount = 0;
  const logo = document.querySelector('.logo-box');

  if (logo) {
    logo.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 5) {
        clickCount = 0;
        triggerEasterEgg();
      }
      // Reset count after 3 seconds
      setTimeout(() => { clickCount = 0; }, 3000);
    });
  }

  const triggerEasterEgg = () => {
    showToast("🎉 You've found the Easter Egg! Check your email — let's collaborate!");
    
    // Simple confetti element bursts
    for (let i = 0; i < 40; i++) {
      createConfetti();
    }
  };

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = ['#00F5FF', '#7B2FBE', '#FF6B35', '#FFF'][Math.floor(Math.random() * 4)];
    confetti.style.borderRadius = '50%';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-10px`;
    confetti.style.zIndex = '9999';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { top: '-10px', opacity: 1 },
      { top: '100vh', opacity: 0 }
    ], {
      duration: Math.random() * 2000 + 1500,
      easing: 'cubic-bezier(0.1, 0.8, 0.25, 1)'
    });

    animation.onfinish = () => confetti.remove();
  };

  // ==========================================================================
  // BACK TO TOP BUTTON
  // ==========================================================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
