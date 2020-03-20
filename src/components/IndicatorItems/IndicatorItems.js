import React from 'react';
import './IndicatorItems.css';
import IndicatorItem from '../IndicatorItem/IndicatorItem';

const IndicatorItems = props => {
    const selectedIndex = props.index;
    const length = props.itemCount;
    let data = [];

    for(let i = 0; i < length; i++) {
        data.push("");
    }

    return (
        <div className='IndicatorItems'>
            {data.map((_, i) => {
                return <IndicatorItem key={i} isSelected={i === selectedIndex}/>
            })}
        </div>
    );
}

export default IndicatorItems;