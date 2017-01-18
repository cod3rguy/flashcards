import React from 'react';
import ReactDOM from 'react-dom';

export default class HomePage extends React.Component {
    render(){
        return (
            <main>
                <div class='row lead'>
                    <ul>
                        <li>Example list item 1</li>
                        <li>Example list item 2</li>
                        <li> 
                            <a href><i class="glyphicon glyphicon-plus"></i> New item</a>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

