import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StyckyHeader';
import ClientArea from './modules/ClientArea';

// React related code
import React from 'react';
import ReactDOM from 'react-dom';

function MyReactComponent() {
    return(
        <div>
            <h1 className="section-title section-title--blue">This is my react component</h1>
            <p>The sky is blue</p>
        </div>
    )
}

ReactDOM.render(<MyReactComponent />, document.querySelector('#react-example'));


if(module.hot) {
    module.hot.accept();
}

/* Mobile menu */
new ClientArea();
new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        //console.log('click on button');
        if(typeof modal == 'undefined') {
            //console.log('undefined');
            import(/* webpackChunkName: 'modal' */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout( () => {modal.openTheModal()}, 20);
            }).catch(console.log('there was a problem!'));
        }else{
            //console.log('defined');
            modal.openTheModal();
        }
    });
});
