import { OurExpContainer, Title } from "./our-experience.styled";
import { useState } from "react";

const OurExperience = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleLeave1 = () => {
    setIsHovered1(false);
  };
  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <OurExpContainer>
      <Title>Our Expertice</Title>
      <div className="w-full flex">
        <div
          className="w-1/2 relative overflow-hidden"
          style={{ height: "600px" }}
        >
          <img
            src="img/exp1.jpg"
            alt="exp1"
            className={
              isHovered1
                ? "transition duration-1000  scale-125"
                : "transition duration-1000  scale-100 "
            }
          />
          <div
            className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-20"
            onMouseEnter={handleHover1}
            onMouseLeave={handleLeave1}
          ></div>
          <div
            className="absolute top-0 text-center top-1/2 left-1/2 "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="font-normal text-6xl text-white leading-tight w-3/4">
              Archi
              <span
                className="font-normal text-6xl text-white leading-tight w-3/4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                techural
              </span>
              <div
                className=" text-white mt-5 leading-tight"
                style={{ fontSize: "10px", marginLeft: "25px", width: "300px" }}
              >
                With a team of visionary architects, we embark on the journey of
                architectural innovation. From conceptualization to execution,
                we push the boundaries of design, creating structures that
                seamlessly blend form, function, and sustainability.
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 relative overflow-hidden"
          style={{ height: "600px" }}
        >
          <img
            src="img/exp2.jpg"
            alt="exp1"
            className={
              isHovered2
                ? "transition duration-1000  scale-125"
                : "transition duration-1000  scale-100 "
            }
          />
          <div
            className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-20"
            onMouseEnter={handleHover2}
            onMouseLeave={handleLeave2}
          ></div>
          <div
            className="absolute top-0 text-center top-1/2 left-1/2 "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="font-normal text-6xl text-white leading-tight w-3/4 ">
              <span className="text-nowrap">Interior </span>

              <span
                className="font-normal text-6xl text-white leading-tight w-3/4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Design
              </span>
              <div
                className=" text-white mt-5 leading-tight"
                style={{ fontSize: "10px", marginLeft: "35px", width: "300px" }}
              >
                Our interior design team is a symphony of creativity and
                functionality. We curate interiors that tell stories, where each
                element is thoughtfully chosen to enhance the overall aesthetic
                and user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </OurExpContainer>
  );
};

export default OurExperience;
