let numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let movies = prompt("Один из последних просмотренных фильмов?", "");
let rp = +prompt("На сколько оцените его?", "");
let personalMovieDB = {
count: numbersOfFilms,
movies: {
 rating: rp
},
actors: {},
genres: [],
privat: false
};
console.log(personalMovieDB);

