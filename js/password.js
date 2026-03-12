/**
 * Krakowski Event — Password Gate
 *
 * Default password: krakowski2026
 * To change: compute SHA-256 of your new password and update HASH below.
 * Quick way — open Chrome DevTools console and run:
 *   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD'))
 *     .then(b => console.log(Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')))
 */

const HASH = 'd29a337abf2379973ac23fff0a12a1007a0895630b9be4c7211b4878574766b6';

async function hashPassword(pwd) {
  const msgBuffer = new TextEncoder().encode(pwd);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function unlock() {
  const input = document.getElementById('gate-input');
  const error = document.getElementById('gate-error');
  const hash = await hashPassword(input.value.trim());

  if (hash === HASH) {
    sessionStorage.setItem('ke_unlocked', '1');
    const gate = document.getElementById('gate');
    gate.style.opacity = '0';
    gate.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      gate.classList.add('hidden');
      document.getElementById('site-content').classList.remove('hidden');
      document.body.style.overflow = '';
    }, 500);
  } else {
    error.style.display = 'block';
    input.classList.add('shake');
    input.value = '';
    setTimeout(() => input.classList.remove('shake'), 450);
  }
}

// Check if already unlocked this session
(function init() {
  if (sessionStorage.getItem('ke_unlocked') === '1') {
    document.getElementById('gate').classList.add('hidden');
    document.getElementById('site-content').classList.remove('hidden');
  } else {
    document.body.style.overflow = 'hidden';
  }
})();

// Button click
document.getElementById('gate-submit').addEventListener('click', unlock);

// Enter key
document.getElementById('gate-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') unlock();
  document.getElementById('gate-error').style.display = 'none';
});
