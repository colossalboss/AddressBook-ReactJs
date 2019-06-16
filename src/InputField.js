import React from 'react';
import style from './style';

const InputField = ({label, type, name}) => (
    <div>
        <label style={style.label}>
            {label}
            <input style={style.input} type={type}
                name={name} />
        </label>
    </div>
);

export default InputField;