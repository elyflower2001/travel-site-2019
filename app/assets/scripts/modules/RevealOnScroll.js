import throttle from 'lodash/throttle';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
    }

    hideInitially() {
        this.itemsToReveal.forEach( el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    calculateIfScrolledTo(el) {
        //console.log(el.getBoundingClientRect().y);
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) *100;
        if( scrollPercent < 75) {
            console.log('element was calculated');
            el.classList.add('reveal-item--is-visible');
            el.isRevealed = true;
            if(el.isLastItem == true) {
               console.log('is last item');
               window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }

    calcCaller() {
        console.log('scroll run');
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed == false) {
                console.log('isRevealed = false');
                this.calculateIfScrolledTo(el);
            }
        });
    }
}

export default RevealOnScroll;