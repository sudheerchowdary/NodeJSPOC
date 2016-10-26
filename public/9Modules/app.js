/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
//----- Modules -----------------------------------
//One way
var movies = require('./movies');
movies.avatar();


//Another way
var music = require('./music');
console.log(music.favMovie);
music.playRockOn();
music.playRockStar();