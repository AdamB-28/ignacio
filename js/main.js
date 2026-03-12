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
   GALLERY — Carousel
   ============================================================ */
function encodePath(path) {
  return path.split('/').map(seg => encodeURIComponent(seg)).join('/');
}

// Returns how many slides are fully visible at current viewport width
function getPerView() {
  const w = window.innerWidth;
  if (w >= 1200) return 4;
  if (w >= 900)  return 3;
  if (w >= 600)  return 2;
  return 1;
}

// Carousel state
let carouselItems = [];   // filtered GALLERY subset (full GALLERY indices preserved)
let carouselOffset = 0;   // current slide index (leftmost visible)

const track     = document.getElementById('gallery-grid');
const dotsWrap  = document.getElementById('carousel-dots');
const btnPrev   = document.getElementById('carousel-prev');
const btnNext   = document.getElementById('carousel-next');

function buildGallery(filter = 'all') {
  carouselItems = filter === 'all' ? GALLERY.slice() : GALLERY.filter(i => i.category === filter);
  carouselOffset = 0;
  track.innerHTML = '';

  carouselItems.forEach((item) => {
    const realIdx = GALLERY.indexOf(item);
    const wrap = document.createElement('div');
    wrap.className = 'gallery-item';
    wrap.dataset.index = realIdx;

    if (item.type === 'photo') {
      const img = document.createElement('img');
      img.src = encodePath(item.src);
      img.alt = 'Krakowski Event';
      img.loading = 'lazy';
      img.draggable = false;
      const overlay = document.createElement('div');
      overlay.className = 'gallery-item-overlay';
      overlay.innerHTML = '<div class="gallery-item-icon"><i class="fa-solid fa-magnifying-glass"></i></div>';
      wrap.appendChild(img);
      wrap.appendChild(overlay);
    } else {
      const vid = document.createElement('video');
      vid.src = encodePath(item.src);
      vid.muted = true;
      vid.preload = 'metadata';
      vid.style.pointerEvents = 'none';
      vid.draggable = false;
      vid.addEventListener('loadedmetadata', () => { vid.currentTime = 1; });
      const playOverlay = document.createElement('div');
      playOverlay.className = 'video-thumb-overlay';
      playOverlay.innerHTML = '<div class="play-btn-static"><i class="fa-solid fa-play"></i></div>';
      const hoverOverlay = document.createElement('div');
      hoverOverlay.className = 'gallery-item-overlay';
      wrap.appendChild(vid);
      wrap.appendChild(playOverlay);
      wrap.appendChild(hoverOverlay);
    }

    wrap.addEventListener('click', () => {
      if (!wasDragging) openLightbox(realIdx);
    });
    track.appendChild(wrap);
  });

  renderCarousel();
  buildDots();
}

function renderCarousel() {
  const perView  = getPerView();
  const total    = carouselItems.length;
  const maxOffset = Math.max(0, total - perView);
  carouselOffset  = Math.min(carouselOffset, maxOffset);

  // Calculate item width including gap (gap = 12px)
  const outer    = track.parentElement;
  const gap      = 12;
  const itemW    = (outer.clientWidth - gap * (perView - 1)) / perView;

  // Apply width to all items
  Array.from(track.children).forEach(el => {
    el.style.width = itemW + 'px';
    el.style.flexShrink = '0';
  });

  const shift = carouselOffset * (itemW + gap);
  track.style.transform = `translateX(-${shift}px)`;

  // Arrows
  btnPrev.classList.toggle('disabled', carouselOffset === 0);
  btnNext.classList.toggle('disabled', carouselOffset >= maxOffset);

  // Dots
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselOffset);
  });
}

function buildDots() {
  dotsWrap.innerHTML = '';
  const perView  = getPerView();
  const total    = carouselItems.length;
  const count    = Math.max(0, total - perView + 1);
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slajd ' + (i + 1));
    dot.addEventListener('click', () => { carouselOffset = i; renderCarousel(); });
    dotsWrap.appendChild(dot);
  }
}

btnPrev.addEventListener('click', () => { carouselOffset--; renderCarousel(); });
btnNext.addEventListener('click', () => { carouselOffset++; renderCarousel(); });

// Rebuild dots & re-render on resize
window.addEventListener('resize', () => { buildDots(); renderCarousel(); }, { passive: true });

// ---- Drag / swipe support ----
let dragStartX = 0;
let dragStartOffset = 0;
let isDragging = false;
let wasDragging = false;

track.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  isDragging = true;
  wasDragging = false;
  dragStartX = e.clientX;
  dragStartOffset = carouselOffset;
  track.classList.add('dragging');
  track.setPointerCapture(e.pointerId);
});

