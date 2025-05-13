import React, { useState } from 'react';
import { useForm } from "../context/FormContext";

const PaymentInfo = () => {

    const { formData, updateFormData, nextStep, prevStep } = useForm();
    const [errors, setErrors] = useState({});

    const months = [...Array(12)].map((_, i) => String(i + 1).padStart(2, '0'));
    const years = [...Array(10)].map((_, i) => String(new Date().getFullYear() + i));

    const handleNext = () => {
        const newErrors = {};
        if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "Card number must be 16 digits.";
        if (!formData.expiryMonth || !formData.expiryYear) newErrors.expiry = "Select month and year.";
        if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 digits.";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) nextStep();
    };

    return (
        <div className="form-step">
            <h2>Payment Information</h2>
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="number"
                    id="cardNumber"
                    placeholder="Enter Card Number"
                    value={formData.cardNumber}
                    onChange={(e) => updateFormData({ cardNumber: e.target.value })}
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
            </div>
            <div className="form-group">
                <label>Expiry Date</label>
                <div className="expiry-date">
                    <select
                        id="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={(e) => updateFormData({ expiryMonth: e.target.value })}
                    >
                        <option value="">MM</option>
                        {months.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select
                        id="expiryYear"
                        value={formData.expiryYear}
                        onChange={(e) => updateFormData({ expiryYear: e.target.value })}
                    >
                        <option value="">YYYY</option>
                        {years.map((year) => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>
                {errors.expiry && <span className="error">{errors.expiry}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                    type="password"
                    id="cvv"

                    value={formData.cvv}
                    onChange={(e) => updateFormData({ cvv: e.target.value })}
                />
                {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
            <div className="button-group">
                <button className="back-btn" onClick={prevStep}> Go Back</button>
                <button className="next-btn" onClick={handleNext}>Next<span className="arrow">&#8594;</span></button>
            </div>
        </div>
    )
}

export default PaymentInfo;