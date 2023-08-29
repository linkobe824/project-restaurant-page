import { paragraph, title } from "../text_content";
import './main.css'

export default function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.classList.add("sub-page");
    const header = document.createElement("h1");
    header.classList.add("main__title");
    header.textContent = title;
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("main__subcontainer");
    const article = document.createElement("p");
    article.classList.add("main__subcontainer__article");
    article.textContent = paragraph;

    articleContainer.appendChild(article);
    main.appendChild(header);
    main.appendChild(articleContainer);

    return main;
}