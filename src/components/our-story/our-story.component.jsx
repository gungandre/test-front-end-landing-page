import { OurStoryContainer, Story, Title } from "./our-story.styles";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <OurStoryContainer>
      <Title data-aos="fade-up">Our Story</Title>
      <Story data-aos="fade-up">
        We don't just design spaces, we weave narratives. Established in 2009,
        our journey in the world of architecture and interior design has been a
        tale of passion, innovation, and transformative creativity.
      </Story>
    </OurStoryContainer>
  );
};

export default OurStory;
