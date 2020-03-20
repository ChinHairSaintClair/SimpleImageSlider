import React from 'react';
import './NavButton.css';
import rightIcon from '../../assets/images/right.png';
import leftIcon from '../../assets/images/left.png';

const NavButton = props => {
    const classNames = ['NavButton', props.position];

    const icon = props.position === 'Right' ? rightIcon : leftIcon;

    return (
        <div className={classNames.join(' ')} onClick={props.click}>
            <div className='InnerContainer'>
                <img className='Img' src={icon} alt={props.position} />
            </div>
        </div>
    );
}

export default NavButton;