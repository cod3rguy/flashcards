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

        this.state.card = this.state.deck.cards[1];

        this._showAns = this._showAns.bind(this);

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
                                    <button type="button" className="btn btn-success">
                                        <i className="glyphicon glyphicon-ok"></i> I Know
                                    </button>
                                    <button type="button" className="btn btn-danger">
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

}