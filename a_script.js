document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }

  // Logout functionality
  const logoutLinks = document.querySelectorAll('.logout-link');
  logoutLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Are you sure you want to sign out?')) {
        // For now, just redirect to the same page (in a real app, this would redirect to login)
        window.location.href= "login.html";
      }
    });
  });

  // --------- TESTIMONIALS ---------
  const testimonials = [
    {
      quote: "The best place to grow and innovate!",
      author: "Jeewan Pandey",
      position: "BICTE Graduate"
    },
    {
      quote: "Sanothimi Campus provided me with the perfect blend of academic knowledge and real-world experience. The professors were supportive, and the learning environment was truly inspiring. I owe my success to this institution!",
      author: "Saraswati Pandey",
      position: "BICTE Graduate, 2023"
    },
    {
      quote: "The campus has grown so much in recent years. From smart classrooms to digital libraries, everything is modern and student-friendly. I feel proud to be a part of Sanothimi Campus.",
      author: "Krishna Bhattarai",
      position: "Current Student, B.Ed. 6th Semester"
    },
    {
      quote: "Teaching at Sanothimi Campus has been a rewarding journey. The students are enthusiastic learners, and the administration is always focused on improving quality education.",
      author: "Bimal Diyal",
      position: "Faculty Member, Department of Education"
    },
    {
      quote: "Sanothimi Campus not only shaped my career but also built my character. The discipline, values, and confidence I gained here have helped me reach great heights.",
      author: "Bishal Kumar Mishra",
      position: "CEO, GS-Abroad Study"
    }
  ];

  // Initialize testimonials
  const testimonialSlider = document.getElementById('testimonialSlider');
  const testimonialPagination = document.getElementById('testimonialPagination');

  if (testimonialSlider && testimonialPagination) {
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
      
      slide.innerHTML = `
        <p class="testimonial-quote">"${testimonial.quote}"</p>
        <div>
          <p class="testimonial-author">– ${testimonial.author},</p>
          <p class="testimonial-position">${testimonial.position}</p>
        </div>
      `;
      
      testimonialSlider.appendChild(slide);
      
      // Create pagination dot
      const dot = document.createElement('div');
      dot.className = `pagination-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', index);
      
      dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        setActiveTestimonial(slideIndex);
      });
      
      testimonialPagination.appendChild(dot);
    });
    
    // Auto rotate testimonials
    let activeTestimonial = 0;
    
    function setActiveTestimonial(index) {
      const slides = document.querySelectorAll('.testimonial-slide');
      const dots = document.querySelectorAll('.pagination-dot');
      
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      activeTestimonial = index;
    }
    
    setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
      setActiveTestimonial(activeTestimonial);
    }, 5000);
  }

  // --------- COURSES ---------
  const courses = [
    {
      id: "bicte",
      title: "Bachelor in Information Communication Technology Education (BICTE)",
      duration: "4 years",
      seats: 45,
      eligibility: "10+2 with at least 45% marks in Science/Education stream",
      description: "BICTE program integrates ICT with education methodologies, preparing students to become skilled educational technologists and ICT educators. The program includes programming, web development, educational software design, and teaching techniques.",
      keySubjects: ["Programming Fundamentals", "Web Technology", "Database Management", "Educational Technology", "Teaching Methodology", "ICT in Education", "Network & System Administration"],
      career: ["ICT Teacher", "Educational Software Developer", "E-learning Specialist", "Educational Technology Consultant", "School IT Administrator"],
      color: "linear-gradient(135deg, #4f46e5, #6366f1)"
    },
    {
      id: "bbs",
      title: "Bachelor of Business Studies (BBS)",
      duration: "4 years",
      seats: 50,
      eligibility: "10+2 with at least 45% marks in any stream",
      description: "The BBS program provides a comprehensive foundation in business management principles and practices. It equips students with analytical, decision-making, and leadership skills necessary for successful careers in business and management.",
      keySubjects: ["Business Economics", "Financial Accounting", "Marketing Management", "Human Resource Management", "Business Law", "Strategic Management", "Entrepreneurship Development"],
      career: ["Business Analyst", "Marketing Executive", "Human Resource Manager", "Banking Professional", "Entrepreneur"],
      color: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      id: "bedscience",
      title: "B.Ed in Science",
      duration: "4 years",
      seats: 40,
      eligibility: "10+2 with at least 45% marks in Science stream",
      description: "The B.Ed in Science program prepares students to become qualified science educators with strong subject knowledge and effective teaching methodologies. Students specialize in Physics, Chemistry, Biology, or Mathematics teaching.",
      keySubjects: ["Physics Education", "Chemistry Education", "Biology Education", "Mathematics Education", "Science Teaching Methods", "Curriculum Development", "Educational Psychology"],
      career: ["Science Teacher", "Curriculum Developer", "Educational Material Developer", "Science Lab Coordinator", "Education Researcher"],
      color: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    {
      id: "bededucation",
      title: "B.Ed in Education",
      duration: "4 years",
      seats: 45,
      eligibility: "10+2 with at least 45% marks in any stream",
      description: "The B.Ed in Education program focuses on educational foundations, theories, and pedagogical approaches. It provides a broad understanding of educational systems, curriculum development, and teaching-learning processes.",
      keySubjects: ["Educational Philosophy", "Educational Sociology", "Educational Psychology", "Curriculum Studies", "Teaching Methodologies", "Educational Administration", "Educational Research"],
      career: ["Teacher", "Educational Administrator", "Curriculum Planner", "Educational Counselor", "Academic Coordinator"],
      color: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    {
      id: "bednepali",
      title: "B.Ed in Nepali",
      duration: "4 years",
      seats: 35,
      eligibility: "10+2 with at least 45% marks with Nepali as a subject",
      description: "The B.Ed in Nepali program prepares students to become proficient Nepali language educators. It covers Nepali literature, linguistics, and specific teaching methodologies for language education.",
      keySubjects: ["Nepali Literature", "Nepali Grammar", "Language Teaching Methods", "Nepali Linguistics", "Literature Analysis", "Creative Writing", "Cultural Studies"],
      career: ["Nepali Teacher", "Translator", "Content Writer", "Language Researcher", "Literary Critic"],
      color: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    {
      id: "bedenglish",
      title: "B.Ed in English",
      duration: "4 years",
      seats: 40,
      eligibility: "10+2 with at least 45% marks with English as a subject",
      description: "The B.Ed in English program equips students with advanced English language proficiency and specialized teaching skills. It covers English literature, linguistics, and language teaching methodologies.",
      keySubjects: ["English Literature", "English Grammar", "Language Teaching Methods", "Applied Linguistics", "Phonetics & Phonology", "English for Specific Purposes", "Literary Criticism"],
      career: ["English Teacher", "Language Trainer", "Content Developer", "Editor", "English Language Program Coordinator"],
      color: "linear-gradient(135deg, #0ea5e9, #0284c7)"
    },
    {
      id: "sne",
      title: "Special Need Education (SNE)",
      duration: "2 years",
      seats: 30,
      eligibility: "10+2 with at least 45% marks in any stream",
      description: "The Special Need Education program prepares educators to work with students who have diverse learning needs. It covers inclusive education practices, specialized teaching approaches, and support systems for differently-abled learners.",
      keySubjects: ["Inclusive Education", "Learning Disabilities", "Sensory & Physical Disabilities", "Behavior Management", "Individualized Education Planning", "Assistive Technologies", "Special Education Assessment"],
      career: ["Special Education Teacher", "Inclusive Education Specialist", "Rehabilitation Counselor", "Learning Support Coordinator", "Early Intervention Specialist"],
      color: "linear-gradient(135deg, #e11d48, #be123c)"
    }
  ];

  // Initialize courses
  const courseTabs = document.getElementById('courseTabs');
  const courseContent = document.getElementById('courseContent');
  const coursePagination = document.getElementById('coursePagination');

  if (courseTabs && courseContent && coursePagination) {
    // Create course tabs
    courses.forEach((course, index) => {
      // Create tab
      const tab = document.createElement('div');
      tab.className = `course-tab ${index === 0 ? 'active' : ''}`;
      tab.style.background = index === 0 ? course.color : '#f1f5f9';
      tab.style.color = index === 0 ? '#fff' : '#64748b';
      tab.textContent = course.title.split('(')[0].trim();
      tab.setAttribute('data-index', index);
      
      tab.addEventListener('click', function() {
        const tabIndex = parseInt(this.getAttribute('data-index'));
        setActiveCourse(tabIndex);
      });
      
      courseTabs.appendChild(tab);
      
      // Create content
      const content = document.createElement('div');
      content.className = `course-item ${index === 0 ? 'active' : ''}`;
      
      content.innerHTML = `
        <div class="course-header">
          <div class="course-color-bar" style="background: ${course.color}"></div>
          <h3 class="course-title">${course.title}</h3>
          <div class="course-meta">
            <div class="course-meta-item">
              <i class="fas fa-clock"></i>
              <span>${course.duration}</span>
            </div>
            <div class="course-meta-item">
              <i class="fas fa-users"></i>
              <span>${course.seats} seats</span>
            </div>
          </div>
        </div>
        
        <div class="course-layout">
          <div class="course-info">
            <h4>Description</h4>
            <p>${course.description}</p>
            
            <h4>Eligibility</h4>
            <p>${course.eligibility}</p>
          </div>
          
          <div class="course-sidebar" style="background: ${course.color}">
            <h4>Key Subjects</h4>
            <ul>
              ${course.keySubjects.map(subject => `
                <li>
                  <i class="fas fa-check-circle"></i>
                  <span>${subject}</span>
                </li>
              `).join('')}
            </ul>
            
            <h4>Career Opportunities</h4>
            <ul>
              ${course.career.map(career => `
                <li>
                  <i class="fas fa-briefcase"></i>
                  <span>${career}</span>
                </li>
              `).join('')}
            </ul>
            
            <div class="course-apply">
              <a href="#" class="apply-btn">Apply Now</a>
            </div>
          </div>
        </div>
      `;
      
      courseContent.appendChild(content);
      
      // Create pagination dot
      const dot = document.createElement('div');
      dot.className = `pagination-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', index);
      
      dot.addEventListener('click', function() {
        const dotIndex = parseInt(this.getAttribute('data-index'));
        setActiveCourse(dotIndex);
      });
      
      coursePagination.appendChild(dot);
    });
    
    // Function to set active course
    let activeCourse = 0;
    
    function setActiveCourse(index) {
      // Update tabs
      const tabs = document.querySelectorAll('.course-tab');
      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('active');
          tab.style.background = courses[i].color;
          tab.style.color = '#fff';
        } else {
          tab.classList.remove('active');
          tab.style.background = '#f1f5f9';
          tab.style.color = '#64748b';
        }
      });
      
      // Update content
      const contents = document.querySelectorAll('.course-item');
      contents.forEach((content, i) => {
        content.classList.toggle('active', i === index);
      });
      
      // Update pagination
      const dots = document.querySelectorAll('#coursePagination .pagination-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      
      activeCourse = index;
    }
    
    // Auto rotate courses
    let courseInterval = setInterval(() => {
      activeCourse = (activeCourse + 1) % courses.length;
      setActiveCourse(activeCourse);
    }, 8000);
    
    // Pause rotation when user interacts
    courseTabs.addEventListener('mouseenter', () => {
      clearInterval(courseInterval);
    });
    
    courseTabs.addEventListener('mouseleave', () => {
      courseInterval = setInterval(() => {
        activeCourse = (activeCourse + 1) % courses.length;
        setActiveCourse(activeCourse);
      }, 8000);
    });
  }

  // --------- DASHBOARD STATS ---------
  const countStats = [
    { target: 5, label: "Representatives" },
    { target: 12, label: "Administrators" },
    { target: 40, label: "Staff Members" },
    { target: 50, label: "Professors" },
    { target: 850, label: "Students" }
  ];

  const dashboardStats = document.getElementById('dashboardStats');

  if (dashboardStats) {
    // Create stat cards
    countStats.forEach(stat => {
      const statCard = document.createElement('div');
      statCard.className = 'stat-card';
      
      statCard.innerHTML = `
        <div class="stat-value" data-target="${stat.target}">0</div>
        <div class="stat-label">${stat.label}</div>
      `;
      
      dashboardStats.appendChild(statCard);
    });

    // Add resource cards
    const resourceCards = [
      { icon: "📅", label: "Upcoming Events" },
      { icon: "📝", label: "Recent Activities" },
      { icon: "📚", label: "Academic Resources" }
    ];

    resourceCards.forEach(card => {
      const statCard = document.createElement('div');
      statCard.className = 'stat-card';
      
      statCard.innerHTML = `
        <div class="stat-value">${card.icon}</div>
        <div class="stat-label">${card.label}</div>
      `;
      
      dashboardStats.appendChild(statCard);
    });
    
    // Counter animation
    const statElements = document.querySelectorAll('.stat-value[data-target]');
    let animationStarted = false;
    
    function startCountAnimation() {
      if (animationStarted) return;
      
      animationStarted = true;
      
      statElements.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = Math.ceil(target / 100);
        
        const updateCounter = () => {
          if (count < target) {
            count += increment;
            counter.textContent = count > target ? target : count;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        updateCounter();
      });
    }
    
    // Start counter animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCountAnimation();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(dashboardStats);
  }

  // --------- NOTICES ---------
  const notices = [
    {
      title: "End-of-Semester Exam Schedule",
      date: "2025-05-10",
      content: "The end-of-semester examinations for all programs will commence on June 15, 2025. Students must check the detailed schedule posted on the notice board and ensure they have cleared all dues before the exams.",
      type: "important"
    },
    {
      title: "New Faculty Appointment",
      date: "2025-05-05",
      content: "We are pleased to announce that Dr. Ramesh Sharma has joined our Department of Information Technology as Associate Professor. Dr. Sharma brings extensive experience in AI and Machine Learning.",
      type: "new"
    },
    {
      title: "Scholarship Applications",
      date: "2025-04-28",
      content: "Applications are now being accepted for the TU Merit Scholarship for the academic year 2025-2026. Eligible students can submit their applications to the Student Welfare Office by May 30, 2025.",
      type: "important"
    },
    {
      title: "Campus Closure Notice",
      date: "2025-04-25",
      content: "The campus will remain closed from May 15-17, 2025 for the annual maintenance work. All administrative services will be unavailable during this period. Emergency contacts are available on the campus website.",
      type: "urgent"
    },
    {
      title: "BICTE Project Submission Deadline",
      date: "2025-04-20",
      content: "All final year BICTE students are reminded that the deadline for project submission is May 25, 2025. No extensions will be granted except in extreme circumstances with proper documentation.",
      type: "important"
    }
  ];

  const noticesContainer = document.getElementById('noticesContainer');
  
  if (noticesContainer) {
    notices.forEach(notice => {
      const noticeCard = document.createElement('div');
      noticeCard.className = 'notice-card animate-scale-in';
      
      // Format date
      const dateObj = new Date(notice.date);
      const formattedDate = `${dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${dateObj.getFullYear()}`;
      
      noticeCard.innerHTML = `
        <div class="notice-header">
          <h3 class="notice-title">${notice.title}</h3>
          <span class="notice-date">${formattedDate}</span>
        </div>
        <p class="notice-content">${notice.content}</p>
        <span class="notice-badge ${notice.type}">${notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}</span>
      `;
      
      noticesContainer.appendChild(noticeCard);
    });
  }

  // --------- BLOGS ---------
  const blogPosts = [
    {
      title: "Reflections from a Retired Professor",
      excerpt: "After 30 years of teaching at Sanothimi Campus, I reflect on the evolution of education and the bright future ahead for our students.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Bhim Prasad",
      icon: "🎓"
    },
    {
      title: "Graduate Student Experiences",
      excerpt: "Recent BICTE graduates share their journey through the program and how it prepared them for their careers in educational technology.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Anisha Shrestha",
      icon: "🎓"
    },
    {
      title: "Insights from Current Students",
      excerpt: "Current students discuss campus life, academic challenges, and the supportive community they've found at Sanothimi Campus.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGluc2lnaHR8ZW58MHx8MHx8fDA%3D",
      author: "Sujan Tamang",
      icon: "📖"
    },
    {
      title: "Campus Research Articles",
      excerpt: "Faculty members present their latest research findings in education technology and methodologies being developed at our campus.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc2VhcmNofGVufDB8fDB8fHww",
      author: "Research Department",
      icon: "🔬"
    },
    {
      title: "Teaching in the Digital Age",
      excerpt: "How our BICTE program is adapting to prepare teachers for technology-integrated classrooms and virtual learning environments.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Kavita Sharma",
      icon: "💻"
    }
  ];

  const blogGrid = document.getElementById('blogGrid');
  
  if (blogGrid) {
    blogPosts.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card';
      
      blogCard.innerHTML = `
        <div class="blog-image">
          <div class="blog-icon">${blog.icon}</div>
          <img src="${blog.image}" alt="${blog.title}">
        </div>
        <div class="blog-content">
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
          <div class="blog-footer">
            <span class="blog-author">By ${blog.author}</span>
            <a href="#" class="read-more">Read more →</a>
          </div>
        </div>
      `;
      
      blogGrid.appendChild(blogCard);
    });
  }

  // --------- EVENTS ---------
  const events = [
    {
      title: "Annual ICT Education Conference",
      date: "2025-06-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description: "Join us for our annual conference featuring keynote speakers from leading educational technology companies and research institutions. This year's theme: 'AI in Education'.",
      registrationRequired: true
    },
    {
      title: "Career Guidance Workshop",
      date: "2025-06-20",
      time: "1:00 PM - 3:00 PM",
      location: "Seminar Hall B",
      description: "A workshop for final year students focused on resume building, interview preparation, and job market trends in education and technology sectors.",
      registrationRequired: true
    },
    {
      title: "Education Research Symposium",
      date: "2025-07-05",
      time: "10:00 AM - 3:00 PM",
      location: "Conference Center",
      description: "Faculty and student researchers present their findings in educational methodologies, technology integration, and learning outcomes assessment.",
      registrationRequired: false
    },
    {
      title: "Alumni Meetup 2025",
      date: "2025-07-15",
      time: "5:00 PM - 8:00 PM",
      location: "Campus Garden",
      description: "Annual gathering of Sanothimi Campus alumni to network, share experiences, and connect current students with industry professionals.",
      registrationRequired: true
    },
    {
      title: "Cultural Fest 'Sanothimi Utsav'",
      date: "2025-07-25",
      time: "11:00 AM - 6:00 PM",
      location: "Campus Grounds",
      description: "A day-long celebration featuring cultural performances, food stalls, games, and exhibitions showcasing student talents and projects.",
      registrationRequired: false
    },
    {
      title: "Teacher Development Workshop",
      date: "2025-08-10",
      time: "9:30 AM - 4:30 PM",
      location: "Training Room 101",
      description: "Professional development workshop for in-service teachers focusing on innovative teaching methods and classroom technology integration.",
      registrationRequired: true
    },
    {
      title: "Educational Technology Exhibition",
      date: "2025-08-20",
      time: "10:00 AM - 5:00 PM",
      location: "IT Building",
      description: "Showcase of student projects, educational software, teaching aids, and technology solutions developed by BICTE students and faculty.",
      registrationRequired: false
    }
  ];

  const eventsContainer = document.getElementById('eventsContainer');
  
  if (eventsContainer) {
    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      
      // Format date
      const dateObj = new Date(event.date);
      const day = dateObj.getDate();
      const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
      
      eventCard.innerHTML = `
        <div class="event-date">
          <span class="event-day">${day}</span>
          <span class="event-month">${month}</span>
        </div>
        <div class="event-details">
          <h3 class="event-title">${event.title}</h3>
          <div class="event-meta">
            <div class="event-meta-item">
              <i class="fas fa-clock"></i>
              <span>${event.time}</span>
            </div>
            <div class="event-meta-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>${event.location}</span>
            </div>
          </div>
          <p class="event-description">${event.description}</p>
          <div class="event-actions">
            <a href="#" class="event-button primary">More Details</a>
            ${event.registrationRequired ? 
              '<a href="#" class="event-button secondary">Register</a>' : 
              '<span class="event-meta-item"><i class="fas fa-check-circle"></i> Open to All</span>'
            }
          </div>
        </div>
      `;
      
      eventsContainer.appendChild(eventCard);
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#' && this.getAttribute('href') !== '#logout') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
        }
        
        // Close mobile menu if it's open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });
});
