async function displayCardList() {
    const connection = await fetch('http://localhost:3000/products');
    const convertedConnection = await connection.json();

    return convertedConnection;
}

async function addNewItem(name, price, image, id) {
    const connection = await fetch('http://localhost:3000/products',
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: name,
                price: price,
                image: image,
                id: id
            })
        });

    if (!connection.ok) {
        throw new Error("Não foi possível adicionar o produto.")
    }

    const addedItem = await connection.json();
    return addedItem;

}

async function removeItem(id) {
    const connection = await fetch(`http://localhost:3000/products/${id}`,
        {
            method: "DELETE"
        });

    if (!connection.ok) {
        throw new Error("Não foi possível excluir o produto.");
    }

    const removedItem = await connection.json();
    return removedItem;
}

export const connectAPI = {
    displayCardList,
    addNewItem,
    removeItem
}