// const API_KEY = '935481d921f1d2a06dd8dbfaf4028309';

// async function getData() {
//     try {
//         // const apiUrl2 = 'https://api.themoviedb.org/3/genre/movie/list'
//         const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=935481d921f1d2a06dd8dbfaf4028309';
//         const response = await fetch(apiUrl);
//         const jsonResponse = await response.json();
//         console.log(jsonResponse)
//     } catch(error) {
//         console.log(error)
//     }
// }


// Solution by Winc:

const API_KEY = "935481d921f1d2a06dd8dbfaf4028309";

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};