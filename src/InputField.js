import React from 'react';
import style from './style';

const InputField = ({name, label, type, id, onChange}) => (
    <div>
        <label style={style.label}>
            {label}
            <input style={style.input} type={type}
                name={name}
                id={name}
                onChange={onChange} />
        </label>
    </div>
);

export default InputField;