import { Title, Button } from "./our-projects.styles";
import ProjectsImg from "../projects-img/projects-img.component";

const OurProjects = () => {
  return (
    <section className="w-auto h-auto relative">
      <div className={`w-full h-screen sticky top-0`}>
        <div className="h-full flex flex-col justify-between items-center py-28">
          <Title className="static z-50">Our Projects</Title>
          <div className="text-6xl font-normal text-center leading-tight z-0">
            Discover the Canvas <br />
            of{" "}
            <span style={{ fontFamily: "Playfair Display, serif" }}>
              Our Creativity
            </span>
          </div>
          <Button className="items-end z-50">See all projects</Button>
        </div>
      </div>
      <ProjectsImg />
    </section>
  );
};

export default OurProjects;
