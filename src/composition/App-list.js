import React from 'react';
import ListClass from './List.js';
import CardClass from './Card.js';

class AppListClass extends React.Component {
    render () {
        return (
            <div className='App-list'>
                {this.generateLists()}
            </div>
        )
    }

    generateLists() {
        return(
            this.props.store.lists.map(list => this.generateList(list))
        )
    }

    generateList(list) {
        let cards = list.cardIds.map((key, i) => {
            return <CardClass key={i} cardHeader={this.props.store.allCards[key].title} cardContent={this.props.store.allCards[key].content}/>
        })

        return <ListClass listHeader={list.header} cards={cards} />
    }
}
export default AppListClass;