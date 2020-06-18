import React from 'react';
import InfoCard from './InfoCard';

class CardList extends React.Component {
    render() {   
        let {noResult, searchRes} = this.props;

        const CardComponent = searchRes.map((cardItem,i) => {
            return <InfoCard key={i} data={searchRes[i]} />
        })

        const nores = () => {
        if(noResult===true) {return <h5 className="text-center">No results! Kindly revise your search term.</h5> }
            else {return <div></div> }
        }

        return (
            <div>
                <hr></hr>
                {nores()}
                {CardComponent}
            </div>
        );
    }
}

export default CardList;