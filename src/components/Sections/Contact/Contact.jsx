import { useState } from "react";
import MattamImg from "../../../assets/images/Temple.jpeg";
import { Trans, useTranslation } from "react-i18next";
export function Contact(params) {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    mail: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="slide-up w-75 w-sm-100 mx-auto mb-5" id="contact-section">
      {/* Heading */}
      <div className="heading-title-section text-center my-5">
        <h2 className="text-align-center">
          <Trans i18nKey={"contact.title"} />
        </h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className=" col-12 col-md-6 mb-4 mb-md-0 text-center">
            <img src={MattamImg} alt="mattam img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body ms-2">
                <h5 className="card-title text-center my-2">Contact Us</h5>
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="formGroupExampleInput"
                      placeholder="Full Name"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Contact No*
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Contact No"
                      onChange={handleChange}
                      value={formData.mobileNumber}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Email ID"
                      onChange={handleChange}
                      value={formData.mail}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button
                      className="common-button btn w-100 my-2 py-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
