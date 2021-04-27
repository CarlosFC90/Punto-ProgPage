import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [issubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!issubmitted ? <FormSignup submitForm={submitForm}/> : <FormSuccess/>}
        </div>
    )
}

export default Form
