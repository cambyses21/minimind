/*
JAVASCRIPT SYNTAX, PART III
Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you’re looking for a challenge, try to create the four classes without using the steps below.
*/

class Media {
    constructor(title) {
        this._title = title;
        this._checkedOut = false;
        this._rating = [];
    }

    get title() {
        return this._title;
    }

    get checkedOut() {
        return this._checkedOut;
    }

    get rating() {
        return this._rating;
    }

    getAverageRating() {
        return this._rating.reduce((a, b) => a + b);
    }

    toggleCheckOutStatus() {
        this._checkedOut = !this._checkedOut;
        return this._checkedOut;
    }

    addRating(rat) {
        this._rating.push(rat);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
}