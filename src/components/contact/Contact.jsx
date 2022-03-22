import React, { useState } from "react";
import "./contact.scss";
import { contactsTabs } from "../../data";

export default function Contact() {

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
          <form>
            <h4>Let's get in touch!</h4>
            <h5>Connect with me on LinkedIn</h5>
            <div className="container">
              {contactsTabs.map((f) => (
                <div key={f.id} className="iconSquare">
                  <a className="icon" href={f.link}>
                    <img src={f.img} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
