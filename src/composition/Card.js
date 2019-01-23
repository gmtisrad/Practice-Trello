import React from 'react';
import './style.css';

//This will render a card using the header and description props
class CardClass extends React.Component {
    render () {
        return (
            <div className='Card'>
                <h3>{this.props.cardHeader}</h3>
                <p>{this.props.cardContent}</p>
            </div>
        ); 
    }
}

export default CardClass;