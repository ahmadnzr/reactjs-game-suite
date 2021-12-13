import "./footer.css";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="footer-menu">
        <ul className="d-flex align-items-center justify-content-center">
          <li>main</li>
          <li>about</li>
          <li>game features</li>
          <li>system requirements</li>
          <li>quotes</li>
        </ul>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom d-flex align-items-center justify-content-between">
        <span>© 2018 Your Games, Inc. All Right Reserved</span>
        <ul className="d-flex align-items-center justify-content-end">
          <li>privacy policy</li>
          <li>terms of services</li>
          <li>code of conduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
