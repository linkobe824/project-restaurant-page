export default function createCard(item) {
    const card = document.createElement('div');
    card.classList.add("card");
    const title = document.createElement('h3');
    title.classList.add("card__title");
    title.textContent = item.name; 
    const img = new Image();
    img.classList.add("card__title__img")
    img.src = item['img_url'];
    const ingredients =  document.createElement('p');
    ingredients.classList.add("card__ingredients");
    ingredients.textContent = item.ingredients;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(ingredients);

    return card
}