import React from 'react';
import { useForm } from '../context/FormContext';
import '../ProgressBar.css';

const ProgressBar = () => {
    const { step } = useForm();
    const totalStep = 4
    const progressPercentage = (step / totalStep) * 100;

    return (
        <div className="progress-bar-container">
            <h3>Step {step} </h3>
            <div className="progress-bar-wrapper">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span>{step}/{totalStep}</span>
            </div>
        </div>
    )
}

export default ProgressBar;