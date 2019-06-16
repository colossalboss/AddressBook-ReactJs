import React from 'react';
import style from './style';


class Buttons extends React.Component  {
    render() {
        return (
            <div className="btn-area">
                <div className="btn-div">
                    <button>Add now</button>
                </div>
                <div className="btn-div">
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
};

export default Buttons;