import React, { Component } from 'react';
import MovieElement from './MovieElement/MovieElement';

class MovieList extends Component {
    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-lg-start'>
                { this.props.movies.map((m, index) => (
                    <MovieElement 
                        key={ m.title + index } 
                        movie={ m } 
                        isFavoris={ this.props.favoris.includes(m.title) }
                        addFavoris={ this.props.addFavoris }
                        removeFavoris={ this.props.removeFavoris }
                        updateSelectedMovie={ () => {this.props.updateSelectedMovie(index) }}
                    />
                ))}        
            </div>
        );
    }
}

export default MovieList;