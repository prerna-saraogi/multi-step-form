import { useForm } from '../context/FormContext';


const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu'];

const AddressDetails = () => {
    const { formData, updateFormData, nextStep, prevStep } = useForm();

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
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                    placeholder="Choose your state"
                    value={formData.state}
                    onChange={(e) => updateFormData({ state: e.target.value })}
                >
                    <option value="">Select State</option>
                    {states.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>
            <div className="form-froup">
                <label htmlFor="postal-code">Postal Code</label>
                <input
                    type="text"
                    placeholder="Enter Postal Code"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData({ postalCode: e.target.value })}
                />
            </div>
            <div className="button-group">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default AddressDetails;
