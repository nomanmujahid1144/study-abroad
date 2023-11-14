import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    // <div className="footermain">
    //   <Row className="rows">
    //     <Col>
    //       <div>
    //         <img alt="no img"
    //           className="imgfo"
    //           alt="abc"
    //           src="https://www.thestudenthelpline.co.in/assets/img/logo-footer.webp"
    //         />
    //         <Col>
    //           <div className="fourpicsdiv">
    //             <a href="https://www.facebook.com/TheStudentHelpline/">
    //               {" "}
    //               <Button className="imagesdiv">
    //                 <img alt="no img" alt="facebook" src={facebook} />
    //               </Button>
    //             </a>
    //             <a href="https://www.instagram.com/thestudenthelplineofficial/">
    //               <Button className="imagesdiv">
    //                 <img alt="no img" alt="instagram" src={instagram} />
    //               </Button>
    //             </a>
    //             <a href="https://twitter.com/thestudent_help">
    //               {" "}
    //               <Button className="imagesdiv">
    //                 <img alt="no img" alt="twitter" src={twitter} />
    //               </Button>
    //             </a>

    //             <a href="https://au.linkedin.com/company/the-student-helpline">
    //               <Button className="imagesdiv">
    //                 <img alt="no img" alt="linkedin" src={linkedin} />
    //               </Button>
    //             </a>
    //           </div>
    //         </Col>
    //         <br />
    //         <a href="tel:9318325049" style={{ textDecoration: "none", color: "white" }}>
    //           931-832-5049
    //         </a>
    //         <br />
    //         <a
    //           href="https://learnwithfraternity.com/"
    //           style={{ textDecoration: "none", color: "white" }}
    //         >
    //           help@learnwithfraternity.com
    //         </a>
    //       </div>
    //     </Col>
    //     <Col>
    //         <p className="scnddv">About Us</p>
    //         <div className="spacesless">
    //           <p className="scnddv">Portfolio</p>
    //           <p className="scnddv">Careers</p>
    //           <Link to="/contactUs">
    //             <p className="scnddv">Contact Us</p>
    //           </Link>
    //         </div>
    //     </Col>
    //     <Col>
    //       {" "}
    //       <div>
    //         {/* <p className="scnddv">Address</p> */}
    //         <p className="scnddv">
    //           India
    //           <br /> Learn With Fraternity Pvt. Ltd. D-62, Noida, Sector 2
    //         </p>
    //         <p className="scnddv">919318325049</p>
    //       </div>
    //     </Col>
    //     <Col>
    //       <div className="fourpicsdiv">
    //         <a href="https://www.facebook.com/TheStudentHelpline/">
    //           {" "}
    //           <Button className="imagesdiv">
    //             <img alt="no img" alt="facebook" src={facebook} />
    //           </Button>
    //         </a>
    //         <a href="https://www.instagram.com/thestudenthelplineofficial/">
    //           <Button className="imagesdiv">
    //             <img alt="no img" alt="instagram" src={instagram} />
    //           </Button>
    //         </a>
    //         <a href="https://twitter.com/thestudent_help">
    //           {" "}
    //           <Button className="imagesdiv">
    //             <img alt="no img" alt="twitter" src={twitter} />
    //           </Button>
    //         </a>

    //         <a href="https://au.linkedin.com/company/the-student-helpline">
    //           <Button className="imagesdiv">
    //             <img alt="no img" alt="linkedin" src={linkedin} />
    //           </Button>
    //         </a>
    //       </div>
    //     </Col>
    //   </Row>
    //   <br /> <br />
    //   <p className="allrights">
    //     © 2023 Learn With Fraternity. ALL RIGHTS RESERVED.
    //   </p>
    // </div>
    <footer >
        <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h1><a href="https://www.thestudenthelpline.co.in/"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/logo-footer.webp" width="140px" /></a> </h1>
                    <div class="social-icons-btn">
                        <a class="icons twitter" href="https://twitter.com/thestudent_help">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </a>
                        <a class="icons facebook" href="https://www.facebook.com/TheStudentHelpline/">
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a class="icons instagram" href="https://www.instagram.com/thestudenthelpline_studyabroad/">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </a>
                        <a class="icons linkedin" href="https://au.linkedin.com/company/the-student-helpline">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                                    <br />
                          <p class="mb-1">
                              <span>
                                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                              </span>&nbsp;
                              <a href="tel:+919318325049">9318325049</a>
                        </p>
                       
                          <p class="mb-0">
                              <span>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                              </span>&nbsp;
                              <a class="mail-to" href="mailto:help@learnwithfraternity.com">help@learnwithfraternity.com</a>
                          </p>
                </div>

                <div class="col-lg-4">
                    <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-list">
                              <li>
                                <Link to="https://paraphrasingtools.io" target="_blank">AI Tools</Link>
                              </li>
                            {/* <li><a href="#">Portfolio</a></li> */}
                            {/* <li><a href="#">Careers</a></li> */}
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
                        </ul>
                </div>

                <div class="col-lg-4">
                    <h4 class="footer-title">Address</h4>
                    
                     {/* <ul class="location">
			   <li class=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/in.svg" width="40px" /><strong>India</strong>
			   <p>Learn With Fraternity Pvt. Ltd.
			   D-62,&nbsp;Noida,&nbsp;Sector 2</p></li>
                    <li class=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/ca.svg" width="40px" /><strong>Canada</strong>
					    <p>90 Park Lawn Rd, Etobicoke- Ontario</p></li>
                       <li class=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/au.svg" width="40px" /><strong>Australia</strong>
					 <p>2 Peebles ST, Endeavour Hills Vicoria, Australia</p></li>
					 <li class=""><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/sg.svg" width="40px" /><strong>Singapore</strong>
					  <p>8-1218 Block, 467 Hougang Ave 8, Singapore</p></li>
				  </ul> */}
					    <table class="table table-borderless">
					        <tbody>
					            <tr class="mb-2"> 
					                <td class="p-1"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/in.svg" width="40px" class="pt-2" /></td>
					                <td class="p-1"><p class="px-2 mb-0 text-light"><strong>India</strong> <br />
					    D-62,&nbsp;Noida,&nbsp;Sector 2</p></td>
					            </tr>
					            <tr class="mb-2"> 
					                <td class="p-1"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/in.svg" width="40px" class="pt-2" /></td>
					                <td class="p-1"><p class="px-2 mb-0 text-light"><strong>India</strong> <br />Chrysler Tech Centre, Doon IT Park, Govind Vihar, Dehradun, Uttarakhand</p></td>
					            </tr>
					            <tr class="mb-2">
					                <td class="p-1"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/sg.svg" width="40px" class="pt-2" /></td>
					                <td class="p-1"><p class="px-2 mb-0 text-light"><strong>Singapore</strong> <br />
					                8-1218 Block, 467 Hougang Ave 8, Singapore</p></td>
					            </tr>
					            <tr class="mb-2">
					                <td class="p-1"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/au.svg" width="40px" class="pt-2" /></td>
					                <td class="p-1"><p class="px-2 mb-0 text-light"><strong>Australia</strong> <br />2 Peebles ST, Endeavour Hills Vicoria</p></td>
					            </tr>
					             <tr class="mb-2">
					                <td class="p-1"><img alt="no img" src="https://www.thestudenthelpline.co.in/assets/img/ca.svg" width="40px" class="pt-2" /></td>
					                <td class="p-1"><p class="px-2 mb-0 text-light"><strong>Canada</strong> <br />90 Park Lawn Rd, Etobicoke- Ontario</p></td>
					            </tr>
					            
					        </tbody>
					    </table>
                       
                </div>

            </div>
            <div class="text-center copyright"><p>@2023 Study Abroad ALL RIGHTS RESERVED</p></div>
        </div>
    </section>
    </footer>
  );
}

export default Footer;
