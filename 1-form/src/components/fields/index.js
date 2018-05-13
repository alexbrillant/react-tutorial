import React from 'react';
import ReactJson from 'react-json-view'
import {Field} from 'redux-form'

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option />
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
            <ReactJson src={props}/>
        </div>
    )
}

export const customInput = props => {
    const { label, input, type, meta, autoFocus } = props;
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} autoFocus={autoFocus} />
            {(meta.error && meta.touched && !meta.active) && (
                <div style={{color:'red'}}>{meta.error}</div>
            )}
            <ReactJson src={props}/>
        </div>
    )
}

export const discounts = ({fields}) => (
    <div>
        {fields.map((code, index) => (
            <div key={index}>
                <Field
                    name={code}
                    type="text"
                    component={customInput}
                    label={`Discount code #${index + 1}`}
                    autoFocus/>

                <button type="button" onClick={() => fields.remove(index)}>
                  &times; 
                </button>
            </div>
        ))}
        <button type="button" onClick={() => fields.push()}>
            Add {!fields.length ? 'Discount code(s)' : 'Another'}
        </button>
    </div>

)