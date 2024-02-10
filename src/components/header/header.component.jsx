import { Button } from "./header.styled";

const Header = () => {
  return (
    <div className="w-full px-10 flex justify-center fixed top-10 z-10">
      <div className="w-11/12 flex justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full mr-3"
            style={{
              width: "19px",
              height: "19px",
              backgroundColor: "#246FA6",
            }}
          ></div>
          <div className="font-normal text-white">
            Archie{" "}
            <span
              className="italic font-extralight text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Studio
            </span>
          </div>
        </div>
      </div>
      <div className="flex align-center justify-between w-64 ">
        <Button>Let's Talk</Button>
        <div className="self-center underline leading-tight text-white">
          menu
        </div>
      </div>
    </div>
  );
};

export default Header;
