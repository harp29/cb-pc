const scss = require('../scss/style.scss');
import index from '../pug/services.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';

//Instaniate
function runOnLoad(){
    new IntroAnimations().landAnimations();
};
setTimeout(function(){
    runOnLoad();
}, 500);

//Instaniate
new Menu();

console.log('hi.... from services');
