import React from "react";
import { useForm } from "./context/FormContext";
import PersonalInfo from "./components/PersonalInfo";
import AddressDetails from "./components/AddressDetails";
import PaymentInfo from "./components/PaymentInfo";
import Review from "./components/Review";

export default function App() {
    const { step } = useForm();
    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInfo />
            case 2:
                return <AddressDetails />
            case 3:
                return <PaymentInfo />
            case 4:
                return <Review />
            default:
                return null;
        }
    }
    return (
        <div className="app">
            {renderStep()}
        </div>
    )
}