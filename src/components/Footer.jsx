import React from "react";

const Footer = () => {
  return (
    <footer className="text-dark text-center py-5 my-footer">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="my-anchor">
              About Us
            </a>
          </li>
          <li className="list-inline-item"> | </li>
          <li className="list-inline-item">
            <a href="#" className="my-anchor">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item"> | </li>
          <li className="list-inline-item">
            <a href="#" className="my-anchor">
              Terms and Conditions
            </a>
          </li>
        </ul>

        <hr class="my-4 my-hr" />

        <p>&copy; 2023 Thrifty Fashionista. All rights reserved.</p>
        <p>Made by Swayam Kothekar</p>
      </div>
    </footer>
  );
};

export default Footer;
