import createHeader from "./components/header/header";
import createMain from "./components/main/main";

const appContainer = document.getElementById('content')
appContainer.appendChild(createHeader())
appContainer.appendChild(createMain())
