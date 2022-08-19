import * as _ from 'lodash';
import './style.scss';
import printMe from "./print";
import {PopUpInfo} from "./components/PopUpInfo.component";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML='Click me and check the console';
    btn.onclick = printMe;
    element.classList.add('hello');
    element.appendChild(btn);
    return element;
}

interface IExample {
    age: number,
    name: string,
    surname: string
}

function introduceYourself(person: IExample) {
    return `Hello, My name is ${person.name} ${person.surname} and I am ${person.age} years old`;
}

console.log(introduceYourself({age: 20, name: 'John', surname: 'Smith'}))

document.body.appendChild(component());
// Define the new element
customElements.define('popup-info', PopUpInfo);
document.body.appendChild(document.createElement('popup-info'))
