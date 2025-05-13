const tmdbKey = "<Your API Key>";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");
let currentMovie = null;
const likedMovies = [];
const dislikedMovies = [];

const getGenres = async () => {
    const genreRequestEndpoint = "/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const jsonRepsonse = await response.json();
            console.log(jsonRepsonse);

            const genres = jsonRepsonse.genres;
            console.log(genres);

            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = "/discover/movie";
    const baseParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;

    try {
        const initialUrl = `${tmdbBaseUrl}${discoverMovieEndpoint}${baseParams}`;
        const initialResponse = await fetch(initialUrl);
        if (initialResponse.ok) {
            const initialData = await initialResponse.json();
            const totalPages = Math.min(initialData.total_pages, 500); // TMDB max limit
            const randomPage = Math.floor(Math.random() * totalPages) + 1;

            // Second fetch to get random page of movies
            const requestParams = `${baseParams}&page=${randomPage}`;
            const finalUrl = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
            const finalResponse = await fetch(finalUrl);
            if (finalResponse.ok) {
                const finalData = await finalResponse.json();
                return finalData.results;
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const movieInfo = await response.json();
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
