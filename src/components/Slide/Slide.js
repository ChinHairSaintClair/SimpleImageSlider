import React from 'react';
import './Slide.css';

const Slide = props => {
    return (
        <li className='Slide' style={{flexGrow: props.flexGrow, backgroundImage: 'url('+props.imgSrc+')'}}/>

        /*<div className='Slide' style={{flexGrow: props.flexGrow}}>
            <img src={props.imgSrc} alt={props.alt}/>
        </div>*/
    );
}

export default Slide;