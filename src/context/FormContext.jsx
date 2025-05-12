import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "",
        address: "", city: "", state: "", postalCode: "",
        cardNumber: "", expiryMonth: "", expiryYear: "", cvv: "",
    })

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const updateFormData = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }))
    }
    return (
        <FormContext.Provider value={{ step, nextStep, prevStep, formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)