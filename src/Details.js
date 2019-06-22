import React from 'react';

const Details = ({id, onClick}) => {    
    return (
        <div>
            <a href="" className="link" onClick={onClick}>Saved Contacts</a>
            <div id={id}></div>
        </div>
    )
}

export default Details;