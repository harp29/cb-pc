const scss = require('../scss/style.scss');
import index from '../pug/team.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import danielaImg from '../images/daniela.jpg';
import navjotImg from '../images/navjot.jpg';
import poonamImg from '../images/poonam.jpg';
import danielaSmallImg from '../images/daniela-small.jpg';
// import navjotImg from '../images/navjot.jpg';
// import poonamImg from '../images/poonam.jpg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';
import ModalTeamMember from './module/ModalTeamMember';

//global variables:
// let jsCtas = document.querySelectorAll('.js-team-member-cta'),
//     closeCta = document.querySelector('.js-close-cta');

    new ModalTeamMember();





//Instaniate
function runOnLoad(){
    new IntroAnimations().landAnimations();
};
setTimeout(function(){
    runOnLoad();
}, 500);

//Instaniate
new Menu();

console.log('hi.... from team');
