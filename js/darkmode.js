// Detecta preferencia del sistema
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function getUserTheme() {
  return localStorage.getItem('theme');
}

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
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

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.getElementById('toggle-darkmode').addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getUserTheme()) applyTheme(e.matches);
  });
});
