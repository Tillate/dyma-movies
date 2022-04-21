import React, { Component } from 'react';
import { Header } from './components';
import Films from './features/films';
import Favoris from './features/favoris';
import apiMovie, { apiMovieMap } from './conf/api.movie';
import { Route, Router, Routes } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: []
    }
}

  //Fonction selection movie
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then( response => response.data.results )
      .then( moviesApi => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch( err => console.log(err));
  }
  
  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  addFavoris = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find( m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    })
    
  }
  removeFavoris = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex( f => f.title === title);
    favoris.splice(index, 1);
    this.setState({
      favoris
    })

  }

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Routes>
            <Route path="/films" element={ <Films /> } render={ (props) => { 
              return (
                <Films
                  { ...props } 
                  loaded={ this.state.loaded }
                  updateMovies={ this.updateSelectedMovie }
                  updateSelectedMovie={ this.updateSelectedMovie }
                  movies={ this.state.movies }
                  selectedMovie={ this.state.selectedMovie }
                  addFavoris={ this.addFavoris }
                  removeFavoris={ this.removeFavoris }
                  favoris= { this.state.favoris.map( f => f.title ) }
                />
              )
            }}/>
            <Route path="/favoris" element={ <Favoris /> }/>
          </Routes>
          
        </div>
      </Router>
    )
  }
}


