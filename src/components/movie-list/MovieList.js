import React, { Component } from 'react';
import MovieElement from './MovieElement/MovieElement';

class MovieList extends Component {
    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-lg-start'>
                { this.props.movies.map((m, index) => (
                    <MovieElement key={ m.title + index } movie={ m } updateSelectedMovie={ () => {this.props.updateSelectedMovie(index) }}/>

                ))}
               
               
             
            </div>
        );
    }
}

export default MovieList;