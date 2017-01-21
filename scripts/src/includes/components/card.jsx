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
                value={ this.card.question ? this.card.question.value : this.props.question || "" }
                ref={(question) => this.card.question = question} onChange={() => {this.props.handleValue(this.props.cardNo,'question',this.card.question.value)}} />
                <br />
                <input type="text" className="form-control input-lg" placeholder="Answer" 
                value={ this.card.answer ? this.card.answer.value : this.props.answer || ""}
                ref={(answer) => this.card.answer = answer} onChange={() => {this.props.handleValue(this.props.cardNo,'answer',this.card.answer.value)}} />
            </div>
        );
    }
}