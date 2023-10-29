// 
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