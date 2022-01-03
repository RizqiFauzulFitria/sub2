import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import './components/app-bar.js';
import './components/jumbo-el.js';
import './components/skip-content.js';
import './components/footer-el.js';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.icon-toggler'),
  drawer: document.getElementsByTagName('nav')[0],
  navbar: document.getElementsByClassName('navbar-nav')[0],
  jumbo: document.querySelector('.jumbotron'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
