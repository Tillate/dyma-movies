import React, { Component } from 'react';
import MovieElement from './MovieElement';

class MovieList extends Component {
    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-lg-start'>
               <MovieElement/>
               <MovieElement/>
               <MovieElement/>
               <MovieElement/>
               <MovieElement/>
               <MovieElement/>
             
            </div>
        );
    }
}

export default MovieList;