import React, {useState} from 'react'
import FormCalculator from './FormCalculator'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          {!isSubmitted ? (
            <FormCalculator submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;
