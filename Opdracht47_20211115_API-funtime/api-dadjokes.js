// https://icanhazdadjoke.com/api#fetch-a-random-dad-joke

const getData = async () => {
    const apiUrl = "https://icanhazdadjoke.com/";
    try {
        const response = await fetch(apiUrl, { 
            method: "GET",
            headers: { 'Accept': 'application/json' }
        });
        // console.log(response)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    };
};


const getImage = async () => {
    const apiUrl = "https://icanhazdadjoke.com/";
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        const jokeId = await data.id;
        const apiUrlImage = `https://icanhazdadjoke.com/j/${jokeId}.png`;
        // console.log(jokeId)
        const jokeAsImage = await fetch(apiUrlImage, {
            method: "GET"
        });
        // console.log("jokeAsImage", jokeAsImage)
        return jokeAsImage;
    } catch (error) {
        console.log(error);
    };
};
// getImage()