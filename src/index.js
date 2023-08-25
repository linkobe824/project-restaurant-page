import createHeader from "./components/header/header";
import createMain from "./components/main/main";
import createMenu from "./components/menu/menu";

const appContainer = document.getElementById('content')
appContainer.appendChild(createHeader())
// appContainer.appendChild(createMain())

// const menuBtn = document.querySelector('.menu')

// menuBtn.addEventListener('click', () => {
//     const childToRemove = appContainer.querySelector('.main');
//     appContainer.removeChild(childToRemove)
//     appContainer.appendChild(createMenu());
// })

appContainer.appendChild(createMenu())