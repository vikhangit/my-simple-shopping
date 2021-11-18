import React from "react";
import "./footer.scss";
import FooterTop from "../FooterTop/FooterTop/footerTop";
import FooterBottom from "../FooterBottom/footerBottom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
