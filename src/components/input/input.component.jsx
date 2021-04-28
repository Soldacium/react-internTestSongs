import React from 'react'
import './input.styles.scss'

const Input = ({handleChange, label, ...otherProps}) => {
    return(
        <div className='input-box'>
            <input 
            {...otherProps}
            className="input-field" 
            onChange={handleChange}/>
            {
                label ? (<label className='input-label'>
                    {label}
                </label>) : null
            }
        </div>
    )
}

export default Input;