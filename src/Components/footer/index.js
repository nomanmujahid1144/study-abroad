import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo-footer.png';
import india from '../../images/india.svg';
import australia from '../../images/australia.svg';
import singapur from '../../images/singapur.svg';
import canada from '../../images/canada.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer >
        <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h1>
                        <a href="https://overseasstudypros.com/">
                            <img className="footer-image" alt="no img" src={logo} />
                        </a>
                    </h1>
                    <div className="social-icons-btn">
                        <a className="icons twitter" href="https://twitter.com/thestudent_help">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </a>
                        <a className="icons facebook" href="https://www.facebook.com/TheStudentHelpline/">
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a className="icons instagram" href="https://www.instagram.com/thestudenthelpline_studyabroad/">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </a>
                        <a className="icons linkedin" href="https://au.linkedin.com/company/the-student-helpline">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                                    <br />
                          <p className="mb-1">
                              <span>
                                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                              </span>&nbsp;
                              <a href="tel:+919318325049">9318325049</a>
                        </p>
                       
                          <p className="mb-0">
                              <span>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                              </span>&nbsp;
                              <a className="mail-to" href="mailto:help@learnwithfraternity.com">help@learnwithfraternity.com</a>
                          </p>
                </div>

                <div className="col-lg-4">
                    <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-list">
                              <li>
                                <Link to="https://paraphrasingtools.io" target="_blank">AI Tools</Link>
                              </li>
                            {/* <li><a href="#">Portfolio</a></li> */}
                            {/* <li><a href="#">Careers</a></li> */}
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
                        </ul>
                </div>

                <div className="col-lg-4">
                    <h4 className="footer-title">Address</h4>
                    
                     {/* <ul className="location">
			   <li className=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/in.svg" width="40px" /><strong>India</strong>
			   <p>Learn With Fraternity Pvt. Ltd.
			   D-62,&nbsp;Noida,&nbsp;Sector 2</p></li>
                    <li className=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/ca.svg" width="40px" /><strong>Canada</strong>
					    <p>90 Park Lawn Rd, Etobicoke- Ontario</p></li>
                       <li className=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/au.svg" width="40px" /><strong>Australia</strong>
					 <p>2 Peebles ST, Endeavour Hills Vicoria, Australia</p></li>
					 <li className=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/sg.svg" width="40px" /><strong>Singapore</strong>
					  <p>8-1218 Block, 467 Hougang Ave 8, Singapore</p></li>
				  </ul> */}
                          <table className="table table-borderless">
                              <tbody>
                                  <tr className="mb-2"> 
                                      <td className="p-1">
                                          <img alt="no img" src={india} className="pt-2 footer-flags" />
                                      </td>
                                      <td className="p-1">
                                          <p className="px-2 mb-0 text-light">
                                              <strong>India</strong><br />
                                              D-62,&nbsp;Noida,&nbsp;Sector 2
                                          </p>
                                      </td>
                                  </tr>
                                  <tr className="mb-2">  
                                      <td className="p-1">
                                          <img alt="no img" src={india} className="pt-2 footer-flags" />
                                      </td>
                                      <td className="p-1">
                                          <p className="px-2 mb-0 text-light">
                                              <strong>India</strong><br />
                                              Chrysler Tech Centre, Doon IT Park, Govind Vihar, Dehradun, Uttarakhand
                                          </p>
                                      </td>
                                  </tr>
                                  <tr className="mb-2">
                                      <td className="p-1">
                                          <img alt="no img" src={singapur} className="pt-2 footer-flags" />
                                      </td>
                                      <td className="p-1">
                                          <p className="px-2 mb-0 text-light">
                                              <strong>Singapore</strong><br />
                                              8-1218 Block, 467 Hougang Ave 8, Singapore
                                          </p>
                                      </td>
                                  </tr>
                                  <tr className="mb-2">
                                      <td className="p-1">
                                          <img alt="no img" src={australia} className="pt-2 footer-flags" />
                                      </td>
                                      <td className="p-1">
                                          <p className="px-2 mb-0 text-light">
                                              <strong>Australia</strong><br />
                                              2 Peebles ST, Endeavour Hills Vicoria
                                          </p>
                                      </td>
                                  </tr>
					             <tr className="mb-2">
                                      <td className="p-1">
                                          <img alt="no img" src={canada} className="pt-2 footer-flags" />
                                      </td>
                                      <td className="p-1">
                                          <p className="px-2 mb-0 text-light">
                                              <strong>Canada</strong><br />
                                              90 Park Lawn Rd, Etobicoke- Ontario
                                          </p>
                                      </td>
					            </tr>
					        </tbody>
					    </table>
                </div>

            </div>
            <div className="text-center copyright"><p>@2023 Study Abroad ALL RIGHTS RESERVED</p></div>
        </div>
    </section>
    </footer>
  );
}

export default Footer;
