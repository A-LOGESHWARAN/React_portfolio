import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = {
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
      access_key: "d1a0073d-5d55-4105-ae9e-d4a55e497ed4"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setFormDetails(formInitialDetails);
      setButtonText("Send");

      if (result.success) {
        toast.success('Thank you! Your message has been sent successfully. We will get back to you shortly.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } else {
        toast.error('Apologies, there was an issue submitting your message. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } catch (err) {
      console.error(err);
      setButtonText("Send");
      toast.error('Unable to submit the message at the moment. Please check your connection or try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Contact Information */}
          <Col md={6} size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""} style={{
                  paddingRight: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  {/* Email Card */}
                  <div className="contact-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(192, 132, 252, 0.08))',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ fontSize: '1.4rem', backgroundColor: 'white', padding: '0.25rem', borderRadius: '4px' }}>📧</span>
                    <div style={{ color: 'white', fontWeight: '500', fontSize: '1.05rem' }}>waranlogesh0406@gmail.com</div>
                  </div>

                  <div className="contact-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(192, 132, 252, 0.08))',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ fontSize: '1.4rem', backgroundColor: 'white', padding: '0.25rem', borderRadius: '4px' }}>📧</span>
                    <div style={{ color: 'white', fontWeight: '500', fontSize: '1.05rem' }}>+91 9176966556</div>
                  </div>
                  {/* Location Card */}
                  <div className="contact-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(192, 132, 252, 0.08))',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ fontSize: '1.4rem', color: '#ef4444' }}>📍</span>
                    <div style={{ color: 'white', fontWeight: '500', fontSize: '1.05rem' }}>Chennai, India</div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>

          {/* Right Side: Form */}
          <Col md={6} size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h2 style={{ color: '#ffffffff' }}>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                          style={{ borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '12px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.15))' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                          style={{ borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '12px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.15))' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                          style={{ borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '12px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.15))' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          style={{ borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '12px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.15))' }}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                          style={{ borderRadius: '8px', border: '2px solid #a855f7', padding: '12px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.15))', color: 'white' }}
                        />
                        <button 
                          type="submit" 
                          className="animate__animated animate__pulse hover:animate__infinite"
                          style={{ 
                            background: 'linear-gradient(135deg, #a855f7, #c084fc)', 
                            border: 'none', 
                            borderRadius: '8px', 
                            color: 'white', 
                            padding: '12px 24px',
                            marginTop: '1rem'
                          }}
                        >
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
