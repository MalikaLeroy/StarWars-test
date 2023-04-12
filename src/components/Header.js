import logo from '../img/logo.png?sizes[]=576,sizes[]=768';

export default function Header(Parallax) {

  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.main-menu__toggle');
    const menuList = document.querySelector('.main-menu__list');
    const button = document.querySelector('.main-menu__toggle__img');
    const mainMenu = document.querySelector('.main-menu');
    const tabIndex = document.querySelectorAll('.main-menu a');

    function toggleMenu() {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      menuButton.setAttribute('aria-expanded', !expanded);
      document.body.classList.toggle('no-scroll');
      menuList.classList.toggle('main-menu__list--open');
      button.classList.toggle('main-menu__toggle__img--open');

      tabIndex.forEach(item => {
        if (expanded == false) {
          item.removeAttribute('tabindex');
        } else {
          item.setAttribute('tabindex', '-1');
        }
      });
    }

    function handleScroll() {
      mainMenu.classList.toggle('main-menu--bgColor', window.scrollY > mainMenu.offsetHeight);
    }

    function resetMenu() {
      const screenWidth = window.innerWidth;
      document.body.classList.remove('no-scroll');
      menuList.classList.remove('main-menu__list--open');
      button.classList.remove('main-menu__toggle__img--open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-haspopup', 'true');
      if (screenWidth > 991) {
        menuButton.removeAttribute('aria-expanded');
        menuButton.removeAttribute('aria-haspopup');
        tabIndex.forEach(item => item.removeAttribute('tabindex'));
      } else {
        tabIndex.forEach(item => item.setAttribute('tabindex', '-1'));
      }
    }

    resetMenu();
    menuButton.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resetMenu);
  });

  return `
  <nav class="main-menu" aria-label="Menu principal">
    <button class="main-menu__toggle" aria-expanded="false" aria-haspopup="true">
    <span class="main-menu__toggle__label sr-only">Menu</span>
    <span class="main-menu__toggle__img"></span>
    </button>
    <ul class="main-menu__list">
        <li><a title="En savoir plus sur les héros et les Jedi qui combattent pour la paix et la justice" href="#" tabindex="-1">Le côté lumineux</a></li>
        <li><a title="Découvrez les Sith et les méchants qui cherchent à dominer la galaxie." href="#" tabindex="-1">Le côté obscur</a></li>
        <li><a title="Explorez la puissance militaire et politique de l'Empire et ses efforts pour réprimer la Rébellion."  href="#" tabindex="-1">L'empire</a></li>
        <li><a title="Apprenez-en davantage sur les robots qui jouent un rôle important dans la galaxie, des protocoles aux astromechs." href="#" tabindex="-1">Les droïdes</a></li>
        <li><a title=" Rencontrez les petites créatures de la planète forestière d'Endor et découvrez leur rôle dans la saga Star Wars." href="#" tabindex="-1">Les Ewoks</a></li>
        <li><a title="Découvrez le chef du crime notoire et les nombreux personnages qui gravitent autour de lui dans le monde souterrain de la galaxie." href="#" tabindex="-1">Jabba le Hutt</a></li>
    </ul>
  </nav>
  <div class="top-banner">
    <span class="top-banner__bg" data-parallax data-speed="0.8"></span>
      <img class="top-banner__logo lazyload lazyloading" 
        data-parallax data-speed="0.5"
        width=${logo.width}
        height=${logo.height}
        src=${logo.src} 
        data-src=${logo.src} 
        srcSet="${logo.srcSet}"
        data-srcSet="${logo.srcSet}" 
        sizes="(max-width: 767px) 576px,737px"
        data-expand="-10"
        alt="Logo Star Wars, The Force Awakens"/>
  </div>
  `

}