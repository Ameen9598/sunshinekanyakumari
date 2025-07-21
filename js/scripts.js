  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

    window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

/*   Testionial carousal
  const track = document.getElementById('testimonialTrack');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const cards = document.querySelectorAll('.testimonial-card');

  let index = 0;
  const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

  function updateScroll() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < cards.length - 3) { // Show only 3 at a time
      index++;
      updateScroll();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateScroll();
    }
  });

  // Optional auto-scroll
  setInterval(() => {
    if (index < cards.length - 3) {
      index++;
    } else {
      index = 0;
    }
    updateScroll();
  }, 4000);

  // On resize, recalculate
  window.addEventListener('resize', () => {
    index = 0;
    updateScroll();
  });

*/


