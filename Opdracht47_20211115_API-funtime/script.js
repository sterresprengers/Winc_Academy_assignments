const btnBigJoke = document.querySelector("#big-joke-btn");
const btnSmallJoke = document.querySelector("#small-joke-btn");
const main = document.querySelector("main");

const awaitGetData = async () => {
    const fetchedData = await getData();
    // console.log("Fetching text worked", fetchedData);
    const jokeElement = document.createElement("p");
    jokeElement.classList.add("text-styling");
    const jokeText = document.createTextNode(
        `${fetchedData.joke} `
    )
    jokeElement.appendChild(jokeText);
    main.appendChild(jokeElement);
};


btnBigJoke.addEventListener("click", () => {
    main.querySelectorAll("*").forEach(n => n.remove());
    awaitGetData();
});

const awaitGetImage = async (image) => {
    const fetchedImage = await getImage();
    // console.log("Fetching image worked", fetchedImage);
    const jokeImageElement = document.createElement("img");
    jokeImageElement.classList.add("image-styling");
    jokeImageElement.src = fetchedImage.url;
    // console.log("This is the url of the image: ", fetchedImage.url);
    main.appendChild(jokeImageElement);
};


btnSmallJoke.addEventListener("click", () => {
    main.querySelectorAll("*").forEach(n => n.remove());
    awaitGetImage();
});
