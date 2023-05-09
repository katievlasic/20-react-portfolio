import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Connect() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }
   
    setEmail('');
  }
  
  
    return (
      <div className="card text-center container">
        <div className="card-header col-4">
         Connect with Me!
        </div>
        <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
          <button
            type="submit"
            className="btn btn-warning"
            onClick={handleFormSubmit}
          >
            Connect
          </button>
        </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
    )
      }
      </div>
    )
  }
  
  export default Connect;