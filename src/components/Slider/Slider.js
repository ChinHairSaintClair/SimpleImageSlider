import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Slider.css';
import SliderContent from '../SliderContent/SliderContent';
import NavButton from '../NavButton/NavButton';
import IndicatorItems from '../IndicatorItems/IndicatorItems';
import Aux from '../../hoc/Aux/Aux';

const Slider = (props) => {
    const [photoItems, setPhotoItems] = useState([]);
    const [index, setIndex] = useState(0);

    const getPhotoData = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
            console.log(response);
            const photoEntries = response.data.slice(0, 5);
            console.log(photoEntries);

            setPhotoItems(photoEntries);
        })
            .catch(error => {
                console.log("Oh no");
            });
    }

    useEffect(() => {
        getPhotoData();
    }, []); // Pass in empty array - that way it will only request on load

    const previous = () => {
        let idx = index - 1;
        if (idx < 0) {
            idx = (photoItems.length - 1);
        }

        setIndex(idx);
    }

    const next = () => {
        let idx = index + 1;
        if (idx > (photoItems.length - 1)) {
            idx = 0;
        }

        setIndex(idx);
    }

    //const curPhotoItem = photoItems[index];
    //const item = curPhotoItem != null ? <img key={curPhotoItem.id} src={curPhotoItem.url} alt={curPhotoItem.title} /> : <p>Loading...</p>;

    return (
        <Aux>
            <div className='Slider'>
                <SliderContent items={photoItems} index={index} />
                <NavButton position='Left' click={previous} />
                <NavButton position='Right' click={next} />
            </div>
            <div style={{ position: 'relative', bottom: 40 }}>
                <IndicatorItems  itemCount={photoItems.length} index={index} />
            </div>
        </Aux>
    );
}

export default Slider;