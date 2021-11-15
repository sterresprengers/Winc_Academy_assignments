const API_KEY = "api_key=935481d921f1d2a06dd8dbfaf4028309";
const lang = "language=en-US";

async function getMovieGenres() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`;
    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();
        // console.log("The data in getMovieGenresList function: ", data);
        return data;
    } catch (error) {
        console.log(error);
    };
};

async function getPersonalFavorite() {
    const idTopMovie = "tt0043274";
    const external_source = "external_source=imdb_id";
    const apiUrl = `https://api.themoviedb.org/3/find/${idTopMovie}?${API_KEY}&${external_source}`;
    try {
        const response = await fetch(apiUrl, {method: "GET"});
        const data = await response.json();
        // console.log("The data in getTopMovie function: ", data);
        return data;
    } catch (error) {
        console.log(error);
    };
};

async function getTopRated() {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&page=1`;
    try {
        const response = await fetch(apiUrl, {method: "GET"});
        const data = await response.json();
        // console.log("The data in getTopRated function: ", data);
        return data;
    } catch (error) {
        console.log(error);
    };
};

async function getBestAction() {
    const actionId = "with_genres=28";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&${lang}&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&${actionId}`;
    try {
        const response = await fetch(apiUrl, {method: "GET"});
        const data = await response.json();
        // console.log("The data in getBestAction function: ", data);
        return data;
    } catch (error) {
        console.log(error)
    };
};

async function get1975Movies() {
    const year = "year=1975";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&${lang}&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&${year}`;
    try {
        const response = await fetch(apiUrl, {method: "GET"});
        const data = await response.json();
        // console.log("The data in get1975Movies function: ", data)
        return data;
    } catch (error) {
        console.log(error);
    };
};