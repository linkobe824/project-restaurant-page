import Logo from './images/logo.png'
import './header.css'

export default function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('header__logo');
    const myLogo = new Image();
    myLogo.classList.add("header__logo__image")
    myLogo.src = Logo;
    logoDiv.appendChild(myLogo);
    header.appendChild(logoDiv);
    header.appendChild(navBar());
    return header
}

function navBar() {
    const menuButtons = ['menu', 'contact'];
    const nav = document.createElement('nav');
    nav.classList.add('header__nav');
    const listContainer = document.createElement('ul');
    listContainer.classList.add('header__nav__list');

    menuButtons.forEach(btn => {
        const listItem = document.createElement('li');
        listItem.classList.add("header__nav__list__item");
        const a = document.createElement('a');
        a.classList.add(btn);
        a.textContent = btn;
        a.href = "#"
        listItem.appendChild(a);
        listContainer.appendChild(listItem);
    })

    nav.appendChild(listContainer)
    
    return nav
}