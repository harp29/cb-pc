const scss = require('../scss/style.scss');
import index from '../pug/index.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';

//Instaniate
function runOnLoad(){
    new IntroAnimations()
    .animateTimelines();
};

runOnLoad();

new Menu();


// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
//     (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
//     window.location = 'about.html';
// }


