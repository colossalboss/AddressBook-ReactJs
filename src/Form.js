import React from 'react';
import InputField from './InputField';
import Buttons from './Buttons';
import style from './style';


const Form = () => {
    return (
        <div className="form-div" style={style.display}>
            <InputField label="Name"
                    type="text"
                    name="name" />

            <InputField label="Email"
                    type="email"
                    name="Email" />

            <InputField label="Phone"
                    type="number"
                    name="phone" />

            <Buttons />
        </div>
    )
}

export default Form;