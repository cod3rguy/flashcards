import React from 'react';
import Card from '../components/card.jsx';

export default class ShowDeck extends React.Component {
    constructor(props){
        super(props);

        let params = this.props.params;
        
        this.state = {
            'hideAns' : true,
            'deck' : JSON.parse(localStorage.decks).filter(deck => deck.deckID === Number(params.deckID))[0],
        };

        this._showAns = this._showAns.bind(this);
        this._getCard = this._getCard.bind(this);
        this._nextQ = this._nextQ.bind(this);
        this._nextQUp = this._nextQUp.bind(this);
        this._nextQDown = this._nextQDown.bind(this);

        this.state.card = this._getCard();

    }

    componentWillReceiveProps(newProps){
        if(newProps.params.deckID !== this._deck.deckID && newProps.params.deckID <= JSON.parse(localStorage.decks).length) location.reload();
    }

    render(){
        return (
            <main className="showDeck">
                <div className='row'>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <strong>
                                    {this.state.hideAns && "Question"}
                                    {!this.state.hideAns && "Answer"}
                                </strong>
                            </div>
                            <div className="panel-body">
                                <p>
                                    {this.state.hideAns && this.state.card.question}
                                    {!this.state.hideAns && this.state.card.answer}
                                </p>
                            </div>
                        </div>
                        <div className="pull-right actionPanel">
                            {
                                this.state.hideAns &&
                                <button type="button" className="btn btn-info" onClick={this._showAns}>
                                    <i className="glyphicon glyphicon-eye-open"></i> Show Answer
                                </button>
                            }
                            {
                                !this.state.hideAns &&
                                <span>
                                    <button type="button" className="btn btn-success" onClick={this._nextQUp}>
                                        <i className="glyphicon glyphicon-ok"></i> I Know
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={this._nextQDown}>
                                        <i className="glyphicon glyphicon-remove"></i> I Don't Know
                                    </button>
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    _showAns(){
        this.setState({hideAns: false});
    }

    _getCard(){
        let cardSet = Array(...this.state.deck.cards.map((e,i) => { return {'order':i, 'chance':e.learned}; }));
        cardSet = cardSet.map(e => {
            let max = 100/e.chance;
            e.chance = getRandom(1,max);
            return e;
        }).sort((a,b) => b.chance - a.chance);
        return this.state.deck.cards[cardSet[0].order];
    }

    _nextQ(type){
        let deckUpdate = this.state.deck;
        deckUpdate.cards = this.state.deck.cards.map(e => {
            if (e.question === this.state.card.question && e.answer === this.state.card.answer) {
                if(type === 1) e.learned = e.learned < 5 ? e.learned + 1 : 5;
                else e.learned = e.learned > 1 ? e.learned - 1 : 1;
            }
            return e;
        });
        console.log(this.state.deck, deckUpdate);
        let decks = JSON.parse(localStorage.decks);
        for (let deck of decks) {
            if(Number(deck.deckID) === Number(this.state.deck.deckID)) {
                deck.cards = deckUpdate.cards;
            }
        }
        localStorage.decks = JSON.stringify(decks);
        this.setState({
            hideAns: true,
            deck: deckUpdate,
            card: this._getCard()
        });
    }

    _nextQUp(){
        this._nextQ(1);
    }

    _nextQDown(){
        this._nextQ(0);
    }

}

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}