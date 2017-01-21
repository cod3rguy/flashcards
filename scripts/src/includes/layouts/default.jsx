import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class DefaultLayout extends React.Component {
    render(){
        return (
            <div>
                <header className="page-header">
                    <h1>
                        {
                            this.props.location.pathname != "/home" && <Link to="/home">../ </Link>
                        }
                        Flashcards
                    </h1>
                </header>
                {this.props.children}
            </div>
        );
    }
}