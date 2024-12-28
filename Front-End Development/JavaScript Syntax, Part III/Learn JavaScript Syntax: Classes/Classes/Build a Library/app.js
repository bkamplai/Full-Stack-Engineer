class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkedOut) {
        this._isCheckedOut = checkedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        return this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this.ratings.length;
    }

    addRating(newRating) {
        if (newRating >= 1 && newRating <= 5) {
            this.ratings.push(newRating);
        } else {
            console.log("Rating must be between 1 and 5.");
        }
    }
}

class Book extends Media {
    constructor(author, title, pages, genre) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._genre = genre;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get genre() {
        return this.genre;
    }
}

class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

    get movieCast() {
        return this._movieCast;
    }
}

class CD extends Media {
    constructor(artist, title, songTitles) {
        super(title);
        this._artist = artist;
        this._songTitles = songTitles;
    }

    get artist() {
        return this._artist;
    }

    get songTitles() {
        return this._songTitles;
    }

    shuffle() {
        return this._songTitles.sort(() => Math.random() - 0.5);
    }
}

class Catalog {
    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        if (item instanceof Media) {
            this._items.push(item);
        } else {
            console.log("Only items of type Media can be added to the catalog.");
        }
    }
}

const historyofEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
historyofEverything.toggleCheckOutStatus();
console.log(historyofEverything.isCheckedOut);
historyofEverything.addRating(4);
historyofEverything.addRating(5);
historyofEverything.addRating(5);
console.log(historyofEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
