document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.lang-dropdown');
  var langLinks = document.querySelectorAll('.lang-dropdown__item[hreflang]');

  langLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var lang = link.getAttribute('hreflang');

      if (window.PreferredLang && lang) {
        PreferredLang.set(lang);
      }
    });
  });

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.lang-dropdown__toggle');
    if (!toggle) {
      return;
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var isOpen = dropdown.classList.contains('is-open');

      dropdowns.forEach(function (item) {
        item.classList.remove('is-open');
        var button = item.querySelector('.lang-dropdown__toggle');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        dropdown.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.lang-dropdown')) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('is-open');
        var toggle = dropdown.querySelector('.lang-dropdown__toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('is-open');
        var toggle = dropdown.querySelector('.lang-dropdown__toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
});
