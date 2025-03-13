import React from "react";
import "../css/Footer.css";

function Footer() {
  const handleClick = function () {
    window.open("https://cdntg.vercel.app/", "_blank", "noopener");
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          Made with ReactJS <i className="f__text f__heart__symbol">&#10084;</i>{" "}
          by{" "}
          <span className="f__text dev__name nowrap" onClick={handleClick}>
            Hojiev Makhmud
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
