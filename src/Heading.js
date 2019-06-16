import React from 'react';
import Form from './Form';
import style from './style';


class Heading extends React.Component {
    state = {
        value: '',
    };

    getValue = event => {
        this.setState({
            value: event.target.textContent,
        });
        document.querySelector('.form-div').classList.toggle('hide');
    }

    render() {
        return (
            <div>
                <div>
                    <h1 style={style.heading}>Address Book</h1>
                </div>
                <div><button style={style.btn} onClick={this.getValue}>+ Add</button></div>

                <Form />
            </div>
        );
    }
}

export default Heading;