import React from 'react'

const Movies = (props) => {
    return (
      <div>
        <h2>Title:{props.movieData.Title}</h2>
        <h2>Year:{props.movieData.Year}</h2>
        <img src={props.movieData.Poster} alt="poster"/>
      </div>
    );
}

export default Movies
