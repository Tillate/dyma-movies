import React, { Component } from 'react';
import FavorisElement from './FavorisElement/FavorisElement';

export default class FavorisList extends Component {
    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-lg-start'>
                { this.props.favoriss.map((f, index) => (
                    <FavorisElement 
                        key={ f.title + index } 
                        favoris={ f } 
                        removeFavoris={ this.props.removeFavoris }
                    />
                ))}        
            </div>
        );
    }
}
