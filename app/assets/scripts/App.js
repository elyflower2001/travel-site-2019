import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';

if(module.hot) {
    module.hot.accept();
}

/* Mobile menu */
let mobileMenu = new MobileMenu();