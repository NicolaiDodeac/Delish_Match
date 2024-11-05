const refs = {
  header: document.querySelector('.header'),
  openMenuBtn: document.querySelector('.open-menu-btn'),
  closeMenuBtn: document.querySelector('.close-menu-btn'),
  menu: document.querySelector('.header-menu'),
  links: document.querySelectorAll('.header-nav-link'),
  navItems: document.querySelectorAll('.header-nav-item'),
};
let lastScrollPosition = 0;

const openMenu = () => {
  refs.menu.classList.add('header-menu-open');
  document.body.classList.add('menu-open');
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleKeyDown);
};

const closeMenu = () => {
  refs.menu.classList.remove('header-menu-open');
  document.body.classList.remove('menu-open');
  document.removeEventListener('click', handleOutsideClick);
  document.removeEventListener('keydown', handleKeyDown);
};

const handleOutsideClick = event => {
  const isClickInsideMenu =
    refs.menu.contains(event.target) || refs.openMenuBtn.contains(event.target);

  if (!isClickInsideMenu) {
    closeMenu();
  }
};

const handleKeyDown = event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
};

refs.openMenuBtn.addEventListener('click', openMenu);

refs.closeMenuBtn.addEventListener('click', closeMenu);

refs.links.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function activateLink(targetId) {
  refs.navItems.forEach(item => {
    const linkId = item.querySelector('a').getAttribute('href').substring(1);
    item.classList.toggle('header-nav-item-active', linkId === targetId);
  });
}

const observerOptions = {
  root: null,
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetId = entry.target.getAttribute('id');
      activateLink(targetId);
    }
  });
}, observerOptions);

document
  .querySelectorAll('section')
  .forEach(section => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollPosition) {
    refs.header.classList.add('header-hidden');
  } else {
    refs.header.classList.remove('header-hidden');
  }
  lastScrollPosition = scrollTop;
});
