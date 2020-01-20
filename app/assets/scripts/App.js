import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StyckyHeader';
import Modal from './modules/Modal';

if(module.hot) {
    module.hot.accept();
}

/* Mobile menu */
let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
let modal = new Modal();
//let revealOnScroll = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);