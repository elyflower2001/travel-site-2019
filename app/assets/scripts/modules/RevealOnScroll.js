import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.itemsToReveal = els;
        this.thresholdPercent = thresholdPercent;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce(() => {
            //console.log('resize');
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    hideInitially() {
        this.itemsToReveal.forEach( el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    calculateIfScrolledTo(el) {
        if(window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) *100;
            if( scrollPercent < this.thresholdPercent) {
                //console.log('element revealed');
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if(el.isLastItem == true) {
                //console.log('is last item');
                window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }

    calcCaller() {
        //console.log('scroll run');
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }
}

export default RevealOnScroll;