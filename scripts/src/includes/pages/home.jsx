import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    constructor(){
        super();

        this._editDeck = this._editDeck.bind(this);
    }

    render(){

        return (
            <main>
                <div className='row lead'>
                    <ul className="deckList">
                        { 
                            JSON.parse(localStorage.decks).map( deck => <li key={deck.deckID}> <i className="glyphicon glyphicon-chevron-right"></i> 
                            <Link to={`/deck/${deck.deckID}`}>{deck.deckName}</Link>
                            <button type="button" className="btn btn-xs btn-info" onClick={this._editDeck(deck.deckID)}><i className="glyphicon glyphicon-pencil"></i> Edit</button>
                            </li> ) 
                        }
                        <li> 
                            <Link to={'/create'}><i className="glyphicon glyphicon-plus"></i> New Deck</Link>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }

    _editDeck(deckID){
        return () => {
            this.props.router.push(`/edit/${deckID}`);
        };
    }

}

