import React from "react";
const ValidationContext = React.createContext()


function ValidationContextProvider(props) {

    const [inputErrors, setInputErrors] = React.useState({
        age: false,
        feet: false,
        inches: false,
        pounds: false
    })

    function validateInput(name, value) {
        switch (name) {
            case "age":
                setInputErrors({
                    ...inputErrors,
                    [name]: (value.split("").every((i) => (0 <= i && i <= 9)) && value >= 15 && value <= 80) || value === "" ?
                        false :
                        true
                })
            case "feet":
                setInputErrors({
                    ...inputErrors,
                    [name]: (value.split("").every((i) => (0 <= i && i <= 9)) && value <= 10) || value === "" ?
                        false :
                        true
                })
            case "inches":
                setInputErrors({
                    ...inputErrors,
                    [name]: (value.split("").every((i) => (0 <= i && i <= 9)) && value <= 12) || value === "" ?
                        false :
                        true
                })
            case "pounds":
                setInputErrors({
                    ...inputErrors,
                    [name]: value.split("").every((i) => (0 <= i && i <= 9)) || value === "" ?
                        false :
                        true
                })
        }
        
    }
    
    return (
        <ValidationContext.Provider value={{inputErrors, validateInput}} >
            {props.children}
        </ValidationContext.Provider>
    )
}

export {ValidationContextProvider, ValidationContext}