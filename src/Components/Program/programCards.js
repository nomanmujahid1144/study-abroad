import React from "react";
import "./cards.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <div>
    <div className="mentorcard-center1-about" onDragStart={handleDragStart}>
      <img className="widthimgabt" src="../images/ieltshigh1.png" alt="abc" />
      <p className="text-center-mentor-about">Live Classes</p>
      <p className="cardtxtabot">
        Lorem ipsum dolor sit amet,
        <br />
        consetetur sadipscing elitr, sed diam
        <br />
        nonumy eirmod tempor invidunt ut
      </p>
    </div>{" "}
  </div>,
  <div>
    <div className="mentorcard-center2-about" onDragStart={handleDragStart}>
      <img className="widthimgabtt" src="../images/ieltshigh2.png" alt="" />
      <p className="recomtxt">Speaking Rooms</p>
      <p className="cardtxtabot">
        Engage, collaborate, and inspire
        <br /> in ourdynamic and interactive
        <br /> speaking rooms.
      </p>{" "}
    </div>{" "}
  </div>,
  <div>
    <div className="mentorcard-center3-about" onDragStart={handleDragStart}>
      <img className="widthimgabt" src="../images/ieltshigh3.png" alt="" />
      <p className="searcour">Self-paced Course</p>
      <p className="cardtxtabot">
        Learn at your own pace with our
        <br /> flexible and self-paced courses
      </p>{" "}
    </div>{" "}
  </div>,
  <div className="mentorcard-center1-about" onDragStart={handleDragStart}>
    <img className="widthimgabt" src="../images/ieltshigh1.png" alt="" />
    <p className="text-center-mentor-about">Live Classes</p>
    <p className="cardtxtabot">
      Experience real-time learning
      <br /> with engaging live classes.
    </p>
  </div>,
  <div>
    <div className="mentorcard-center2-about" onDragStart={handleDragStart}>
      <img className="widthimgabtt" src="../images/ieltshigh2.png" alt="" />
      <p className="recomtxt">Speaking Rooms</p>
      <p className="cardtxtabot">
        Engage, collaborate, and inspire
        <br /> in ourdynamic and interactive
        <br /> speaking rooms.
      </p>{" "}
    </div>{" "}
  </div>,
  <div>
    <div className="mentorcard-center3-about" onDragStart={handleDragStart}>
      <img className="widthimgabt" src="../images/ieltshigh3.png" alt="" />
      <p className="searcour">Self-paced Course</p>
      <p className="cardtxtabot">
        Learn at your own pace with our
        <br /> flexible and self-paced courses
      </p>{" "}
    </div>{" "}
  </div>,
  <div>
    <div className="mentorcard-center2-about" onDragStart={handleDragStart}>
      <img className="widthimgabtt" src="../images/ieltshigh1.png" alt="" />
      <p className="recomtxt">Speaking Rooms</p>
      <p className="cardtxtabot">
        Experience real-time learning
        <br /> with engaging live classes.
      </p>{" "}
    </div>{" "}
  </div>,
  <div>
    <div className="mentorcard-center3-about" onDragStart={handleDragStart}>
      <img className="widthimgabt" src="../images/ieltshigh2.png" alt="" />
      <p className="searcour">Self-paced Course</p>
      <p className="cardtxtabot">
        Learn at your own pace with our
        <br /> flexible and self-paced courses
      </p>{" "}
    </div>{" "}
  </div>,
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function ProgramCards() {
  return (
    <div className="div-whole-men ">
      <div>
        <Container>
          <div className="mentor-cors-center">
            <div className="mentor-width-card">
              {/* <AliceCarousel
                items={items}
                disableDotsControls
                responsive={responsive}
                autoPlay
                animationDuration={5000}
              /> */}
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={500}
              >
                <div>
                  <div
                    className="mentorcard-center1-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabt"
                      src="../images/ieltshigh1.png"
                      alt=""
                    />
                    <p className="text-center-mentor-about">Live Classes</p>
                    <p className="cardtxtabot">
                      Experience real-time learning
                      <br /> with engaging live classes.
                    </p>
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="mentorcard-center2-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabtt"
                      src="../images/ieltshigh2.png"
                      alt=""
                    />
                    <p className="recomtxt">Speaking Rooms</p>
                    <p className="cardtxtabot">
                      Engage, collaborate, and inspire
                      <br /> in ourdynamic and interactive
                      <br /> speaking rooms.
                    </p>{" "}
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="mentorcard-center3-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabt"
                      src="../images/ieltshigh3.png"
                      alt=""
                    />
                    <p className="searcour">Self-paced Course</p>
                    <p className="cardtxtabot">
                      Learn at your own pace with our
                      <br /> flexible and self-paced courses
                    </p>{" "}
                  </div>{" "}
                </div>
                <div
                  className="mentorcard-center1-about"
                  onDragStart={handleDragStart}
                >
                  <img
                    className="widthimgabt"
                    src="../images/ieltshigh1.png"
                    alt=""
                  />
                  <p className="text-center-mentor-about">Live Classes</p>
                  <p className="cardtxtabot">
                    Experience real-time learning
                    <br /> with engaging live classes.
                  </p>
                </div>
                <div>
                  <div
                    className="mentorcard-center2-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabtt"
                      src="../images/ieltshigh2.png"
                      alt=""
                    />
                    <p className="recomtxt">Speaking Rooms</p>
                    <p className="cardtxtabot">
                      Engage, collaborate, and inspire
                      <br /> in ourdynamic and interactive
                      <br /> speaking rooms.
                    </p>{" "}
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="mentorcard-center3-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabt"
                      src="../images/ieltshigh3.png"
                      alt=""
                    />
                    <p className="searcour">Self-paced Course</p>
                    <p className="cardtxtabot">
                      Learn at your own pace with our
                      <br /> flexible and self-paced courses
                    </p>{" "}
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="mentorcard-center2-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabtt"
                      src="../images/ieltshigh2.png"
                      alt=""
                    />
                    <p className="recomtxt">Speaking Rooms</p>
                    <p className="cardtxtabot">
                      Experience real-time learning
                      <br /> with engaging live classes.
                    </p>{" "}
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="mentorcard-center3-about"
                    onDragStart={handleDragStart}
                  >
                    <img
                      className="widthimgabt"
                      src="../images/ieltshigh3.png"
                      alt=""
                    />
                    <p className="searcour">Self-paced Course</p>
                    <p className="cardtxtabot">
                      Learn at your own pace with our
                      <br /> flexible and self-paced courses
                    </p>{" "}
                  </div>{" "}
                </div>
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProgramCards;