track.addEventListener('pointermove', e => {
  if (!isDragging) return;
  const dx = e.clientX - dragStartX;
  if (Math.abs(dx) > 6) wasDragging = true;

  const outer = track.parentElement;
  const perView = getPerView();
  const gap = 12;
  const itemW = (outer.clientWidth - gap * (perView - 1)) / perView;
  const slidesMoved = -dx / (itemW + gap);
  const raw = dragStartOffset + slidesMoved;
  const maxOffset = Math.max(0, carouselItems.length - perView);
  const clamped = Math.max(0, Math.min(raw, maxOffset));
  const shift = clamped * (itemW + gap);
  track.style.transform = `translateX(-${shift}px)`;
});

track.addEventListener('pointerup', e => {
  if (!isDragging) return;
  isDragging = false;
  track.classList.remove('dragging');

  const dx = e.clientX - dragStartX;
  const outer = track.parentElement;
  const perView = getPerView();
  const gap = 12;
  const itemW = (outer.clientWidth - gap * (perView - 1)) / perView;
  const threshold = itemW * 0.25;
  const maxOffset = Math.max(0, carouselItems.length - perView);

  if (dx < -threshold) carouselOffset = Math.min(carouselOffset + 1, maxOffset);
  else if (dx > threshold) carouselOffset = Math.max(carouselOffset - 1, 0);

  renderCarousel();
});

// Touch swipe (passive)
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const perView = getPerView();
  const maxOffset = Math.max(0, carouselItems.length - perView);
  if (dx < -40) carouselOffset = Math.min(carouselOffset + 1, maxOffset);
  else if (dx > 40)  carouselOffset = Math.max(carouselOffset - 1, 0);
  renderCarousel();
}, { passive: true });

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
const lbMedia  = document.getElementById('lb-media');
const lbCounter = document.getElementById('lb-counter');

function openLightbox(idx) {
  currentLbIndex = idx;
  renderLightboxMedia(null);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbMedia.innerHTML = '';
}

// direction: 'left' = going to next (slides in from right), 'right' = going to prev
function renderLightboxMedia(direction) {
  // Animate out old content if any
  const existing = lbMedia.firstElementChild;
  if (existing && direction) {
    const outClass = direction === 'left' ? 'lb-slide-out-left' : 'lb-slide-out-right';
    existing.style.animation = direction === 'left'
      ? 'lbSlideOutLeft 0.2s ease both'
      : 'lbSlideOutRight 0.2s ease both';
    existing.addEventListener('animationend', () => existing.remove(), { once: true });
  } else {
    lbMedia.innerHTML = '';
  }

  const item = GALLERY[currentLbIndex];
  lbCounter.textContent = (currentLbIndex + 1) + ' / ' + GALLERY.length;

  let el;
  if (item.type === 'photo') {
    el = document.createElement('img');
    el.src = encodePath(item.src);
    el.className = 'lightbox-media';
    el.alt = 'Krakowski Event';
  } else {
    el = document.createElement('video');
    el.src = encodePath(item.src);
    el.className = 'lightbox-media';
    el.controls = true;
    el.autoplay = true;
  }

  if (direction) {
    el.classList.add(direction === 'left' ? 'lb-slide-in-right' : 'lb-slide-in-left');
  }
  lbMedia.appendChild(el);
}

function lbPrev() {
  currentLbIndex = (currentLbIndex - 1 + GALLERY.length) % GALLERY.length;
  renderLightboxMedia('right');
}
function lbNext() {
  currentLbIndex = (currentLbIndex + 1) % GALLERY.length;
  renderLightboxMedia('left');
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', lbPrev);
document.getElementById('lb-next').addEventListener('click', lbNext);

// Close on backdrop click (not on media)
lightbox.addEventListener('click', e => {
  if (e.target === lightbox || e.target === lbMedia) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbPrev();
  if (e.key === 'ArrowRight')  lbNext();
});

// Touch swipe inside lightbox
let lbTouchStartX = 0;
let lbTouchStartY = 0;
lightbox.addEventListener('touchstart', e => {
  lbTouchStartX = e.touches[0].clientX;
  lbTouchStartY = e.touches[0].clientY;
}, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - lbTouchStartX;
  const dy = e.changedTouches[0].clientY - lbTouchStartY;
  if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 40) return; // vertical or too short
  if (dx < 0) lbNext(); else lbPrev();
}, { passive: true });

// Pointer drag swipe (desktop + pen)
let lbDragStartX = 0;
let lbDragging = false;
lightbox.addEventListener('pointerdown', e => {
  if (e.target.tagName === 'VIDEO' || e.target.tagName === 'BUTTON') return;
  lbDragStartX = e.clientX;
  lbDragging = true;
  lightbox.setPointerCapture(e.pointerId);
});
lightbox.addEventListener('pointerup', e => {
  if (!lbDragging) return;
  lbDragging = false;
  const dx = e.clientX - lbDragStartX;
  if (Math.abs(dx) < 40) return;
  if (dx < 0) lbNext(); else lbPrev();
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
