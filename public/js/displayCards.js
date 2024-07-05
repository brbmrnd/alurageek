import { connectAPI } from "./connectApi.js"
const containerProducts = document.querySelector("[data-products]");

function addCard(name, price, image, id) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${image}" class="card-img" alt="Imagem do produto: ${name}">
                    <div class="card-container--info">
                        <p>${name}</p>
                        <div class="card-container--value">
                            <p>$ ${parseFloat(price).toFixed(2)}</p>
                            <img src="/assets/icons/trash.png" class="icon_trash" alt="Ícone de lixeira" data-product-id="${id}">
                        </div>
                    </div>`

    return card;
}

async function displayCard() {
    try {
        const listAPI = await connectAPI.displayCardList();
        console.log("Data loaded from API:", listAPI);

        if (listAPI.length === 0) {
            containerProducts.innerHTML = `<h2> Nenhum produto adicionado. </h2>`;
        } else {
            listAPI.forEach(element => containerProducts.appendChild(addCard(element.name, element.price, element.image, element.id)));
        }
    } catch (error) {
        console.error("Error loading data from API:", error);
        containerProducts.innerHTML = `<h2> Nenhum produto adicionado. </h2>`;
    }
}

displayCard();