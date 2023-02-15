const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-contents">
            <div className="footer-first">
              <h1>The Blog</h1>
            </div>
            <div className="footer-lists">
              <div className="footer-second">
                <h5>Product</h5>
                <ul className="product">
                  <li>products</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Case Studies</li>
                </ul>
              </div>
              <div className="footer-third">
                <h5>Solutions</h5>
                <ul className="solutions">
                  <li>Product Management</li>
                  <li>Workflow Management</li>
                  <li>Finance</li>
                  <li>Human Resources</li>
                </ul>
              </div>
              <div className="footer-fourth">
                <h5>Socials</h5>
                <ul className="socials">
                  <li>Twitter</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="copyright">&copy; Copyright 2023 Allrights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
