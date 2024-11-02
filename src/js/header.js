const refs = {
  header: document.querySelector('.header'),
  openMenuBtn: document.querySelector('.open-menu-btn'),
  closeMenuBtn: document.querySelector('.close-menu-btn'),
  menu: document.querySelector('.header-menu'),
  links: document.querySelectorAll('.header-nav-link'),
  navItems: document.querySelectorAll('.header-nav-item'),
};
let lastScrollTop = 0;

const openMenu = () => {
  refs.menu.classList.add('header-menu-open');
  document.body.classList.add('menu-open');
  document.addEventListener('click', handleOutsideClick);
};

const closeMenu = () => {
  refs.menu.classList.remove('header-menu-open');
  document.body.classList.remove('menu-open');
  document.removeEventListener('click', handleOutsideClick);
};

const handleOutsideClick = event => {
  const isClickInsideMenu =
    refs.menu.contains(event.target) || refs.openMenuBtn.contains(event.target);

  if (!isClickInsideMenu) {
    closeMenu();
  }
};

refs.openMenuBtn.addEventListener('click', openMenu);

refs.closeMenuBtn.addEventListener('click', closeMenu);

refs.links.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function setActiveLink() {
  let scrollPosition = window.scrollY;

  refs.navItems.forEach(item => {
    const targetSection = document.querySelector(
      item.querySelector('a').getAttribute('href')
    );

    if (
      targetSection.offsetTop <= scrollPosition &&
      targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
    ) {
      item.classList.add('header-nav-item-active');
    } else {
      item.classList.remove('header-nav-item-active');
    }
  });
}

window.addEventListener('scroll', () => {
  setActiveLink();

  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    refs.header.classList.add('header-hidden');
  } else {
    refs.header.classList.remove('header-hidden');
  }

  lastScrollTop = scrollTop;
});

setActiveLink();
