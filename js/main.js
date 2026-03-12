/**
 * Krakowski Event — Main JS
 * Handles: sticky nav, mobile menu, counter animation,
 *          scroll fade-ins, gallery generation, lightbox
 */

/* ============================================================
   GALLERY DATA
   - Each entry: { src, type: 'photo'|'video', category }
   ============================================================ */
const GALLERY = [
  // Bale / events with professional photos
  { src: 'reference/ImagesAndVideosToUse/lesniakPH-9755.jpg',                         type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/lesniakPH-9849.jpg',                         type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/lesniak.ph -2376.jpg',                       type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/lesniak.ph -2674.jpg',                       type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/Bal Wydzialu Nauk o Zdrowiu-251.jpg',        type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/Bal Wydzialu Nauk o Zdrowiu-255.jpg',        type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/Bal Wydzialu Nauk o Zdrowiu-69.jpg',         type: 'photo',  category: 'bale' },
  { src: 'reference/ImagesAndVideosToUse/7EF14544-E5FE-4492-B2B9-524FBDB1ECF4.JPG',  type: 'photo',  category: 'bale' },
  // Połówek
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-409.jpg',      type: 'photo',  category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-411.jpg',      type: 'photo',  category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-419.jpg',      type: 'photo',  category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-422.jpg',      type: 'photo',  category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-147.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-148.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-150.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-151.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-152.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-176.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-178.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-193.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-196.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-197.jpg', type: 'photo', category: 'studenckie' },
  { src: 'reference/ImagesAndVideosToUse/Polmetek kierunku lekarskiego-dentystycznego-199.jpg', type: 'photo', category: 'studenckie' },
  // Videos
  { src: 'reference/ImagesAndVideosToUse/44d8700bc7ca4c94acd09382b7b67309.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/739bdf8f23964e57b0d3ae8351ffd323.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/89a0900ce8944c5bb305884449fe3ed6.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/933b295726124f7aaf8dc13ed486a941.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/9528ffef830d4d63b6723f640a942fa6.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/f306ea0c34424af7b94f0b68d4675014.MOV',  type: 'video', category: 'wideo' },
  { src: 'reference/ImagesAndVideosToUse/f3d638d3aa4541bdaf2d46759bfb4ddb.MOV',  type: 'video', category: 'wideo' },
];

/* ============================================================
   STICKY NAVBAR
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const bars = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
  }
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const bars = hamburger.querySelectorAll('span');
    bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
  });
});

/* ============================================================
   HERO — subtle BG zoom on load
   ============================================================ */
window.addEventListener('load', () => {
  document.getElementById('hero')?.classList.add('loaded');
});

/* ============================================================
   SCROLL FADE-IN (IntersectionObserver)
   ============================================================ */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const update = now => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
    el.textContent = Math.round(ease * target) + suffix;
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ============================================================
   GALLERY — Build grid + filter
   ============================================================ */
function encodePath(path) {
  return path.split('/').map(seg => encodeURIComponent(seg)).join('/');
}

function buildGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  const items = filter === 'all' ? GALLERY : GALLERY.filter(i => i.category === filter);

  items.forEach((item, idx) => {
    const realIdx = GALLERY.indexOf(item);
    const wrap = document.createElement('div');
    wrap.className = 'gallery-item fade-in';
    wrap.dataset.index = realIdx;
    wrap.dataset.category = item.category;

    if (item.type === 'photo') {
      const img = document.createElement('img');
      img.src = encodePath(item.src);
      img.alt = 'Krakowski Event';
      img.loading = 'lazy';
      const overlay = document.createElement('div');
      overlay.className = 'gallery-item-overlay';
      overlay.innerHTML = '<div class="gallery-item-icon">🔍</div>';
      wrap.appendChild(img);
      wrap.appendChild(overlay);
    } else {
      // Video thumbnail
      const vid = document.createElement('video');
      vid.src = encodePath(item.src);
      vid.muted = true;
      vid.preload = 'metadata';
      vid.style.pointerEvents = 'none';
      // Seek to 1s to get a frame
      vid.addEventListener('loadedmetadata', () => { vid.currentTime = 1; });
      const playOverlay = document.createElement('div');
      playOverlay.className = 'video-thumb-overlay';
      playOverlay.innerHTML = '<div class="play-btn-static">▶</div>';
      const hoverOverlay = document.createElement('div');
      hoverOverlay.className = 'gallery-item-overlay';
      wrap.appendChild(vid);
      wrap.appendChild(playOverlay);
      wrap.appendChild(hoverOverlay);
    }

    wrap.addEventListener('click', () => openLightbox(realIdx));
    grid.appendChild(wrap);

    // Trigger fade-in observer for newly added items
    fadeObserver.observe(wrap);
    // Small delay so observer fires after append
    requestAnimationFrame(() => wrap.classList.add('visible'));
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildGallery(btn.dataset.filter);
  });
});

buildGallery();

/* ============================================================
   LIGHTBOX
   ============================================================ */
let currentLbIndex = 0;
const lightbox = document.getElementById('lightbox');
const lbMedia = document.getElementById('lb-media');
const lbCounter = document.getElementById('lb-counter');

function openLightbox(idx) {
  currentLbIndex = idx;
  renderLightboxMedia();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbMedia.innerHTML = '';
}

function renderLightboxMedia() {
  lbMedia.innerHTML = '';
  const item = GALLERY[currentLbIndex];
  lbCounter.textContent = (currentLbIndex + 1) + ' / ' + GALLERY.length;

  if (item.type === 'photo') {
    const img = document.createElement('img');
    img.src = encodePath(item.src);
    img.className = 'lightbox-media';
    img.alt = 'Krakowski Event';
    lbMedia.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = encodePath(item.src);
    vid.className = 'lightbox-media';
    vid.controls = true;
    vid.autoplay = true;
    lbMedia.appendChild(vid);
  }
}

function lbPrev() {
  currentLbIndex = (currentLbIndex - 1 + GALLERY.length) % GALLERY.length;
  renderLightboxMedia();
}
function lbNext() {
  currentLbIndex = (currentLbIndex + 1) % GALLERY.length;
  renderLightboxMedia();
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', lbPrev);
document.getElementById('lb-next').addEventListener('click', lbNext);

// Close on backdrop click
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')  closeLightbox();
  if (e.key === 'ArrowLeft')  lbPrev();
  if (e.key === 'ArrowRight') lbNext();
});

/* ============================================================
   CONTACT FORM — Formspree (optional)
   Replace ACTION_URL with your Formspree endpoint, e.g.
   https://formspree.io/f/YOUR_CODE
   ============================================================ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const ACTION_URL = contactForm.action;

    if (!ACTION_URL || ACTION_URL === '#') {
      // No Formspree configured — just show confirmation
      btn.textContent = 'Dziękuję! Odezwę się wkrótce.';
      btn.style.background = '#28a745';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = 'Wyślij wiadomość';
        btn.style.background = '';
      }, 4000);
      return;
    }

    btn.textContent = 'Wysyłanie...';
    btn.disabled = true;
    try {
      const res = await fetch(ACTION_URL, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        btn.textContent = 'Wysłano! Odezwę się wkrótce.';
        btn.style.background = '#28a745';
        contactForm.reset();
      } else {
        btn.textContent = 'Błąd — spróbuj ponownie';
        btn.style.background = '#cc0000';
      }
    } catch {
      btn.textContent = 'Błąd sieci — spróbuj ponownie';
    }
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = 'Wyślij wiadomość';
      btn.style.background = '';
    }, 5000);
  });
}
