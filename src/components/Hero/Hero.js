import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Logan Sorensen
      </SectionTitle>
      <SectionText>
        I'm a full-stack Web Developer with a passion for problem-solving and
        functional design. I'm constantly looking to enhance my skills, and I'd
        love to join a team that will help me grow as a developer!
      </SectionText>
      <Button onClick={() => (window.location = "#projects")}>
        Check out my work
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
