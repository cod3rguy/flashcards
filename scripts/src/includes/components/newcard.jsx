import React from 'react';

export default class NewCard extends React.Component {
    constructor(){
        super();

        this.card = {
            'question': '',
            'answer': ''
        };
    }
    render(){
        return (
            <div>
                <hr />
                <label>Card #{this.props.cardNo}</label>
                <input type="text" className="form-control input-lg" placeholder="Question" 
                ref={(question) => this.card.question = question} onChange={() => {this.props.handleValue(this.props.cardNo,'question',this.card.question.value)}} />
                <br />
                <input type="text" className="form-control input-lg" placeholder="Answer" 
                ref={(answer) => this.card.answer = answer} onChange={() => {this.props.handleValue(this.props.cardNo,'answer',this.card.answer.value)}} />
            </div>
        );
    }
}