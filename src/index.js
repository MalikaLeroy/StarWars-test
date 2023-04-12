import './scss/globals.scss';
import 'lazysizes';
import Parallax from './components/Parallax.js';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const app = document.getElementById('app');

const header = document.createElement('header');
header.innerHTML = Header(Parallax);
app.appendChild(header);


const main = document.createElement('main');
main.innerHTML = Main(Parallax);
app.appendChild(main);



const footer = document.createElement('footer');
footer.innerHTML = Footer(Parallax);
app.appendChild(footer);

