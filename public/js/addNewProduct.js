import { connectAPI } from "./connectApi.js";
const form = document.querySelector("[data-form]");
const btnAdd = document.getElementById("btn_adiciona");
const messageErro = document.querySelector(".message_error");

async function addNewProduct(event) {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    btnAdd.setAttribute("disabled", "disabled");

    try {
        await connectAPI.addNewItem(name, price, image);
        document.querySelector("form").reset();

        btnAdd.textContent = "Adicionado!";

        setTimeout(() => {
            btnAdd.textContent = "Adicionar";
            btnAdd.removeAttribute("disabled");
        }, 2000);

    } catch (error) {
        console.log("Erro ao adicionar produto:", error);
        messageErro.innerHTML = "O produto não foi adicionado. Tente novamente."
    }
}

form.addEventListener("submit", event => addNewProduct(event));
