import { ImgContainer } from "./projects-img.styles";

const ProjectsImg = () => {
  return (
    <div className="w-full h-auto flex justify-center z-20 relative">
      <div className="w-11/12 flex justify-between">
        <div className="flex flex-col gap-28 h">
          <ImgContainer>
            <img src="img/projects-image/project1.jpg" alt="project1.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project2.jpg" alt="project2.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project3.jpg" alt="project3.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project4.jpg" alt="project4.jpg" />
          </ImgContainer>
        </div>
        <div className="flex flex-col gap-28 pt-48">
          <ImgContainer>
            <img src="img/projects-image/project5.jpg" alt="project5.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project6.jpg" alt="project6.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project7.jpg" alt="project7.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project8.jpg" alt="project8.jpg" />
          </ImgContainer>
        </div>
        <div className="flex flex-col gap-28 pt-28">
          <ImgContainer>
            <img src="img/projects-image/project9.jpg" alt="project9.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project10.jpg" alt="project10.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project11.jpg" alt="project11.jpg" />
          </ImgContainer>
          <ImgContainer>
            <img src="img/projects-image/project12.jpg" alt="project12.jpg" />
          </ImgContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectsImg;
