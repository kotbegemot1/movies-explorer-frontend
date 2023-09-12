function handleFilterAllMovies(queryWord, movies) {
  return movies.filter((movie) => (
    movie.nameEN.toLowerCase().includes(queryWord.trim().toLowerCase())
    ||
    movie.nameRU.toLowerCase().includes(queryWord.trim().toLowerCase())
  )
  )
}

function handleShortMovies(movies) {
  return movies.filter(movie => movie.duration <= 40)
}

module.exports = {
  handleFilterAllMovies,
  handleShortMovies
}