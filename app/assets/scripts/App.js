import '../styles/styles.css';
import Person from './modules/Person.js';

if(module.hot) {
    module.hot.accept();
}


/*****  Code for test ******/
/* funzione costruttore */
class Adult extends Person {
    payTaxes() {
        console.log(this.name + ' now owns 0 taxes');
    }
}

let john = new Person('john doe', 'purple');
let jane = new Adult('jane smith', 'green');
john.greet();
jane.greet();
jane.payTaxes();