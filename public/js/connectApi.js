async function displayCardList() {
    const connection = await fetch('http://localhost:3000/products');
    const convertedConnection = await connection.json();

    return convertedConnection;
}

async function addNewItem(name, price, image) {
    const connection = await fetch('http://localhost:3000/products',
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: name,
                price: price,
                image: image
            })
        });

    if (!connection.ok) {
        throw new Error("Não foi possível adicionar o produto.")
    }

    const convertedConnection = await connection.json();
    return convertedConnection;

}

export const connectAPI = {
    displayCardList,
    addNewItem
}