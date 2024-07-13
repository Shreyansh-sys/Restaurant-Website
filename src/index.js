import './styles.css';
import { home } from './pages/home';
import { menu } from './pages/menu';
import { about } from './pages/about';

document.addEventListener('DOMContentLoaded', home);

const content = document.getElementById('content');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const aboutTab = document.querySelector('#about');

// function openTab (tabName) {

//     content.innerHTML = '';

//     switch(tabName){

//         case 'home':
//             home();
//             break;
        
//         case 'menu':
//             menu();
//             break;    
        
//         case 'about':
//             about();
//             break;    
//     }
// }

homeTab.addEventListener('click', () => home());
menuTab.addEventListener('click', () => menu());
aboutTab.addEventListener('click', () => about());




