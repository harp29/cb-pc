class Menu {
    constructor() {

        //global variables:
        this.menu = document.querySelector('.js-menu');
        this.menuOverlay = document.querySelector('.js-menu-overlay');
        this.menuNavigationItems = document.querySelectorAll('.menu__list--navigation .menu__item .item-link');
        this.itemLine = document.querySelector('.js-active-item-line');
        this.hamburger = document.querySelector('.js-hamburger');
        this.page = document.querySelector('.js-page');
        this.menuOpen = false;
        this.tlMenu = new TimelineLite();

        //method calls:
        this.hamburger.addEventListener('click', this.menuToggle.bind(this, this.tlMenu));

    };

    // hasClass, takes two params: element and classname
    hasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }


    //Menu toggle method:
    menuToggle(tlMenu) {

        if (!this.hasClass(this.menu, 'is-animating')) {
            if (!this.menuOpen) {
                this.menuOpen = true;

                tlMenu
                    .set(this.menu, {
                        className: '+=is-animating'
                    })
                    .set(this.itemLine, {
                        scaleX: 0,
                        width: '100%'
                    })
                    .addLabel('menu-pre-effects')
                    .to(this.menuOverlay, .5, {
                        visibility: 'visible',
                        ease: Power4.easeInOut
                    }, 'menu-pre-effects')
                    .to(this.page, .5, {
                       '-webkit-filter':'blur(2.5px)'
                    }, 'menu-pre-effects')
                    .to(this.menu, .6, {
                        x: '0%',
                        ease: Power4.easeInOut
                    }, '-=.5')
                    .to(this.itemLine, .5, {
                        scaleX: 1,
                        ease: Power4.easeOut
                    }, '-=.2')
                    .addLabel('line-drawn', '-=.35')
                    .staggerTo(this.menuNavigationItems, .6, {x: 0, opacity: 1, ease: Power4.easeOut}, 0.1, 'line-drawn')
                    .set(this.menu, {
                        className: '-=is-animating'
                    });

            } else if (this.menuOpen) {
                tlMenu
                    .set(this.menu, {
                        className: '+=is-animating'
                    })
                    .to(this.menu, 1, {
                        x: '-100%',
                        ease: Power4.easeOut
                    })
                    .addLabel('menu-pre-effects', '-=.85')
                    .to(this.menuOverlay, .5, {
                        visibility: 'hidden',
                        ease: Power4.easeInOut
                    }, 'menu-pre-effects')
                    .to(this.page, .5, {
                       '-webkit-filter':'blur(0px)'
                    }, 'menu-pre-effects')
                    .set(this.menuNavigationItems, {
                        opacity: 1,
                        x: -100
                    })
                    .set(this.itemLine,  {
                        transform: 'scaleX(0)'
                    })
                    .set(this.menu, {
                        className: '-=is-animating'
                    });

                this.menuOpen = false;
            };
        }
    }

    // closeMenu(){
    //     let tlMenu = new TimelineLite();
    //     tlMenu
    //         .addLabel('menu-open')
    //         .to(this.menu, 1, {opacity: 1, autoAlpha: 1, ease: Power4.easeOut}, 'menu-open')
    //         .to(this.ctaLinks, 1, {color: 'black', ease: Power4.easeOut}, 'menu-open')
    //         .to(this.hamburger, 1, {stroke: 'black', ease: Power4.easeOut}, 'menu-open')
    // }


    //document.getElementById("top-bun").setAttribute("d", "M9,12 L10,12");
};

export default Menu;