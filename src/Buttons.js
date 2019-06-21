import React from 'react';
import style from './style';
import Heading from './Heading';


const Buttons = ({onClick}) => {
    return (
        <div className="btn-div">
            <button onClick={onClick}>Add Now</button>
        </div>
    )
}

export default Buttons;