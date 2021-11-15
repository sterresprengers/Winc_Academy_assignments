const setGenresListInDOM = async () => {
    const genresList = document.querySelector("#movie-genres-list");
    const list = await getMovieGenres();
    // console.log(list);
    list.genres.forEach(genre => {
        const liTag = document.createElement("li");
        const liTagContent = document.createTextNode(
            `genre naam: ${genre.name}, id: ${genre.id}`
        );
        liTag.appendChild(liTagContent);
        genresList.appendChild(liTag);
    });
};
setGenresListInDOM();

const setPersonalFavoriteInDom = async () => {
    const topMovie = await getPersonalFavorite();
    // console.log(topMovie);
    topMovie.movie_results.forEach(movie => {
        const pTag = document.querySelector("#top-movie");
        const pTagContent = document.createTextNode(
            `Titel: ${movie.title}`
        );
        pTag.appendChild(pTagContent);
    });
};
setPersonalFavoriteInDom();

const setTopRated = async () => {
    const topRatedList = document.querySelector("#top-rated-list");
    const list = await getTopRated();
    // console.log(list)
    list.results.forEach(movie => {
        const liTag = document.createElement("li");
        liTag.innerHTML = movie.title;
        topRatedList.appendChild(liTag);
    });
};
setTopRated();

const setBestActionMovies = async () => {
    const topRatedActionList = document.querySelector("#top-rated-action-list");
    const list = await getBestAction();
    // console.log(list);
    list.results.forEach(movie => {
        const liTag = document.createElement("li");
        liTag.innerHTML = movie.title;
        topRatedActionList.appendChild(liTag);
    });
};
setBestActionMovies();

const setFrom1975Movies = async () => {
    const movies1975List = document.querySelector("#movies-1975-list");
    const list = await get1975Movies();
    // console.log(list);
    list.results.forEach(movie => {
        const liTag = document.createElement("li");
        liTag.innerHTML = movie.title;
        movies1975List.appendChild(liTag);
    });
};
setFrom1975Movies();