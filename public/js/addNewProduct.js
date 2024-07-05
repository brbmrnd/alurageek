import { connectAPI } from "./connectApi.js";
const btnAdd = document.getElementById("btn_adiciona");

async function addNewProduct(event) {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        await connectAPI.addNewItem(name, price, image);
        document.querySelector("form").reset();

        btnAdd.textContent = "Adicionado!";

        setTimeout(() => {
            btnAdd.textContent = "Adicionar";
        }, 2000);

    } catch (error) {
        console.log(error);
    }
}

btnAdd.addEventListener("click", event => addNewProduct(event))
