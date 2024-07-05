async function displayCardList() {
    const connection = await fetch('http://localhost:3000/products');
    const convertedConnection = await connection.json();

    return convertedConnection;
}

export const connectAPI = {
    displayCardList
}