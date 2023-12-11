import React, { useState } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import VisaExpertModal from "../visaModel";
import LoanModal from "../loanModal";
import { Box } from "./Box";

// Images
import Men from "../../images/men.webp";
import Book from "../../images/Icon map-book-store.webp";
import Grad from "../../images/Icon awesome-graduation-cap.webp";
import Built from "../../images/Icon awesome-building.webp";
import Calcu from "../../images/Icon ionic-ios-calculator.webp";
import Feather from "../../images/Icon feather-box.webp";
import Passport from "../../images/Icon awesome-passport.webp";
import Mail from "../../images/Icon zocial-email.webp";
import Air from "../../images/Icon metro-airplane.webp";

function Clock() {
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [isVisaModalOpenmbl, setIsVisaModalOpenmbl] = useState(false);
  const [isLoanModalOpenmbl, setIsLoanModalOpenmbl] = useState(false);
  const openVisaModal = () => {
    setIsVisaModalOpen(true);
  };

  const closeVisaModal = () => {
    setIsVisaModalOpen(false);
  };
  const openVisaModalmbl = () => {
    setIsVisaModalOpenmbl(true);
  };

  const closeVisaModalmbl = () => {
    setIsVisaModalOpenmbl(false);
  };
  const openLoanModal = () => {
    setIsLoanModalOpen(true);
  };

  const closeLoanModal = () => {
    setIsLoanModalOpen(false);
  };
  const openLoanModalmbl = () => {
    setIsLoanModalOpenmbl(true);
  };

  const closeLoanModalmbl = () => {
    setIsLoanModalOpenmbl(false);
  };
  return (
    <div className="whole-div-bggg main-container">
      <Container>
        <div className="left-div">
          <p className="ens-text">Expand Your Wings with All in One</p>
          <p className="best-text">Abroad Consultancy Services</p>
        </div>
      </Container>
      <div className="whole-div-bggg1">
        <div className="bg-back-img">
          <img src={Mail} alt="no-img" className="img-mail" />
          <img src={Air} alt="no-img" className="img-mail1" />
          <img src={Mail} alt="no-img" className="img-mail2" />
          <img src={Air} alt="no-img" className="img-mail3" />
          <img src={Air} alt="no-img" className="img-mail4" />
          <div className="bg-back-img1">
            <img src={Men} alt="no-img" className="img-menn" />
            <Box>
              <p className="lorem-text">Universities</p>
              <p className="lorem-text1">
                Use our Course Finder to find your dream university!
              </p>
              <div className="div-btn-lor">
                <Link to="/finder" style={{ textDecoration: "none" }}>
                  <button className="btn-loremmm">Check University</button>
                </Link>
                <img src={Book} alt="no-img" className="img-book" />
              </div>
            </Box>
            <div className="blue-box5">
              <p className="lorem-text">Visa Application</p>
              <p className="lorem-text1">
                World-Class Visa Assistance at Your
                <br /> Fingertips
              </p>
              <div className="div-btn-lor">
                <button className="btn-lorem" onClick={openVisaModal}>
                  Visa Application
                </button>
                <img src={Passport} alt="no-img" className="img-book" />
              </div>
            </div>
            <Modal
              className="style-modal"
              visible={isVisaModalOpen}
              onOk={closeVisaModal}
              onCancel={closeVisaModal}
              footer={null}
              centered
            >
              <VisaExpertModal
                handleCloseModal={closeVisaModal}
              />
            </Modal>
            <div>
              <div className="blue-box1">
                <p className="lorem-text">IELTS</p>
                <p className="lorem-text1">
                  Receive personalized assistance from our in-
                  <br />
                  house IELTS experts.
                </p>
                <div className="div-btn-lor">
                  <Link
                    to="/ielts"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <button className="btn-lorem">IELTS</button>
                  </Link>
                  <img src={Built} alt="no-img" className="img-book" />
                </div>
              </div>
              <div className="blue-box2">
                <p className="lorem-text">Student Accomodation</p>
                <p className="lorem-text1">
                  Explore your loan eligibility for Studying <br />
                  Abroad
                </p>
                <div className="div-btn-lor">
                  <Link to="/accommodation">
                    <button className="btn-loremmm">
                      Student Accomodation
                    </button>
                  </Link>

                  <img src={Grad} alt="no-img" className="img-book" />
                </div>
              </div>
            </div>
            <div>
              <div className="blue-box3">
                <p className="lorem-text">Education Loan</p>
                <p className="lorem-text1">
                  Explore your loan eligibility for Studying <br />
                  Abroad{" "}
                </p>
                <div className="div-btn-lor">
                  <button className="btn-loremm" onClick={openLoanModal}>
                    Loan Expert
                  </button>
                  <img src={Calcu} alt="no-img" className="img-book" />
                </div>
                <Modal
                  className="style-modal"
                  visible={isLoanModalOpen}
                  onOk={closeLoanModal}
                  onCancel={closeLoanModal}
                  footer={null}
                  centered
                >
                  <LoanModal handleCloseModal={closeLoanModal} />
                </Modal>
              </div>
              <div className="blue-box4">
                <p className="lorem-text">Scholarship</p>
                <p className="lorem-text1">
                  Discover the Top Scholarships That Match
                  <br /> Your Profile
                </p>
                <div className="div-btn-lor">
                  <Link to="/scholarships" style={{ textDecoration: "none" }}>
                    <button className="btn-loremm">Find Scholarship</button>
                  </Link>
                  <img src={Feather} alt="no-img" className="img-book1" />
                  <img src={Feather} alt="no-img" className="img-book2" />
                  <img src={Feather} alt="no-img" className="img-book3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mbl-viewcard">
        <div className="blue-box">
          <p className="lorem-text">Universities</p>
          <p className="lorem-text1">
            Use our Course Finder to find your dream university!
          </p>
          <div className="div-btn-lor">
            <Link to="/accommodation" style={{ textDecoration: "none" }}>
              <button className="btn-lorem">Check University</button>
            </Link>
            <img src={Book} alt="no-img" className="img-book" />
          </div>
        </div>

        <div>
          <div className="blue-box5">
            <p className="lorem-text">Visa Experts</p>
            <p className="lorem-text1">
              World-Class Visa Assistance at Your
              <br /> Fingertips
            </p>
            <div className="div-btn-lor">
              <button className="btn-lorem" onClick={openVisaModalmbl}>
                Visa Experts
              </button>
              <img src={Passport} alt="no-img" className="img-book" />
            </div>
            <Modal
              className="style-modal"
              visible={isVisaModalOpenmbl}
              onOk={closeVisaModalmbl}
              onCancel={closeVisaModalmbl}
              footer={null}
            >
              <VisaExpertModal />
            </Modal>
          </div>
          <div className="blue-box1">
            <p className="lorem-text">IELTS</p>
            <p className="lorem-text1">
              Receive personalized assistance from our in-
              <br />
              house IELTS experts.
            </p>
            <div className="div-btn-lor">
              <Link
                to="/ielts"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <button className="btn-lorem">IELTS</button>
              </Link>
              <img src={Built} alt="no-img" className="img-book" />
            </div>
          </div>
        </div>
        <div>
          <div className="blue-box2">
            <p className="lorem-text">Student Accomodation</p>
            <p className="lorem-text1">
              Explore your loan eligibility for Studying <br />
              Abroad
            </p>
            <div className="div-btn-lor">
              <Link to="/accommodation">
                <button className="btn-loremmm">Student Accomodation</button>
              </Link>
              <img src={Grad} alt="no-img" className="img-book" />
            </div>
          </div>
          <div className="blue-box4">
            <p className="lorem-text">Apply Scholarship</p>
            <p className="lorem-text1">
              Discover the Top Scholarships That Match
              <br /> Your Profile
            </p>
            <div className="div-btn-lor">
              <Link to="/scholarships" style={{ textDecoration: "none" }}>
                <button className="btn-loremm">Find Scholarship</button>
              </Link>
              <img src={Feather} alt="no-img" className="img-book1" />
              <img src={Feather} alt="no-img" className="img-book2" />
              <img src={Feather} alt="no-img" className="img-book3" />
            </div>
          </div>
          <div className="blue-box3">
            <p className="lorem-text">Education Loan</p>
            <p className="lorem-text1">
              Explore your loan eligibility for Studying <br />
              Abroad{" "}
            </p>
            <div className="div-btn-lor">
              <button className="btn-loremm" onClick={openLoanModalmbl}>
                Loan Expert
              </button>
              <img src={Calcu} alt="no-img" className="img-book" />
            </div>
            <Modal
              className="style-modal"
              visible={isLoanModalOpenmbl}
              onOk={closeLoanModalmbl}
              onCancel={closeLoanModalmbl}
              footer={null}
            >
              <LoanModal />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
