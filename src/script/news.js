const scss = require('../scss/style.scss');
import index from '../pug/news.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';

window.onload = function(){
    let scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
    document.documentElement.scrollTop = document.body.scrollTop = scrollPosY - scrollPosY;
}

//Instaniate
function runOnLoad(){
    new IntroAnimations().landAnimations();
};
setTimeout(function(){
    runOnLoad();
}, 500);

//Instaniate
new Menu();

console.log('hi.... from news');