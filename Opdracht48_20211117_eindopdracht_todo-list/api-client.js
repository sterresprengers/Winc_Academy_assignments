const getData = async function () {
    const apiUrl = "http://localhost:3000/";
    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
getData()