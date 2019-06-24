import React from 'react';
import style from './style';

const InputField = ({name, label, type, id, onChange, error}) => (
    <div>
        <label style={style.label}>
            {label}
            <input style={style.input} type={type}
                name={name}
                id={name}
                onChange={onChange}
                required />
        </label>
        <p id={error}></p>
    </div>
);

export default InputField;