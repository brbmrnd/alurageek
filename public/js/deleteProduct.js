import { connectAPI } from "./connectApi.js";

async function deleteProduct(id) {
    try {
        await connectAPI.removeItem(id);
        Alert("Produto excluído com sucesso.");

    } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert("Houve um erro ao excluir o produto.");
    }
}

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains('icon_trash')) {
        const productId = event.target.dataset.productId;
        if (productId) {
            await deleteProduct(productId);
            console.log("ID do produto:", productId)
        }
    }
});