import React from 'react';

export default class NewCard extends React.Component {
    constructor(){
        super();

        this.card = {};
    }
    render(){
        return (
            <div>
                <hr />
                <label>Card #{this.props.cardNo}</label>
                <input type="text" className="form-control input-lg" placeholder="Question" 
                ref={(question) => this.card.question = question} />
                <br />
                <input type="text" className="form-control input-lg" placeholder="Answer" 
                ref={(answer) => this.card.answer = answer} />
            </div>
        );
    }
}