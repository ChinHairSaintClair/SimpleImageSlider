import React from 'react';
import './SliderContent.css';

import Slide from '../Slide/Slide';

const SliderContent = props => {
    return (
        /*<ul class="flex-container">
            <li class="flex-item"></li>
            <li class="flex-item"></li>
            <li class="flex-item"></li>
            <li class="flex-item"></li>
        </ul>*/

        <ul className='SliderContent'>
            {
                props.items.map((item, index) => {
                    const flexGrow = props.index === index ? 1 : 0;
                    return <Slide key={item.id} imgSrc={item.url} alt={item.title} flexGrow={flexGrow}/>
                })
            }
        </ul>

        /*<div className='SliderContent'>
            {
                props.items.map((item, index) => {
                    const flexGrow = props.index === index ? 1 : 0;
                    return <Slide key={item.id} imgSrc={item.url} alt={item.title} flexGrow={flexGrow}/>
                })
            }
        </div>*/
    );
}

export default SliderContent;