import { useForm } from '../context/FormContext';
import db from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import Success from './Success';

const Review = () => {
    const { formData, prevStep, resetForm } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("")

    const maskCardNumber = (num) =>
        num ? `**** **** **** ${num.slice(-4)}` : '';
    const maskCVV = () => `***`;

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await addDoc(collection(db, "formSubmissions"), {
                ...formData,
                createdAt: serverTimestamp(),
            })
            setSubmitted(true);
            setErrors("");
        }
        catch (error) {
            console.error("FireStore Error", error)
            setErrors("❌ Submission failed. Please try again.")
        } finally {
            setLoading(false);
        }
    }

    const handleNewForm = () => {
        resetForm();
    }

    const personalFields = [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
    ];

    const addressFields = [
        { label: "Address", value: formData.address },
        { label: "City", value: formData.city },
        { label: "State", value: formData.state },
        { label: "Postal Code", value: formData.postalCode },
    ];

    const paymentFields = [
        { label: "Card Number", value: maskCardNumber(formData.cardNumber) },
        { label: "Expiry Date", value: `${formData.expiryMonth}/${formData.expiryYear}` },
        { label: "CVV", value: maskCVV() },
    ];

    const renderSection = (title, fields) => (
        <div className="review-section">
            <h3>{title}:</h3>
            {fields.map((item, i) => (
                <p key={i}>
                    {item.label}: {item.value}
                </p>
            ))}
        </div>
    );

    return (
        <div className='form-step'>
            {!submitted ? (
                <>
                    <h2>Review & Submit</h2>
                    {renderSection("Personal Information", personalFields)}
                    {renderSection("Address Details", addressFields)}
                    {renderSection("Payment Information", paymentFields)}

                    <p>Please review your information before submitting. You can navigate back to previous steps to make changes if necessary.</p>
                    {errors && <p className="error">{errors}</p>}

                    <div className="button-group">
                        <button className="back-btn" onClick={prevStep}>Go Back</button>
                        <button className='submit' onClick={handleSubmit} disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </>

            ) : (
                <>
                    <Success onReset={handleNewForm} />
                </>
            )}
        </div>
    );
}

export default Review;