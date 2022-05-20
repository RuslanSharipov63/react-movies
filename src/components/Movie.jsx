import React from 'react';


const Movie = (props) => {

    const { Title: title, Year: year, Imdb: id, Type, Poster } = props;

    return (
        <div id={id} className="card movies">
            <div className="card-image waves-effect waves-block waves-light">

                {
                    Poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} /> :
                        <img className="activator" src={Poster} />
                }


            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{Type}</span></p>
            </div>
        </div>
    );
}

export default Movie;