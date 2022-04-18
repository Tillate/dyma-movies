import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading } from './components';
import dataMovies from './data';
import apiMovie from './conf/api.movie';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }

    setTimeout( () => {
      this.setState({
      movies: dataMovies,
      loaded: true
    })
  }, 500);
}

  //Fonction selection movie
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
            .then( response => console.log(response))
            .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        { this.state.loaded ? (
          <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <MovieList movies={ this.state.movies } updateSelectedMovie= { this.updateSelectedMovie }/>
          <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
        </div>
        ) : (
          <Loading />
        )}
        
      </div>
    )
  }
}


