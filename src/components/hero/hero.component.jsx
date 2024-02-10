import { Img } from "./hero.styled";

const Hero = () => {
  return (
    <section>
      <Img>
        <div
          className="w-4/5 absolute bottom-10 left-1/2 flex"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="font-normal text-6xl text-white leading-tight w-3/4">
            Unveiling{" "}
            <span style={{ fontFamily: "Playfair Display, serif" }}>
              Timeless Elegance
            </span>
            <br /> in Every Space
          </div>
          <span
            className="text-white w-1/4"
            style={{
              fontSize: "10px",
              width: "300px",
              right: "0",
              bottom: "20px",
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "end",
            }}
          >
            Where design meets innovation, and spaces come alive with
            creativity. As architects and interior designers based in the
            vibrant heart of Indonesia, we bring forth a fusion of cultural
            richness and contemporary finesse.
          </span>
        </div>
      </Img>
    </section>
  );
};

export default Hero;
