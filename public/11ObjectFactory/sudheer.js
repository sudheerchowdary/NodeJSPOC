/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
var movies = require('./movies');

var sudheerMovies = movies();
sudheerMovies.favMovie = "The Note Book";
console.log("Sudheer favorite movie: " + sudheerMovies.favMovie);