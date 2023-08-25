import './style.css'
import { menu_list } from '../menu_content';
import createCard from '../card/card';

export default function createMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");
    const heading = document.createElement("h2");
    heading.classList.add("menu__heading");
    heading.textContent = "Menu";
    const cardSection = document.createElement("div");
    cardSection.classList.add("menu__cardsection");
    
    menu_list.forEach(item => {
        cardSection.appendChild(createCard(item))
    })

    menuContainer.appendChild(cardSection);

    return menuContainer;
}

