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

window.addEventListener('scroll', function () {
    const subNavbar = document.querySelector('.subNavbar');
    if (window.scrollY > 120) {
      subNavbar.style.display = 'none'; // or use classList.add('hidden')
    } else {
      subNavbar.style.display = 'block'; // or classList.remove('hidden')
    }
  });

  // popular packages see more button

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('seeMoreBtn');
    const collapseEl = document.getElementById('kanyakumariseemore');

    // Listen for toggle events from Bootstrap
    collapseEl.addEventListener('shown.bs.collapse', function () {
      btn.textContent = 'See Less';
    });

    collapseEl.addEventListener('hidden.bs.collapse', function () {
      btn.textContent = 'See More';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('seeMoreKeralaBtn');
    const collapseEl = document.getElementById('keralaseemore');

    // Listen for toggle events from Bootstrap
    collapseEl.addEventListener('shown.bs.collapse', function () {
      btn.textContent = 'See Less';
    });

    collapseEl.addEventListener('hidden.bs.collapse', function () {
      btn.textContent = 'See More';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('seeMoreHalfDayBtn');
    const collapseEl = document.getElementById('halfdayseemore');

    // Listen for toggle events from Bootstrap
    collapseEl.addEventListener('shown.bs.collapse', function () {
      btn.textContent = 'See Less';
    });

    collapseEl.addEventListener('hidden.bs.collapse', function () {
      btn.textContent = 'See More';
    });
  });


