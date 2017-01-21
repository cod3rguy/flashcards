import React from 'react';
import Card from '../components/card.jsx';

export default class EditDeck extends React.Component {
    constructor(props){
        super(props);

        let params = this.props.params;
        this._deck = JSON.parse(localStorage.decks).filter(deck => deck.deckID === Number(params.deckID))[0];
        
        this.state = {
            'dupDeck': false,
            'cards': this._deck.cards
        };

        this._deckNames = JSON.parse(localStorage.decks).map(e => e.deckName);
        this._addCard = this._addCard.bind(this);
        this._handleValue = this._handleValue.bind(this);
        this._saveDeck = this._saveDeck.bind(this);
        this._chkDeckName = this._chkDeckName.bind(this);
    }

    componentWillReceiveProps(newProps){
        if(newProps.params.deckID !== this._deck.deckID && newProps.params.deckID <= JSON.parse(localStorage.decks).length) location.reload();
    }

    render(){
        return (
            <main className="editDeck">
                <div className='row'>
                    <div className="col-md-10 col-md-offset-1">
                        <form onSubmit={this._saveDeck}>
                            <label>Deck Name</label>
                            <input type="text" className="form-control input-lg" placeholder="English Vocab Deck 20" required
                            ref={(deckName) => this.deckName = deckName} onChange={this._chkDeckName}
                            value={ this.deckName ? this.deckName.value : this._deck.deckName } />
                            {
                                this.state.dupDeck &&
                                <div className="alert alert-danger dupDeckAlert">Deck with this name already exists!</div>
                            }
                            {
                                this.state.cards.map((card,cardNo) => <Card cardNo={cardNo + 1} key={`${this._deck.deckID}${cardNo}`} handleValue={this._handleValue}
                                question={card.question} answer={card.answer}/>)
                            }
                            <hr />
                            <button type="button" className="btn btn-success" onClick={this._addCard}>
                                <i className="glyphicon glyphicon-plus"></i> New card
                            </button>
                            <button type="submit" className="btn btn-primary pull-right">
                                <i className="glyphicon glyphicon-hdd"></i> Save Deck
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    _addCard(){
        let cards = this.state.cards.concat({});
        this.setState({cards: cards});
    }
    
    _chkDeckName(){
        
        if(this.deckName.value !== this._deck.deckName && this._deckNames.find(e => e == this.deckName.value)) {
            this.setState({dupDeck: true});
        } else {
            this.setState({dupDeck: false});
        }
    }

    _saveDeck(e){
        e.preventDefault();
        if(!this.state.dupDeck) {
            let cards = this.state.cards.filter(e => e.question);
            let decks = JSON.parse(localStorage.decks);
            for (let deck of decks) {
                if(Number(deck.deckID) == Number(this._deck.deckID)) {
                    deck.deckName = this.deckName.value;
                    deck.cards = cards;
                }
            }
            localStorage.decks = JSON.stringify(decks);
            alert("Deck Saved!");
        }
    }
    
    _handleValue(cardNo, valType, val){
        let cards = this.state.cards.slice();
        cards[cardNo-1][valType] = val;
        this.setState({cards: cards});
    }

}