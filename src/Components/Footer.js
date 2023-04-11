import logomain from "../Assets/UDEMY-MAIN-LOGO.PNG";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="gridd-container">
          <div className="gridd-item">udemy business</div>
          <div className="gridd-item">careers</div>
          <div className="gridd-item">terms</div>
          <div className="gridd-item">teach on udemy</div>
          <div className="gridd-item">blog</div>
          <div className="gridd-item">privacy policy</div>
          <div className="gridd-item">get the app</div>
          <div className="gridd-item">help and support</div>
          <div className="gridd-item">cookie settings</div>
          <div className="gridd-item">about us</div>
          <div className="gridd-item">affiliate</div>
          <div className="gridd-item">sitemap</div>
          <div className="gridd-item">contact us</div>
          <div className="gridd-item">investors</div>
          <div className="gridd-item">Accessibility statement</div>
        </div>
      </div>
      <div className="language-box">
        <h3>English</h3>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-container">
          <img src={logomain} alt="main-logo" />
        </div>
        <p>© 2023 Udemy, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
