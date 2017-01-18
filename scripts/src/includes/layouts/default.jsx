import React from 'react';
import ReactDOM from 'react-dom';

export default class DefaultLayout extends React.Component {
    render(){
        return (
            <div>
                <header className="page-header">
                    <h1>Flashcards</h1>
                </header>
                {this.props.children}
            </div>
        );
    }
}