/*
FUNZIONE COSTRUTTORE
function Person(personName, personColor) {
    this.name = personName,
    this.color = personColor,
    this.greet = function() {
        console.log('hello, my name is '+ this.name + ' and my fav color is ' + this.color);
    }
}*/

class Person {
    constructor(personName, favColor) {
        this.name = personName;
        this.color = favColor;
    }

    greet() {
        console.log('hello, my name is '+ this.name + ' and my fav color is ' + this.color);
    }
}

export default Person;