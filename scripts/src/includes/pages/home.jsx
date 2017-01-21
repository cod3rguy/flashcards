import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    render(){

        return (
            <main>
                <div className='row lead'>
                    <ul className="deckList">
                        { 
                            Object.keys(localStorage).map( (e,i) => <li key={i}> <i className="glyphicon glyphicon-chevron-right"></i> {e}</li> ) 
                        }
                        <li> 
                            <Link to={'/create'}><i className="glyphicon glyphicon-plus"></i> New Deck</Link>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

