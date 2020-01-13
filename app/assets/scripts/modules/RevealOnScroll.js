class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.hideInitially();
        this.events();
    }

    events() {
        window.addEventListener('scroll', () => {
            console.log('scroll function run');
            this.itemsToReveal.forEach(el => {
                this.calculateIfScrolledTo(el);
            });
        });
    }

    hideInitially() {
        this.itemsToReveal.forEach(function(el) {
            el.classList.add('reveal-item')
        });
    }

    calculateIfScrolledTo(el) {
        //console.log(el.getBoundingClientRect().y);
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) *100;
        if( scrollPercent < 75) {
            el.classList.add('reveal-item--is-visible');
        }
    }
}

export default RevealOnScroll;