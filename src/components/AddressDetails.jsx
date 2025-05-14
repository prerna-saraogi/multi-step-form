import React, { useState } from 'react';
import { useForm } from '../context/FormContext';


const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"];


const AddressDetails = () => {
    const { formData, updateFormData, nextStep, prevStep } = useForm();
    const [errors, setErrors] = useState({});

    function handleNext() {
        const newErrors = {};
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!/^\d{6}$/.test(formData.postalCode)) newErrors.postalCode = "Enter valid 6-digit postal code";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) nextStep();
    }


    return (
        <div className='form-step'>
            <h2>Address Details</h2>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    placeholder='Enter Address'
                    value={formData.address}
                    onChange={(e) => updateFormData({ address: e.target.value })}>
                </textarea>
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id='city'
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={(e) => updateFormData({ city: e.target.value })}
                />
                {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                    value={formData.state}
                    onChange={(e) => updateFormData({ state: e.target.value })}
                >
                    <option value="">Select State</option>
                    {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                {errors.state && <span className="error">{errors.state}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="postal-code">Postal Code</label>
                <input
                    id='postal-code'
                    type="text"
                    placeholder="Enter Postal Code"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData({ postalCode: e.target.value })}
                />
                {errors.postalCode && <span className="error">{errors.postalCode}</span>}

            </div>
            <div className="button-group">
                <button className="back-btn" onClick={prevStep}>Go Back</button>
                <button className="next-btn" onClick={handleNext}>Next<span className="arrow">&#8594;</span></button>
            </div>
        </div>
    );
};

export default AddressDetails;
