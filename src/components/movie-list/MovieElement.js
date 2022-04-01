import React, { Component } from 'react';

class MovieElement extends Component {
    render() {
        return (
            <div className='w-25 border p-4'>
                <div className="card">
                    <img src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" className="card-img-top" alt='Affiche du film gladiator'/>
                    <div className="card-body">
                        <h5 className="card-title">Gladiator</h5>
                        <p className="card-text">Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;