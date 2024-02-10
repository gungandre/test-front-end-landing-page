import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="w-full flex justify-center mt-60">
        <div className="w-11/12 flex justify-between">
          <div className="text-5xl leading-tight">
            Ready to transform
            <br />
            your space?
          </div>
          <div className="text-xl">
            Contact us today{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
              className="inline"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="w-full mt-40 overflow-hidden">
        <div
          className="text-8xl  text-center"
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          Let's{" "}
          <span style={{ fontFamily: "Playfair Display, serif" }}>
            Create Your Vision
          </span>{" "}
          Together
        </div>
      </section>
    </>
  );
};

export default Contact;
