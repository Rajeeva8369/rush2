document.getElementById('menuToggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.style.left = '-100%';
    mobileMenu.classList.remove('open');
  } else {
    mobileMenu.style.left = '0';
    mobileMenu.classList.add('open');
  }
});

document.getElementById('closeMenu').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.left = '-100%';
  mobileMenu.classList.remove('open');
});
