import React, { useState } from "react";
import { useForm } from "../context/FormContext";

const PersonalInfo = () => {
    const { formData, updateFormData, nextStep } = useForm();



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

            </div>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}

export default PersonalInfo;