class Menu{
    constructor(){


        this.menu            = document.querySelector('.menu');
        this.ctaLinks        = document.querySelectorAll('.navigation__ctas-box .link');
        this.menuCta         = document.querySelector('#js-menu-toggle');
        this.hamburger       = document.querySelector('#hamburger');
        this.menuOpen = false;

        this.menuCta.addEventListener('click', this.menuToggle.bind(this));

    };

    // hasClass, takes two params: element and classname
    hasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
  

    menuToggle(){
        let tlMenu = new TimelineLite();


        if(!this.hasClass(this.menu, 'is-animating')){
            if(!this.menuOpen){
                console.log(this.menuOpen); //prints fine
                this.menuOpen = true; //why doesn't change?

                tlMenu
                    .addLabel('menu-open')
                    .set(this.menu, {className:'+=is-animating'})                
                    .to(this.menu, 1, {opacity: .98, autoAlpha: 1, ease: Power4.easeInOut}, 'menu-open')
                    .to(this.ctaLinks, 1, {color: 'black', ease: Power4.easeOut}, 'menu-open')
                    .to(this.hamburger, 1, {stroke: 'black', ease: Power4.easeOut}, 'menu-open')
                    .set(this.menu, {className:'-=is-animating'});

                console.log(this.menuOpen);
    
            }else if(this.menuOpen){
                tlMenu
                    .addLabel('menu-close')
                    .to(this.menu, 1, {opacity: 0, autoAlpha: 0, ease: Power4.easeOut}, 'menu-close')
                    .to(this.ctaLinks, 1, {color: 'white', ease: Power4.easeOut}, 'menu-close')
                    .to(this.hamburger, 1, {stroke: 'white', ease: Power4.easeOut}, 'menu-close');
    
                this.menuOpen = false;
            };
        }
    }

    closeMenu(){
        let tlMenu = new TimelineLite();
        tlMenu
            .addLabel('menu-open')
            .to(this.menu, 1, {opacity: 1, autoAlpha: 1, ease: Power4.easeOut}, 'menu-open')
            .to(this.ctaLinks, 1, {color: 'black', ease: Power4.easeOut}, 'menu-open')
            .to(this.hamburger, 1, {stroke: 'black', ease: Power4.easeOut}, 'menu-open')
    }


//document.getElementById("top-bun").setAttribute("d", "M9,12 L10,12");
};

export default Menu;