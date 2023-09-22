import React, { useCallback} from 'react';

import isEmail from "validator/lib/isEmail";

import { VALIDATE_NAME_MESSAGE, VALIDATE_EMAIL_MESSAGE } from '../utils/constants'

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "name" && event.target.validity.patternMismatch) {
      event.target.setCustomValidity(
        VALIDATE_NAME_MESSAGE
      );
    } else if (name === "email" && !isEmail(value)) {
      event.target.setCustomValidity(
        VALIDATE_EMAIL_MESSAGE
      );
    } else {
      event.target.setCustomValidity("");
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}