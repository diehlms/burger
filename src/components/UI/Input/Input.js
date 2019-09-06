import React from 'react';
import './Input.css';

export default function Input(props) {
    let inputElement = null;
    const inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid')
    }

    switch (props.elementType) {
        case('input'):
            inputElement = (<input 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed} 
                value={props.value} />)
            break;
        case('textarea'):
            inputElement = (<textarea 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value} />)
            break;
        case('select'):
            inputElement = (<select 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option 
                            key={option.value} 
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>)
            break;
        default:
            inputElement = <input 
                className={inputClasses.join('')}
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value} />
    }

    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    )
}
