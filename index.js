// navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const navbarRequest = new XMLHttpRequest();
    navbarRequest.open('GET', 'navbar.html', true);
    navbarRequest.onreadystatechange = function() {
      if (navbarRequest.readyState === 4 && navbarRequest.status === 200) {
        navbarPlaceholder.outerHTML = navbarRequest.responseText;
      }
    };
    navbarRequest.send();
  });
// Hero
document.addEventListener('DOMContentLoaded', function() {
    const heroPlaceholder = document.getElementById('hero-placeholder');
    const heroRequest = new XMLHttpRequest();
    heroRequest.open('GET', 'hero.html', true);
    heroRequest.onreadystatechange = function() {
      if (heroRequest.readyState === 4 && heroRequest.status === 200) {
        heroPlaceholder.outerHTML = heroRequest.responseText;
      }
    };
    navbarRequest.send();
  });