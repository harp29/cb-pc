const scss = require('../scss/style.scss');
import index from '../pug/about.pug';
import Menu from './module/Menu';
console.log('hello from ABOUT.JS');

function runOnLoad(){

    let timeline = new IntroAnimations();

     timeline.landAnimations();

};
setTimeout(function(){
    runOnLoad();
}, 200);

new Menu();