// ContactInfo.js
import React, { useState } from "react";

function ContactInfo() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    fetch("https://asaduzzama.de/backend/contact.php", {
      method: "POST",
      body: formData
    })
      .then((res) => res.text())
      .then((data) => {
        setLoading(false);
        setSuccess(true);

        // Clear form
        e.target.reset();

        // Hide success after 3 sec
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        setLoading(false);
        alert("Error sending message!");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row p-30-0">

          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Contact information</h4>
              </div>
            </div>
          </div>

          {/* LEFT INFO */}
          <div className="col-lg-4">
            <div className="art-a art-card">
              <div className="art-table p-15-15">
                <ul>
                  <li><h6>Country:</h6><span>China</span></li>
                  <li><h6>City:</h6><span>Mianyang</span></li>
                  <li><h6>Streat:</h6><span>17 No.(SWUST)</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* MIDDLE INFO */}
          <div className="col-lg-4">
            <div className="art-a art-card">
              <div className="art-table p-15-15">
                <ul>
                  <li><h6>Email:</h6><span><a href="mailto:asaduys@gmail.com">asaduys@gmail.com</a></span></li>
                  <li><h6>Weixin:</h6><span>asadswust</span></li>
                  <li><h6>DingTalk:</h6><span>asadsoftswust</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="col-lg-4">
            <div className="art-a art-card">
              <div className="art-table p-15-15">
                <ul>
                  <li><h6>WhatsApp:</h6><span><a href="https://wa.me/8801934809203" target="_blank">+8801934-809203</a></span></li>
                  <li><h6>Service:</h6><span><a href="https://wa.me/8801934809203" target="_blank">+8801934-809203</a></span></li>
                  <li><h6>Personal:</h6><span><a href="tel:8618583505805">+8618583505805</a></span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Get in touch</h4>
              </div>
            </div>

            <div className="art-a art-card">
              <form id="form" className="art-contact-form" onSubmit={handleSubmit}>

                <div className="art-form-field">
                  <input id="name" name="name" className="art-input" type="text" placeholder="Name" required />
                  <label htmlFor="name"><i className="fas fa-user"></i></label>
                </div>

                <div className="art-form-field">
                  <input id="email" name="email" className="art-input" type="email" placeholder="Email" required />
                  <label htmlFor="email"><i className="fas fa-at"></i></label>
                </div>

                <div className="art-form-field">
                  <textarea id="message" name="text" className="art-input" placeholder="Message" required></textarea>
                  <label htmlFor="message"><i className="far fa-envelope"></i></label>
                </div>

                <div className="art-submit-frame">
                  <button className="art-btn art-btn-md art-submit" type="submit" disabled={loading}>
                    <span>{loading ? "Sending..." : "Send message"}</span>
                  </button>

                  {/* Success Message */}
                  {success && (
                    <div className="art-success">Success <i className="fas fa-check"></i></div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactInfo;
