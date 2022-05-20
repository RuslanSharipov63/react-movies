import React from 'react';
import Movie from './Movie';

const CardsMovies = (props) => {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? movies.map(movie => { return <Movie key={movie.ImdbID} {...movie} /> })
                : <h4>Nothing found</h4>
            }

        </div>
    );

}

export default CardsMovies;