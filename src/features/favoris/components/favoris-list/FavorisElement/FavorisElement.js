import React, { Component } from 'react';
import Style from './FavorisElement.module.scss';

export default class FavorisElement extends Component {


    render() {
        return (
                <div className={ "d-flex flex-row bg-light " + Style.container }>
                    <img width="150" height="200" src={ this.props.favoris.img } alt='Affiche du film gladiator'/>
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{ this.props.favoris.title }</h5>
                        <hr className="w-100" />
                        <p className='flex-fill'>{ this.props.favoris.details }</p>
                        <div className="d-flex flex-row justify-content-end">
                        <button onClick={ () => { this.props.removeFavoris(this.props.favoris.title) }} className='btn btn-small btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
        );
    }
}
