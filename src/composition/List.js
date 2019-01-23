import React from 'react';
import CardClass from './Card.js';
import './style.css';


//This whill display an array of list items passed as a prop.
class ListClass extends React.Component {
    static defaultProps = {
        listHeader: 'List Header',
        cards: [
            <CardClass cardHeader='Card Header' cardContent='Lorem Ipsum'/>,
            <CardClass cardHeader='Card Header' cardContent='Lorem Ipsum'/>,
            <CardClass cardHeader='Card Header' cardContent='Lorem Ipsum'/>,
            <CardClass cardHeader='Card Header' cardContent='Lorem Ipsum'/>
        ]
    }

    render () {
        return (
            <div className='List'>
                <header className='List-header'>
                    <h2>{this.props.listHeader}</h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards}
                </div>
            </div>
        )
    }
}

export default ListClass;