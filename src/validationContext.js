import React from "react";
const ValidationContext = React.createContext()


function ValidationContextProvider(props) {

    const [inputErrors, setInputErrors] = React.useState({
        ageError: false,
        feetError: false,
        inchesError: false,
        poundsError: false
    })

    function validateInput(name, value) {
        if (name === "age") {
            setInputErrors(prev => ({
                ...prev,
                ageError: (value.split("").every((i) => (0 <= i && i <= 9)) && value >= 15 && value <= 80) || value === "" ?
                    false :
                    true
            }))
        }
        if (name === "feet") {
            setInputErrors(prev => ({
                ...prev,
                feetError: (value.split("").every((i) => (0 <= i && i <= 9)) && value <= 10) || value === "" ?
                    false :
                    true
            }))
        }
        if (name === "inches") {
            setInputErrors(prev => ({
                ...prev,
                inchesError: (value.split("").every((i) => (0 <= i && i <= 9)) && value <= 12) || value === "" ?
                    false :
                    true
            }))
        }
        if (name === "pounds") {
            setInputErrors(prev => ({
                ...prev,
                poundsError: value.split("").every((i) => (0 <= i && i <= 9)) || value === "" ?
                    false :
                    true
            }))
        }
    }

    function showUnfilledInputs(age, feet, inches, pounds) {
        if (age === "") {
          setInputErrors(prev => ({
            ...prev,
            ageError: true
          }))
        }
        if (feet === "") {
          setInputErrors(prev => ({
            ...prev,
            feetError: true
          }))
        }
        if (inches === "") {
          setInputErrors(prev => ({
            ...prev,
            inchesError: true
          }))
        }
        if (pounds === "") {
          setInputErrors(prev => ({
            ...prev,
            poundsError: true
          }))
        }
      }
    
    return (
        <ValidationContext.Provider value={{inputErrors, validateInput, showUnfilledInputs}} >
            {props.children}
        </ValidationContext.Provider>
    )
}

export {ValidationContextProvider, ValidationContext}