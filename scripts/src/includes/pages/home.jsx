import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    render(){

        return (
            <main>
                <div className='row lead'>
                    <ul className="deckList">
                        { 
                            JSON.parse(localStorage.decks).map( deck => <li key={deck.deckID}> <i className="glyphicon glyphicon-chevron-right"></i> {deck.deckName}</li> ) 
                        }
                        <li> 
                            <Link to={'/create'}><i className="glyphicon glyphicon-plus"></i> New Deck</Link>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

