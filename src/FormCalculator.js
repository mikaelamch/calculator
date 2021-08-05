import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormCalculator = (submitForm) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <label htmlFor="monthlyIncome" className="form-label">
                    Monthly income
                    </label>
                    <input
                    id='monthlyIncome'
                    type='number'
                    name="monthlyIncome"
                    className='form-input'
                    placeholder='Enter your monthly income'
                    value={values.monthlyIncome}
                    onChange={handleChange}
                    /> 
                    {errors.monthlyIncome && <p>{errors.monthlyIncome}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="requestedAmount" className="form-label">
                    Requested amount
                    </label>
                    <input
                    id='requestedAmount'
                    type='number'
                    name="requestedAmount"
                    className='form-input'
                    placeholder='Enter the requested amount'
                    value={values.requestedAmount}
                    onChange={handleChange}
                    />
                    {errors.requestedAmount && <p>{errors.requestedAmount}</p>}                 
            </div>
            <div className="form-inputs">
                <label htmlFor="loanTerm" className="form-label">
                    Loan term
                    </label>
                    <input
                    id='loanTerm'
                    type='number'
                    name="loanTerm"
                    className='form-input'
                    placeholder='Enter the loan term'
                    value={values.loanTerm}
                    onChange={handleChange}
                    />
                    {errors.loanTerm && <p>{errors.loanTerm}</p>}                  
            </div>
            <div className="form-inputs">
                <label htmlFor="children" className="form-label">
                    Children 
                    </label>
                    <select>
                    <option>NONE</option>
                    <option>SINGLE</option>
                    <option>MULTIPLE</option>
                    value={values.children}
                    onChange={handleChange}
                    </select>
                    {errors.children && <p>{errors.children}</p>}                  
            </div>
            <div className="form-inputs">
                <label htmlFor="coapplicant" className="form-label">
                    Coapplicant
                    </label>
                    <select>
                        <option>NONE</option>
                        <option>SINGLE_BORROWER</option>
                        <option>MULTIPLE_BORROWERS</option>
                    </select>
                    {errors.coapplicant && <p>{errors.coapplicant}</p>}               
            </div>
            <button className='form-input-btn' type='submit' title='Button'>
                Calculate
            </button>
            </form>
        </div>
    )
}

export default FormCalculator
