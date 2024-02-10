import { FooterContainer } from "./footer.styles";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <FooterContainer>
      <h1
        className=" text-white text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
        style={{ fontSize: "200px" }}
      >
        Archie{" "}
        <span style={{ fontFamily: "Playfair Display, serif" }}>Studio</span>
      </h1>
      <div className="w-full flex justify-center mt-44">
        <div className="flex w-11/12 justify-between ">
          <div className="flex w-2/4 justify-between">
            <div>
              <div className="text-2xl text-white">Bali, Indonesia</div>
              <div className="text-white text-sm font-extralight mt-4">
                Jl. Dr Muwardi no.7, Denpasar,
                <br />
                Bali, 7107 <br />
                +62361-877-6514
              </div>
            </div>
            <div>
              <div className="text-2xl text-white">Jakarta, Indonesia</div>
              <div className="text-white text-sm font-extralight mt-4">
                Jl Perintis 10 RT 14/01, Central Jakarta,
                <br />
                Jakarta, 7107 <br />
                +628-21-527-0640
              </div>
            </div>
          </div>
          <div className="flex w-2/4 justify-end">
            <div className="w-1/2 flex justify-between">
              <div className="flex flex-col gap-4 text-white text-2xl">
                <span>Home</span>
                <span>About Us</span>
                <span>Expertise</span>
              </div>
              <div className="flex flex-col gap-4 text-white text-2xl">
                <span>Projects</span>
                <span>Blog</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-11/12">
          <div className="w-full flex justify-between">
            <span className="text-white text-xs font-thin">
              © 2024 Copyright Archie Studio
            </span>
            <div className="w-40 flex text-xs font-thin text-white justify-between">
              <span>Legal</span>
              <span>Privacy</span>
              <span>Warranty</span>
            </div>
            <span className="text-white text-xs font-thin">
              Created by{" "}
              <span style={{ fontFamily: "Playfair Display, serif" }}>LA</span>
              POMPS
            </span>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
