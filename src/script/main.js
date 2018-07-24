const scss = require('../scss/style.scss');
import index from '../pug/index.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import danielaImg from '../images/daniela.jpg';
import navjotImg from '../images/navjot.jpg';
import poonamImg from '../images/poonam.jpg';
import IntroAnimations from './module/IntroAnimations';
// import scrollTo from './module/ScrollToPlugin';
import Menu from './module/Menu';

window.onload = function(){
    let scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
    document.documentElement.scrollTop = document.body.scrollTop = scrollPosY - scrollPosY;
};

let scrollCta = document.querySelector('.js-scroll-down-cta');
scrollCta.addEventListener('click', function(){
    console.log('hi');
    document.documentElement.scrollTop = document.body.scrollTop = 400;
});


function runOnLoad(){
    let timeline = new IntroAnimations();

     //master timeline
     new TimelineMax()
     .add(timeline.loadAnimations())
     .add(timeline.landAnimations(), '-=1.6');

};
setTimeout(function(){
    runOnLoad();
}, 200);

//Instaniate
new Menu();

console.log('hi.... from index');


// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
//     (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
//     window.location = 'about.html';
// }


