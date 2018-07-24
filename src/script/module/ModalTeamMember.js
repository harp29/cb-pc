//import
import SplitText from './SplitText';
import TweenMax from 'gsap';

class ModalTeamMember{
    constructor(){

        this.body = document.querySelector('body');
        this.modalTargets = document.querySelectorAll('.js-team-member-cta');
        this.modalId = '';
        this.closeCtas = document.querySelectorAll('.js-close-cta');

        console.log(this.closeCta);

        console.log('starting: ' + this.modalId);

        let that = this;

        for(let i = 0; i < this.modalTargets.length; i++){
            this.modalTargets[i].addEventListener('click', function(e){
                let target = e.target.getAttribute('id'),
                    extract = id => id.match(/^js-(.+)Cta$/)[1];
                    console.log(i + ' :' + target);
                    that.modalId = extract(target);
                    that.openModal(that.modalId);
                    target = e.target.getAttribute('id');
                    console.log('end: ' + target);
            });
        };

        for(let i = 0; i < this.closeCtas.length; i++){
            this.closeCtas[i].addEventListener('click', function(e){
                    that.closeModal(that.modalId);
            });
        };


        // this.closeCta.addEventListener('click', function(){
        //     that.closeModal(that.modalId);
        // });
    }


    //OPEN MODAL:
    openModal(modalId){
        console.log('open modal');
        const modalTl = new TimelineLite(),
            modalTarget = document.querySelector('#'+modalId),
            modalTargetId = modalTarget.getAttribute('id').toString(),
            headingTitle = document.querySelector('.team-member__heading .heading-title'),
            splitTextHeadingTitle = new SplitText(headingTitle, {type: 'chars'}),
            headingSubTitle = document.querySelector('.team-member__heading .heading-subTitle'),
            memberContent = document.querySelector('.team-member__inner-content'),
            close = document.querySelector('.js-close-cta'),
            splitTextHeadingSubTitle = new SplitText(headingSubTitle, {type: 'chars'});

            let test = modalTargetId.toString();
            console.log(test)

            modalTl
                .addLabel('modal-in')
                .to(this.body, .4, {overflow: 'hidden', ease: Power4.easeOut}, 'modal-in')
                .to(modalTarget, .6, {x: 0, ease: Power4.easeOut}, 'modal-in')
                .addLabel('content-in', '-=.3')
                // .from(headingTitle, 1, {x: 25, ease: Power4.easeInOut}, 'content-in')
                .staggerFrom(splitTextHeadingTitle.chars, .4, {opacity: 0, x: 20, ease: Power4.easeOut}, 0.06, 'content-in')
                .from(headingSubTitle, 1, {opacity: 0, x: 10, ease: Power4.easeOut}, '-=.37')
                .from(memberContent, 1, {opacity: 0, x: 40, ease: Power4.easeOut}, '-=.8')
                .from(close, .4, {opacity: 0})
                
              
    }

    //CLOSE MODAL:
    closeModal(modalId){
        console.log('close');
        const modalTl = new TimelineLite(),
            modalTarget = document.querySelector('#'+modalId);

            modalTl
                .addLabel('modal-out')
                .to(modalTarget, .3, {x: '100%', ease: Power4.easeOut})
                .to(this.body, .5, {overflowY: 'visible', ease: Power4.easeOut})
                
                // .set(modalTarget, {x: '100%'})
    }
};

export default ModalTeamMember;