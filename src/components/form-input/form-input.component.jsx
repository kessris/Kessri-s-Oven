import React from 'react';
import './form-input.styles.scss';

// Whenever a user has typed anything, the className will be appended from just 'form-input-label'
// to 'shrink form-input-label'


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label?
                (<label className={`${otherProps.value.length? 'shrink':''} form-input-label`}>
                    {label}
                </label>) : null
        }
    </div>
);

export default FormInput;
