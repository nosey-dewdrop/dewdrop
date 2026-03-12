/* ════════════════════════════════════════════════════════════
   DEWDROP — THEME
   Dark/light mode toggle with localStorage persistence
   ════════════════════════════════════════════════════════════ */

(function () {
  // Load saved theme or default to light
  var saved = localStorage.getItem('dewdrop-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // Update button text after DOM loads
  document.addEventListener('DOMContentLoaded', function () {
    updateThemeButton(saved);
  });

  // Expose globally
  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dewdrop-theme', next);
    updateThemeButton(next);
  };

  function updateThemeButton(theme) {
    var btn = document.getElementById('theme-btn');
    if (btn) {
      btn.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
    }
  }
})();
