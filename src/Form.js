import React from 'react';
import InputField from './InputField';
import Buttons from './Buttons';
import style from './style';


const Form = ({onChange, onClick}) => {
    return (
        <div className="form-div" style={style.display}>
            <InputField label="NAME:" 
                name="name"
                type="text"
                id="name"
                onChange={onChange} />

            <InputField label="EMAIL:" 
                name="email"
                type="email"
                id="email"
                onChange={onChange} />

            <InputField label="PHONE:" 
                name="phone"
                type="number"
                id="phone"
                onChange={onChange} />

            <Buttons onClick={onClick} />

        </div>
    )
}

export default Form;