/* ════════════════════════════════════════════════════════════
   DEWDROP — INTERACTIONS
   RSVP, pills, tabs, follow — shared across pages
   ════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ═══ RSVP TOGGLE ═══
  document.querySelectorAll('.btn-rsvp').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('going');
      this.textContent = this.classList.contains('going') ? 'Going ✓' : 'RSVP';
    });
  });

  // ═══ PILL SELECT ═══
  document.querySelectorAll('.pills').forEach(function (group) {
    group.querySelectorAll('.pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        group.querySelectorAll('.pill').forEach(function (p) { p.classList.remove('on'); });
        this.classList.add('on');
      });
    });
  });

  // ═══ TAB SWITCH ═══
  document.querySelectorAll('.tabs').forEach(function (tabBar) {
    tabBar.querySelectorAll('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Remove active from all tabs
        tabBar.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('on'); });
        this.classList.add('on');

        // Show matching content
        var target = this.getAttribute('data-tab');
        if (target) {
          var parent = tabBar.parentElement;
          parent.querySelectorAll('[data-tab-content]').forEach(function (c) {
            c.style.display = 'none';
          });
          var content = parent.querySelector('[data-tab-content="' + target + '"]');
          if (content) content.style.display = '';
        }
      });
    });
  });

  // ═══ FOLLOW TOGGLE ═══
  document.querySelectorAll('.btn-follow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('following');
      this.textContent = this.classList.contains('following') ? 'Following' : 'Follow';
    });
  });

  // ═══ HIGHLIGHT CURRENT NAV LINK ═══
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.classList.remove('on');
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('on');
    }
  });

});
