import React from 'react';
import InputField from './InputField';
import Buttons from './Buttons';
import style from './style';


const Form = ({onChange, onClick}) => {
    return (
        <div className="form-div" style={style.display}>
            <form>
                <InputField label="NAME:" 
                    name="name"
                    type="text"
                    id="name"
                    onChange={onChange}
                    error="name-error" />

                <InputField label="EMAIL:" 
                    name="email"
                    type="email"
                    id="email"
                    onChange={onChange}
                    error="email-error" />

                <InputField label="PHONE:" 
                    name="phone"
                    type="number"
                    id="phone"
                    onChange={onChange}
                    error="phone-error" />

                <Buttons onClick={onClick} />
            </form>

        </div>
    )
}

export default Form;