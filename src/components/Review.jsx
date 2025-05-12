import { useForm } from '../context/FormContext';

const Review = () => {
    const { formData, prevStep } = useForm();

    const handleSubmit = () => {

    }

    return (
        <div className='form-step'>
            <h2>Review & Submit</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <div className="button-group">
                <button onClick={prevStep}>Back</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Review;