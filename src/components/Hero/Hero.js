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
        Hi, I'm Logan Sorensen <br />
        I'm a Fullstack Web Developer
      </SectionTitle>
      <SectionText>Value propostion</SectionText>
      <Button
        onClick={() => (window.location = "#projects")}
      >
        Check out my work
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
