import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieCard() {
  const { id } = useParams(); // Get the movie ID from URL parameter

  const [movie, setMovie] = useState(null); // State to store movie data

  useEffect(() => {
    // Fetch movie data based on the ID
    fetch(`https://api.example.com/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]); // Fetch movie data whenever the ID changes

  if (!movie) {
    return <p>Loading...</p>; // Render loading state while fetching data
  }

  return (
    <article>
      <h1>{movie.title}</h1> {/* Render movie title */}
      <p>Time: {movie.time}</p> {/* Render movie time */}
      <div>
        {/* Render each genre */}
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </article>
  );
}

export default MovieCard;
