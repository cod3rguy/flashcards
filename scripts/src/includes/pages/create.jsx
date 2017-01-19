import React from 'react';
import Card from '../components/newcard.jsx';

export default class CreatePage extends React.Component {
    constructor(){
        super();

        this.state = {
            'cards': [{}]
        };

        this._addCard = this._addCard.bind(this);
    }
    render(){
        return (
            <main>
                <div className='row'>
                    <div className="col-md-10 col-md-offset-1">
                        <form>
                            <label>Deck Name</label>
                            <input type="text" className="form-control input-lg" placeholder="English Vocab Deck 20" />
                            {this.state.cards.map((card,cardNo) => <Card cardNo={cardNo + 1} key={cardNo}/>)}
                        </form>
                        <hr />
                        <button type="button" className="btn btn-success" onClick={this._addCard}>
                            <i className="glyphicon glyphicon-plus"></i> New card
                        </button>
                        <button type="submit" className="btn btn-primary pull-right">
                            <i className="glyphicon glyphicon-hdd"></i> Save Deck
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    _addCard(){
        let cards = this.state.cards.concat({});
        this.setState({cards: cards});
    }

}