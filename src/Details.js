import React from 'react';

const Details = ({id, onClick}) => {    
    return (
        <div>
            <button onClick={onClick}>Saved Contacts</button>
            <div id={id}></div>
        </div>
    )
}

export default Details;