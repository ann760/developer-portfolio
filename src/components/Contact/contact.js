import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5vuj40l', 'template_d6dv1ju', form.current, {
        publicKey: 'tnJ4spfLRVMv_lxXD',
      })
      .then(
        () => {
          console.log('Email SUCCESS!');
          e.target.reset();
          alert('Email Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <span className="h3">Please fill out the form below to contact me.</span>
      <form id="contact-form" ref={form} onSubmit={sendEmail} >
        <input type="text" className="1name" placeholder="your name" name="from_name" />
        <input type="email" className="email" placeholder="your email" name="from_email" />
        <textarea className="msg" name="message" rows="5" placeholder="message"></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
