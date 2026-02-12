import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
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
        toast.success('Thank you! Your message has been sent successfully.', {
          position: "top-right",
          theme: "dark",
        });
      } else {
        toast.error('Something went wrong. Please try again later.', {
          position: "top-right",
          theme: "dark",
        });
      }
    } catch (err) {
      console.error(err);
      setButtonText("Send");
      toast.error('Network error. Please try again later.', {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} size={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                paddingRight: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <motion.h2 variants={itemVariants} style={{ marginBottom: '1rem' }}>
                Let's Connect
              </motion.h2>

              {[
                { icon: "📧", text: "waranlogesh0406@gmail.com" },
                { icon: "📱", text: "+91 9176966556" },
                { icon: "📍", text: "Chennai, India" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="contact-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(192, 132, 252, 0.05))',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    cursor: 'default'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <div style={{ color: '#e0e0e0', fontWeight: '500', fontSize: '1.1rem' }}>{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          <Col md={6} size={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2rem' }}>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  {[
                    { val: formDetails.firstName, ph: "First Name", key: 'firstName', type: "text" },
                    { val: formDetails.lastName, ph: "Last Name", key: 'lastName', type: "text" },
                    { val: formDetails.email, ph: "Email Address", key: 'email', type: "email" },
                    { val: formDetails.phone, ph: "Phone No.", key: 'phone', type: "tel" }
                  ].map((field, index) => (
                    <Col size={12} sm={6} className="px-1" key={index}>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                        type={field.type}
                        value={field.val}
                        placeholder={field.ph}
                        onChange={(e) => onFormUpdate(field.key, e.target.value)}
                        required={field.key !== 'phone'} // Phone optional? Usually yes, but user had no required on phone in original either
                        style={{
                          width: '100%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          borderRadius: '20px',
                          color: '#fff',
                          margin: '0 0 8px 0',
                          padding: '18px 26px',
                          fontWeight: '500',
                          fontSize: '18px',
                          letterSpacing: '0.8px',
                          transition: '0.3s'
                        }}
                      />
                    </Col>
                  ))}
                  <Col size={12} className="px-1">
                    <motion.textarea
                      whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '20px',
                        color: '#fff',
                        margin: '0 0 8px 0',
                        padding: '18px 26px',
                        fontWeight: '500',
                        fontSize: '18px',
                        letterSpacing: '0.8px',
                        transition: '0.3s'
                      }}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '14px 48px',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#000',
                        background: '#fff',
                        borderRadius: '20px',
                        border: 'none',
                        marginTop: '20px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {buttonText}
                    </motion.button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
