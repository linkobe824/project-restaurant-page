import createHeader from "./components/header/header";
import createMain from "./components/main/main";
import createMenu from "./components/menu/menu";
import createContact from "./components/contact/contact";

const appContainer = document.getElementById('content');
appContainer.appendChild(createHeader());
appContainer.appendChild(createMain());

const menuBtn = document.querySelector('.menu');
const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');

menuBtn.addEventListener('click', () => {
    const childToRemove = appContainer.querySelector('.sub-page');
    appContainer.removeChild(childToRemove)
    appContainer.appendChild(createMenu());
});

homeBtn.addEventListener('click', () => {
    const childToRemove = appContainer.querySelector('.sub-page');
    appContainer.removeChild(childToRemove)
    appContainer.appendChild(createMain());
})

contactBtn.addEventListener('click', () => {
    const childToRemove = appContainer.querySelector('.sub-page');
    appContainer.removeChild(childToRemove)
    appContainer.appendChild(createContact());
})


