import React from 'react';


const List = ({name, email, phone}) => {
    return (
        <div>
            <ol id="list">
                <li>{name}</li>
                <li>{email}</li>
                <li>{phone}</li>
            </ol>
        </div>
    );
}

export default List;