import React from "react";
import "../styles/Footer.css";
import Instagram from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
            <Instagram/>
      </div>
     <p> &copy; 2021 Posillipo pizza.com</p>
    </div>
  );
}

export default Footer;