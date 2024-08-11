// https://api.tvmaze.com/search/shows?q=superman

const form = document.querySelector("#form");
const result = document.querySelector("#result");

function removeSearchResult() {
    while (result.firstChild) {
        result.firstChild.remove();
    }
}

async function getTvshows(searchText) {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)

    for (const item of res.data) {
        if (item.show.image) {
            const imgUrl = item.show.image.medium;
            const image = document.createElement('img');
            image.src = imgUrl;
            image.style.margin = "10px"
            image.style.border = "2px solid black"
            result.append(image);

        }
    }
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    removeSearchResult();
    getTvshows(searchText);
    event.target[0].value = "";




})

