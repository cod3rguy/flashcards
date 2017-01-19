import React from 'react';

export default class HomePage extends React.Component {
    render(){
        return (
            <main>
                <div className='row lead'>
                    <ul>
                        <li>Example list item 1</li>
                        <li>Example list item 2</li>
                        <li> 
                            <a href><i className="glyphicon glyphicon-plus"></i> New item</a>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

