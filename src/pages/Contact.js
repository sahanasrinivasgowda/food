import React,{useState} from "react";
import tomotocurry from "../assets/tomotocurry.jpeg";
import "../styles/Contact.css";
import axios from 'axios'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState([]);
  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email,message })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
          setMessage('')
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }
  return (
    <div className="contact"
    >
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${tomotocurry})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="message">Message</label>
          <input name="message" placeholder="Enter message..." type="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
        
         
        </form >
        <button type="submit" class="styled-button">Submit</button>
      </div>
    </div>
  );
}

export default Contact;