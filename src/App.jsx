import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import { FormProvider } from "./context/FormContext";

export default function App() {
    return (
        <FormProvider>
            <MultiStepForm />
        </FormProvider>
    )
}