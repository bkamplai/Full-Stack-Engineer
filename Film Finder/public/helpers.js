// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    if (currentMovie) likedMovies.push(currentMovie);
    renderMovieLists();
    clearCurrentMovie();
    showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    if (currentMovie) dislikedMovies.push(currentMovie);
    renderMovieLists();
    clearCurrentMovie();
    showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');

    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;

    return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;

    return overviewParagraph;
};

const createMovieReleaseDate = (releaseDate) => {
    const releasePara = document.createElement('p');
    releasePara.setAttribute('id', 'movieReleaseDate');
    releasePara.innerHTML = `<strong>Release Date:</strong> ${releaseDate}`;
    return releasePara;
};

const createMovieRuntime = (runtime) => {
    const runtimePara = document.createElement('p');
    runtimePara.setAttribute('id', 'movieRuntime');
    runtimePara.innerHTML = `<strong>Runtime:</strong> ${Math.floor(runtime / 60)}h ${runtime % 60}min`;
    return runtimePara;
};

const createMovieGenres = (genres) => {
    const genresPara = document.createElement('p');
    genresPara.setAttribute('id', 'movieGenres');
    const genreNames = genres.map(g => g.name).join(', ');
    genresPara.innerHTML = `<strong>Genres:</strong> ${genreNames}`;
    return genresPara;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
    currentMovie = movieInfo; // Store it for like/dislike actions
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');

    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);
    const releaseDate = createMovieReleaseDate(movieInfo.release_date);
    const runtime = createMovieRuntime(movieInfo.runtime);

    // Optionally include genres if present
    const genresText = movieInfo.genres ? createMovieGenres(movieInfo.genres) : null;

    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);
    movieTextDiv.appendChild(releaseDate);
    movieTextDiv.appendChild(runtime);
    if (genresText) movieTextDiv.appendChild(genresText);

    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
};

const renderMovieLists = () => {
    const likedList = document.getElementById('likedList');
    const dislikedList = document.getElementById('dislikedList');

    likedList.innerHTML = '';
    dislikedList.innerHTML = '';

    likedMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        likedList.appendChild(li);
    });

    dislikedMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        dislikedList.appendChild(li);
    });
};