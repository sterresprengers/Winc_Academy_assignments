const moviesList = document.querySelector("#movies-list");

const setImdbUrl = (imdbId) => {
    // const baseUrl = "https://www.imdb.com/title/";
    // const urlWithId = new URL(imdbId, baseUrl);
    // return urlWithId;
    //shorter: 
    return 'https://www.imdb.com/title/${imdbId}'
};

const addMoviesToDom = (movies) => {
    moviesList.querySelectorAll('*').forEach(n => n.remove());
    movies.map(movie => { 
        const liTag = document.createElement("li");
        const imgTag = document.createElement("img");
        const aTag = document.createElement("a");
        const imdbId = movie.imdbID;
        const ImdbUrl = setImdbUrl(imdbId);
        aTag.href = ImdbUrl;
        aTag.target = "blank";
        imgTag.src = movie.Poster;
        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        return liTag;
    })
    .forEach((liTag) => {
        moviesList.appendChild(liTag);
    });
};

addMoviesToDom(movies);

const radioButtons = document.querySelectorAll("input, film-filter");

radioButtons.forEach(button => {
    button.addEventListener("change", event => {
        const selectedButton = event.target.value;
        handleOnChangeEvent(selectedButton);
    });
});

const handleOnChangeEvent = (value => {
    switch(value) {
        case "newest":
            filterLatestMovies();
            break;
        case "avenger-movies":
            filterMovies("avenger");
            break;
        case "xmen-movies":
            filterMovies("x-men");
            break;
        case "princess-movies":
            filterMovies("princess");
            break;
        case "batman-movies":
            filterMovies("batman");
            break;
        default:
            break;
    };
});

const filterMovies = wordInMovieTitle => {
    // console.log("Word given to filterMovies funtion = ", wordInMovieTitle);
    const filteredMovies = movies.filter(movie => {
        const lowerCaseTitles = movie.Title.toLowerCase();
        const matchingTitles = lowerCaseTitles.includes(wordInMovieTitle);
        if (matchingTitles) {
            return movie;
        };
    });
    // console.log("The selected films are:", filteredMovies);
    addMoviesToDom(filteredMovies);
};

const filterLatestMovies = () => {
    // console.log("The latest movies filter was selected")
    const filteredLatestMovies = movies.filter(movie => {
        if (movie.Year >= 2014) {
            return movie;
        };
    });
    // console.log("The selection newest films is:", filteredLatestMovies);
    addMoviesToDom(filteredLatestMovies);
};