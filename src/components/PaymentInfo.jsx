import { useForm } from "../context/FormContext";

const PaymentInfo = () => {
    const months = [...Array(12)].map((_, i) => String(i + 1).padStart(2, '0'));
    const years = [...Array(10).map((_, i) => `${2025 + i}`)];

    const { formData, updateFormData, nextStep, prevStep } = useForm();
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
            </div>
            <div className="form-group">
                <label htmlFor="expiryMonth">Expiry Date</label>
                <div className="expiry-date">
                    <select
                        id="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={(e) => updateFormData({ expiryMonth: e.target.value })}
                    >
                        {months.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select
                        id="expiryYear"
                        value={formData.expiryYear}
                        onChange={(e) => updateFormData({ expiryYear: e.target.value })}
                    >
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                />
            </div>
            <div className="button-group">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}

export default PaymentInfo;