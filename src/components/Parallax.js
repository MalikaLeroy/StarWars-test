export default class Parallax {
    constructor(element) {
        this.element = element;
        this.scrollPosition = window.scrollY;
        this.speed = element.getAttribute('data-speed');
        this.offsetTop = element.getBoundingClientRect().top + window.scrollY;
        this.windowWidth = document.documentElement.clientWidth;
        this.menuHeight = this.windowWidth > 991 ? document.querySelector('.main-menu__list').offsetHeight + document.querySelector('.main-menu__list').offsetTop : document.querySelector('.main-menu__toggle').offsetHeight + + document.querySelector('.main-menu__toggle').offsetTop
        window.addEventListener('scroll', () => {
            this.scrollPosition = window.scrollY;
            this.update();
        });
    }

    update() {
        const distance = this.scrollPosition - this.offsetTop;
        const translate = (distance * this.speed);
        this.element.style.transform = `translateY(${translate}px)`;
    }
}

window.addEventListener('load', function () {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
        new Parallax(element);
    });

});