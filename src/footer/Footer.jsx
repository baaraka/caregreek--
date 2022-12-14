import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerDivList">
          <div className="footerDivListItem">
            <div className="footerListItemLeft">
              <img
                src="https://img.freepik.com/premium-vector/letter-og-os-luxury-simple-logo-design-with-gold-color-best-company-premium-product_563735-24.jpg"
                alt=""
                className="footerImg"
              />{" "}
              <br />
              <p className="footerSpan">
                Caregreek International Was Established in 2018 And Has Over The
                Years Evolved To Become The Largest And Most Specialized
                Cleaning Company In Nigeria.
              </p>
            </div>
            <div className="footerTopCenter">
              <ul className="footerNavigationBar">
                <li className="footerNavigationBarItem">Home</li>
                <li className="footerNavigationBarItem">About Us</li>
                <li className="footerNavigationBarItem">Services</li>
                <li className="footerNavigationBarItem">Contact</li>
              </ul>
            </div>
            <div className="footerRight">
              <p className="footerSpanRight">Contact</p>
              <i className="footIcons fa-solid fa-envelope"></i>
              <span className="footerEmail">contact@9barack.com</span>
              <br />
              <div className="footIconFooter">
                <i className="footIcon fa-solid fa-square-phone"></i>
                <i className="footIcon fa-brands fa-facebook"></i>
                <i className="footIcon fa-brands fa-twitter"></i>
                <i className="footIcon fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerBottomItem">
              <span className="footerBottomItemList">
                Copyright ⓒ 2022 Caregreek
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
