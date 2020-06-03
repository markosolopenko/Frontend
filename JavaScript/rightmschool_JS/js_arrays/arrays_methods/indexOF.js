var moviesIKnow = [
    "Wayne's World",
    "The Matrix",
    "Anchorman",
    "Bridesmaids"
];

var yourFavoriteMovie = prompt("What's your favorite movie?");
if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {
    alert("Oh, cool, I've heard of " + yourFavoriteMovie + "!");
} else {
    alert("I haven't heard of " + yourFavoriteMovie + ". I'll check it out.");
}