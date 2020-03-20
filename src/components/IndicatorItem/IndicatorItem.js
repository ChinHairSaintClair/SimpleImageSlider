import React from 'react';
import './IndicatorItem.css';

const IndicatorItem = props => {
    const classNames = ['IndicatorItem', props.isSelected ? 'Active' : ''];

    return (
        <div className={classNames.join(' ')}>
            
        </div>
    );
}

export default IndicatorItem;