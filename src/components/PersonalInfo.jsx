import React, { useState } from "react";
import { useForm } from "../context/FormContext";

const PersonalInfo = () => {
    const { formData, updateFormData, nextStep } = useForm();
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format.";
        if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Enter valid 10-digit phone number.";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) nextStep();
    };


    return (
        <div className="form-step">
            <h2>Personal Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter Email id"
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Phone number"
                    value={formData.phone}
                    onChange={(e) => updateFormData({ phone: e.target.value })}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="button-group">
                <button className="next-btn" onClick={handleNext}>Next <span className="arrow">&#8594;</span></button>
            </div>

        </div>
    )
}

export default PersonalInfo;