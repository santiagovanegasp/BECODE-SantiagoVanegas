import React, { useState, useEffect } from 'react';

const ValidatedInput = ({ label, placeholder, registerValidation }) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  // Expresión regular para validar solo letras
  const regex = /^[a-zA-Z]+$/;

  // Función para validar el campo
  const validateField = () => {
    if (regex.test(inputValue)) {
      setMessage('✅ Valid Input');
      return true;
    } else {
      setMessage('❌ ERROR: Only letters and no special characters.');
      return false;
    }
  };

  // Registrar la función de validación al montar el componente
  useEffect(() => {
    registerValidation(validateField);
  }, [registerValidation]);

  return (
    <div>
      <label>
        {label}:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
      </label>
      <p>{message}</p>
    </div>
  );
};

export { ValidatedInput };




/*
import React, { useState } from 'react';

const ValidatedInput = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Expresión regular para validar solo letras
  const regex = /^[a-zA-Z]*$/;

  // Manejar el cambio en el input
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Validar en tiempo real solo si el formulario ya fue enviado
    if (submitted) {
      validateInput(newValue);
    }
  };

  // Manejar la validación en el submit
  const handleValidation = (e) => {
    e.preventDefault();
    setSubmitted(true);
    validateInput(inputValue);
  };

  // Función para validar el input
  const validateInput = (value) => {
    if (regex.test(value)) {
      setMessage('✅ Valid Input');
      validChanges();
    } else {
      setMessage('❌ ERROR: Only letters and no special characters.');
      errorChanges();
    }
  };

  // Funciones adicionales para cambios visuales (pueden expandirse)
  const validChanges = () => {
    console.log(`${label} is valid`);
  };

  const errorChanges = () => {
    console.log(`${label} is invalid`);
  };

  return (
    <form onSubmit={handleValidation}>
      <label>
        {label}:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </label>
      <button type="submit">Send</button> 
      <p>{message}</p>
    </form>
  );
};

export { ValidatedInput };
*/