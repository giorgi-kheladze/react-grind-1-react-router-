import React from "react";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="test">
          <input type="text" placeholder="name" />
          <br />
          <input type="email" placeholder="email" />
          <br />
          <textarea placeholder="message"></textarea>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
