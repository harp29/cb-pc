const scss = require('../scss/style.scss');
import index from '../pug/index.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import IntroAnimations from './module/IntroAnimations';

//Instaniate
new IntroAnimations()
    .animateTimelines();

// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
//     (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
//     window.location = 'about.html';
// }


