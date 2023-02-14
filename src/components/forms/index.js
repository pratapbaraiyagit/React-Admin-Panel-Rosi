import React from 'react';
import { Field } from 'react-final-form';
import Select from "react-select";
import NumberFormat from 'react-number-format';

export const renderField = ({
    input,
    type,
    placeholder,
    className,
    inputclass,
    readOnly,
    meta: {
        touched,
        error,
    }
}) => (
    <>
        <div className={className}>
            <input type={type} {...input} readOnly={readOnly} className={inputclass} placeholder={placeholder} />
            <div className="input-error">
                {(touched && error) && <span className="mb-0 text-danger" >{error}</span>}
            </div>
        </div>
    </>
)

export const renderNumberField = ({
    input,
    type,
    placeholder,
    formatStyle ,
    className,
    inputclass,
    readOnly,
    meta: {
        touched,
        error,
    }
}) => (
    <>
        <div className={className}>
            {/* <input t1ype={type} {...input} readOnly={readOnly} className={inputclass} placeholder={placeholder} /> */}
            <NumberFormat {...input} format={formatStyle} className={inputclass} placeholder={placeholder} />
            <div className="input-error">
                {(touched && error) && <span className="mb-0 text-danger" >{error}</span>}
            </div>
        </div>
    </>
)

export const rendertextarea = ({
    input,
    type,
    placeholder,
    className,
    inputclass,
    readOnly,
    meta: {
        touched,
        error,
    }
}) => (
    <>
        <div className={className}>
            <textarea {...input} readOnly={readOnly} className={inputclass} placeholder={placeholder}></textarea>
            <div className="input-error">
                {(touched && error) && <span className="mb-0 text-danger" >{error}</span>}
            </div>
        </div>
    </>
)

export const renderSelectField = ({
    input,
    options,
    className,
    isMulti,
    readOnly,
    mutator,
    placeholder,
    isCountryField,
    isStateField,
    setselectedCountry,
    setselectedState,
    defaultValue,
    meta: {
        touched,
        error,
    }
}) => (
    <>
    <div className={className}>
        {/* {console.log('inpit', input)} */}
        <Select
            {...input}
            value={input.value}
            // defaultValue={{ value: "Help Girl Child", label: "Help Girl Child" }}
            isMulti={isMulti}
            onChange={(e)=>{
                if(isCountryField){
                    mutator('state','')
                    setselectedCountry(e)
                    console.log('e----------------------',e);

                    input.onChange(e)
                }
                else if (isStateField) {
                    mutator('city','')
                    setselectedState(e)
                    console.log('e----------------------',e);
                    input.onChange(e)
                }
                else {
                    input.onChange(e)  
                }
            }}
            isDisabled={readOnly}
            options={options}
            classNamePrefix="select"
            placeholder={placeholder}
        // defaultInputValue={defaultValue}
        />
        <div className="input-error">
            {(touched && error) && <span className="mb-0 text-danger" >{error}</span>}
        </div>
    </div>
    </>
)

export const renderRadioButton = ({
    input,
    type,
    value,
    readOnly,
    className,
    children,
    meta: {
        touched,
        error,
    }
}) => (
    <>
        <label className={className}>{children}
            <input {...input} disabled={readOnly}/>
            <span className="checkmark"></span>
        </label>
        <div className="input-error">
            {(touched && error) && <span className="mb-0 text-danger" >{error}</span>}
        </div>
    </>
)


export const FileField = ({ name, ...props }) => (
    <Field name={name}>
        {({ input: { value, onChange, ...input } }) => (
            <input
                {...input}
                type="file"
                onChange={({ target }) => onChange(target.files)} // instead of the default target.value
                {...props}
            />
        )}
    </Field>
)

export const renderSelect = ({
    input,
    name,
    option,
    list,
    placeholder,
    id,
    className,
    meta: {
        touched,
        error,
    }
}) => {
    console.log("kkk", list);
    return (
        <>
            <select {...input} className={className}>
                {/* <option value="">{placeholder}</option> */}
                {list.map((value, i) =>
                    <option key={i} value={value.option} > {value.name} </option>

                )}
                {/* {
               list.map( (x,y) => 
                <option key={y} value={x.option}>{x.name}</option> )
            }  */}
            </select>
            <div className="input-error">
                {(touched && error) && <span className="mb-0 text-right text-danger" >{error}</span>}
            </div>
        </>
    )
}
