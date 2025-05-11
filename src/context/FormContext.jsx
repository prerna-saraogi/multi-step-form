import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "",
        address: "", city: "", state: "", postalCode: "",
        cardNumber: "", expiry: "", cvv: "",
    })
    return (
        <FormContext.Provider>
            {children}
        </FormContext.Provider>
    )
}