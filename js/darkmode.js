// Detecta preferencia del sistema
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function getUserTheme() {
  return localStorage.getItem('theme');
}

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
    updateLogo(isDark);
}

function initTheme() {
  const userTheme = getUserTheme();
  if (userTheme) {
    applyTheme(userTheme === 'dark');
  } else {
    applyTheme(systemPrefersDark);
  }
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('dark');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function updateLogo(isDark) {
  const logo = document.getElementById('logo');
  if (!logo) return;
  logo.src = isDark
    ? 'scss/assets/images/logo-horizontal-dark.png'
    : 'scss/assets/images/logo-horizontal.png';
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.getElementById('toggle-darkmode').addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getUserTheme()) applyTheme(e.matches);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const icons = document.querySelector('.navbar__icons');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
  });
});
