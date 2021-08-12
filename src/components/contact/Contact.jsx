import React, { useState } from "react";
import "./contact.scss";
import { contactsTabs } from "../../data";

export default function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");

    const { name, email, message } = e.target.elements;
    let eDetails = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json;charset=utf-8",
      },
      body: JSON.stringify(eDetails),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="container">
          {contactsTabs.map((d) => (
            <div key={d.id} className="iconSquare">
              <a className="icon" href={d.link}>
                <img src={d.img} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <h1>Contact</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h4>Let's connect!</h4>
            <div>
              <input type="email" id="email" placeholder="EMAIL" required />
            </div>
            <div>
              <textarea id="message" placeholder="MESSAGE" required />
            </div>
            <button type="submit">{status}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
