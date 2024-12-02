import React from 'react'
import "./MovieList.css";
import movies from './movies';
const MovieList = () => {
  return (
    <div className='movie-list'>
     {movies.map((movie) => (
      <div key={movie.id} className='movie-card'>
        <img src={movie.image} className='movie-img'/>
        <h1>Title:{movie.title}</h1>
        <h1>Language:{movie.language}</h1>
        <h1>Cost:{movie.cost}</h1>
      </div>
     ))}
    </div>
  )
}

export default MovieList;
