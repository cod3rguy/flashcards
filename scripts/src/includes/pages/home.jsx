import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    render(){
        return (
            <main>
                <div className='row lead'>
                    <ul>
                        <li>Example list item 1</li>
                        <li>Example list item 2</li>
                        <li> 
                            <Link to={'/create'}><i className="glyphicon glyphicon-plus"></i> New item</Link>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

