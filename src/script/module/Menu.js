import { TweenMax } from "gsap";

class Menu {
    constructor() {

        //global variables:
        this.body = document.querySelector('body');
        this.menu = document.querySelector('.js-menu');
        this.menuOverlay = document.querySelector('.js-menu-overlay');
        this.menuNavigationItems = document.querySelectorAll('.menu__list--navigation .menu__item .item-link');
        this.itemLine = document.querySelector('.js-active-item-line');
        this.hamburger = document.querySelector('.js-hamburger');
        this.burgerOpen = document.querySelectorAll('.js-burger-open');
        this.burgerClose = document.querySelectorAll('.js-burger-close');
        this.menuStateText = document.querySelectorAll('.js-nav__title span');
        this.page = document.querySelector('.js-page');
        this.menuOpen = false;
        this.test = false;
        this.tlMenu = new TimelineLite();

        //method calls:
        this.hamburger.addEventListener('click', this.menuToggle.bind(this, this.tlMenu, this.menu));

        //only call this.hoverHamburgerIn & this.hoverHamburgerOut if menu is NOT open
        if(!this.menuOpen){
            this.hamburger.addEventListener('mouseover', this.hoverHamburgerIn.bind(this, this.menu));
            this.hamburger.addEventListener('mouseout', this.hoverHamburgerOut.bind(this, this.menu));
        }

    };

    // hasClass, takes two params: element and classname
    hasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }

    //Menu toggle method:
    menuToggle(tlMenu) {

        //don't animate when animation is running:
        if (!this.hasClass(this.menu, 'is-animating')) {

            // animations for when menu is closed
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
                    .addLabel('burger-open')
                    .staggerTo(this.burgerOpen, .4, {
                        width: 0, opacity: 0, ease: Power4.easeOut
                    }, 0.1, 'burger-open')
                    .to(this.menuStateText[0], .4, {opacity: 0, display: 'none'}, 'burger-open')
                    .addLabel('burger-close', '-=.25')
                    .staggerTo(this.burgerClose, .4, {
                        opacity: 1, scaleX: 1, ease: Power4.easeOut
                    }, 0.1, 'burger-close')
                    .to(this.menuStateText[1], .4, {opacity: 1, display: 'block'}, 'burger-close')
                    .addLabel('menu-in', '-=.4')
                    .to(this.body, .4, {overflow: 'hidden'}, 'menu-in')
                    .to(this.menu, .5, {
                        x: '0%',
                        ease: Power4.easeOut
                    }, 'menu-in')
                    .to(this.menuOverlay, .8, {
                        visibility: 'visible',
                        ease: Power4.easeOut
                    }, 'menu-in')
                    .to(this.itemLine, .5, {
                        scaleX: 1,
                        ease: Power4.easeOut
                    }, '-=.19')
                    .staggerTo(this.menuNavigationItems, .6, {x: 0, opacity: 1, ease: Power4.easeOut}, 0.1, '-=.48')
                    .set(this.menu, {
                        className: '-=is-animating'
                    });

            // animations when menu is open:        
            }else if (this.menuOpen) {
                tlMenu
                    .set(this.menu, {
                        className: '+=is-animating'
                    })
                    .addLabel('burger-close')
                    .staggerTo(this.burgerClose, .4, {
                        opacity: 0, scale: 0.3, ease: Power4.easeOut
                    }, 0.2, 'burger-close')
                    .to(this.menuStateText[1], .4, {opacity: 0, display: 'none', ease: Power4.easeOut}, 'burger-close')
                    .addLabel('menu-out', '-=.25')
                    .staggerTo(this.burgerOpen, .5, {
                        width: '30px', opacity: 1, ease: Power4.easeOut
                    }, 0.1, 'menu-out')
                    .to(this.menuStateText[0], .4, {opacity: 1, display: 'inline-block', ease: Power4.easeOut}, '-=.2')
                    .to(this.body, .4, {overflowY: 'visible', ease: Power4.easeOut}, 'menu-out')
                    .to(this.menu, .5, {
                        x: '-100%',
                        ease: Power4.easeOut
                    }, 'menu-out')
                    .to(this.menuOverlay, .8, {
                        visibility: 'hidden',
                        ease: Power4.easeOut
                    }, 'menu-out')
                    .set(this.menuNavigationItems, {
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

    //Hover effect method
    hoverHamburgerIn(menu){
        if(!this.menuOpen){
            TweenMax.to(menu, .3, {x: '-96%', ease: Power4.easeOut})
        }
    }

    hoverHamburgerOut(menu){
        if(!this.menuOpen){
            TweenMax.to(menu, .3, {x: '-100%', ease: Power4.easeOut})
        }
    }

    // unHoverHamburgerOut(menu){
    //     TweenMax.set(menu, {x: '0%'})
    // }
};

export default Menu;