const scss = require('../scss/style.scss');
import index from '../pug/services.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';

// window.onload = function(){
//     window.pageYOffset || document.documentElement.scrollTop;
//     document.documentElement.scrollTop = document.body.scrollTop = 0;
// }
window.onload = function () {

    

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
window.scrollTo(0,0);

console.log('hi.... from services');
