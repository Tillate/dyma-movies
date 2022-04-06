import React, { Component } from 'react';
import { Header, MovieList, MovieDetails } from './components';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        title: 'The Godfather',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyO8trmFbGTJIY6MaIFqzfPB6hW8UFCAYxTqtdKWGz7EJ6Jt-d',
        details: 'R | 175 min | Crime, Drama',
        description: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker."
      }, {
        title: 'Harry Potter et le prince de sang mêlé',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allocine.fr%2Ffilm%2Ffichefilm-116305%2Fdvd-blu-ray%2F%3Fcproduct%3D4154296&psig=AOvVaw21RzZBafIZxluwoABKUT54&ust=1649346175199000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjG37nj__YCFQAAAAAdAAAAABAD',
        details: 'R | 210 min | Fantastique, Drama',
        description: "Cette sixième année scolaire de Harry Potter à l'école de sorciers commence par une dispute avec son ennemi juré Draco Malfoy, en qui les forces des ténèbres placent désormais leurs espoirs.."
      }, {
        title: 'Le Seigneur des anneaux',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinoche.com%2Ffilms%2Fle-seigneur-des-anneaux-la-communaute-de-l-anneau&psig=AOvVaw3X5Fcq7lJfvigsw2ro8BLC&ust=1649346337910000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjWj4bk__YCFQAAAAAdAAAAABAP',
        details: 'R | 190 min | Aventure, Fantastique',
        description: "Un jeune et timide `Hobbit', Frodon Sacquet, hérite d'un anneau magique. Bien loin d'être une simple babiole, il s'agit d'un instrument de pouvoir absolu qui permettrait à Sauron."
      }, {
        title: 'Sherlock Holmes',
        img: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.filmaffinity.com%2Fus%2Fmovieimage.php%3FimageId%3D791510663&psig=AOvVaw2v8UZbBBqGauNV-MoFJWje&ust=1649346429709000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDW-7Hk__YCFQAAAAAdAAAAABAI',
        details: 'R | 220 min | Crime, Policier',
        description: "Quand le prince autrichien est retrouvé mort, on pense à un suicide. Or le détective Sherlock Holmes pense qu'il a été assassiné et que le crime est une des pièces du puzzle conçu par le professeur Moriarty."
      }],
      selectedMovie: 0,
    }
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        
        <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <MovieList />
          <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
        </div>
      </div>
    )
  }
}


