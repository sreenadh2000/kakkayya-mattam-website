import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
export function Donation() {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: "",
    paymentType: "upi",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     // Load Razorpay script
  //     const res = await loadRazorpayScript();
  //     if (!res) {
  //       alert('Razorpay SDK failed to load');
  //       return;
  //     }

  //     // Backend API should return order_id and other Razorpay info
  //     const data = await fetch('/api/create-order', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount: formData.amount }),
  //     }).then((t) => t.json());

  //     const options = {
  //       key: 'YOUR_RAZORPAY_KEY_ID',
  //       amount: data.amount,
  //       currency: 'INR',
  //       name: formData.name,
  //       description: formData.purpose,
  //       order_id: data.id,
  //       handler: function (response) {
  //         verifyPayment(response);
  //       },
  //       prefill: {
  //         name: formData.name,
  //         email: formData.email,
  //       },
  //       theme: { color: '#3399cc' },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   };

  //     const verifyPayment = async (response) => {
  //     // You should call your backend to verify the payment signature here
  //     const res = await fetch('/api/verify-payment', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(response),
  //     });

  //     const result = await res.json();
  //     if (result.success) {
  //       alert('Payment verified successfully!');
  //     } else {
  //       alert('Payment verification failed!');
  //     }
  //   };

  //     const loadRazorpayScript = () => {
  //     return new Promise((resolve) => {
  //       const script = document.createElement('script');
  //       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //       script.onload = () => resolve(true);
  //       script.onerror = () => resolve(false);
  //       document.body.appendChild(script);
  //     });
  //   };
  return (
    <div className="container p-5 slide-up" id="donation-section">
      {/* Heading */}
      <div className="heading-title-section mb-4">
        <h2 className="text-center">
          <Trans i18nKey={"donation.title"} />
        </h2>
        <div className="underline"></div>
      </div>
      {/* Body */}
      <form>
        <div className="d-md-flex">
          <div className="mb-3 me-md-3 flex-md-fill">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Donar Name *
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Donor Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 flex-md-fill ml-5">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Email ID*
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Amount *
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            placeholder="Amount (INR)"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Type</label>
          <select
            name="paymentType"
            className="form-select"
            onChange={handleChange}
            value={formData.paymentType}
          >
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Message *
          </label>
          <textarea
            name="purpose"
            className="form-control"
            placeholder="Purpose (e.g., Temple Renovation)"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Proceed to Pay
        </button>
      </form>
    </div>
  );
}
