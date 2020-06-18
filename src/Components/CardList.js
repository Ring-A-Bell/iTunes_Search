import React from 'react';
import InfoCard from './InfoCard';

const CardList = ({searchRes, noResult}) => {
    
    const CardComponent = searchRes.map((cardItem,i) => {
        return <InfoCard key={i} data={searchRes[i]} />
    })
    
    function EmptyMessage(nores) {
        if(nores===true) {
            return (
                <h2>true</h2>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    return (
        <div>
            <EmptyMessage noResult={noResult}/>
            <hr></hr>
            {CardComponent}
        </div>
    );
}

export default CardList;