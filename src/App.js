import React from 'react';
import { Header, MovieList, MovieDetails } from './components';



export default function App() {
  return (
    <div className='App'>
        <Header />
        
        <div className='d-flex flex-row'>
          <MovieList />
          <MovieDetails />
        </div>
    </div>
  )
}


