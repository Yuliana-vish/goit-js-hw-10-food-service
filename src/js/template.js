import menu from '../menu.json';
import itemsTemplate from '../templates/menu.hbs';

const markup = itemsTemplate(menu);

const foodMenu = document.querySelector('.js-menu');

foodMenu.insertAdjacentHTML('afterbegin', markup);
