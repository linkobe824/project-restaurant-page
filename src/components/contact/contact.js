import { info } from "../text_content";

export default function createContact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");
    const heading = document.createElement('h2');
    heading.classList.add("contact__title");
    heading.textContent = "Contact Us";
    const contentContainer = document.createElement('div');
    contentContainer.classList.add("contact__content");
    // Form
    const contactForm = document.createElement('form');
    contactForm.classList.add("content__form");
    contactForm.appendChild(createTextInput(inputs));
    // Info
    const information = document.createElement('div');
    information.classList.add("content__info");
    information.appendChild(createInfo(info));

    contact.appendChild(heading);
    contentContainer.appendChild(contactForm);
    contentContainer.appendChild(information);
    contact.appendChild(contentContainer);

    return contact;
}

const inputs = ["Full Name", "Email", "Message"]

function createTextInput(inputs){
    const inputContaier = document.createElement('div');
    inputContaier.classList.add("form__inputs")

    inputs.forEach(input => {
        const cleanedInput = input.replace(/\s+/g, "").toLowerCase();
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("inputs__input");
        const header = document.createElement("h3");
        header.textContent = input;
        header.classList.add("input__header");
        const textInput = document.createElement("input");
        textInput.classList.add("input__textInput");
        textInput.classList.add(cleanedInput);
        textInput.setAttribute("type", "text");

        inputContaier.appendChild(header);
        inputContaier.appendChild(textInput);

    }); 
    return inputContaier;
}

function createInfo(obj) {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info__info")
    for (const [key, value] of Object.entries(obj)) {
        const info = document.createElement("div");
        info.classList.add("info__section")
        const header = document.createElement("h3");
        header.classList.add("info__header");
        header.textContent = key;
        const text = document.createElement("p");
        text.classList.add("info__text");
        text.textContent = value;

        info.appendChild(header);
        info.appendChild(text);
        
        infoContainer.appendChild(info);
    }

    return infoContainer;
}