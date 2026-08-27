(function (window) {
  var COOKIE_NAME = 'preferred_lang';
  var VALID_LANGS = { en: true, ru: true, hy: true };
  var LANG_HOME = { en: '/', ru: '/ru/', hy: '/hy/' };

  function setPreferredLang(lang) {
    if (!VALID_LANGS[lang]) {
      return;
    }

    document.cookie = COOKIE_NAME + '=' + lang + '; path=/; max-age=31536000; SameSite=Lax';
  }

  function getPreferredLang() {
    var match = document.cookie.match(new RegExp('(?:^|;\\s*)' + COOKIE_NAME + '=([^;]+)'));
    var lang = match ? match[1] : null;

    return lang && VALID_LANGS[lang] ? lang : null;
  }

  function syncFromDocument() {
    var lang = document.documentElement.lang;

    if (lang && VALID_LANGS[lang]) {
      setPreferredLang(lang);
    }
  }

  function isSiteEntry(path) {
    return path === '/' || path === '/index.html';
  }

  function redirectIfNeeded() {
    var path = window.location.pathname;

    if (!isSiteEntry(path)) {
      return false;
    }

    var preferred = getPreferredLang();

    if (!preferred || preferred === 'en') {
      return false;
    }

    var target = LANG_HOME[preferred];

    if (target) {
      window.location.replace(target);
      return true;
    }

    return false;
  }

  window.PreferredLang = {
    set: setPreferredLang,
    get: getPreferredLang,
    syncFromDocument: syncFromDocument,
    redirectIfNeeded: redirectIfNeeded
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncFromDocument);
  } else {
    syncFromDocument();
  }
})(window);
