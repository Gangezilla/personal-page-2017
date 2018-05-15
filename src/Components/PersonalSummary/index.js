import React from 'react';
import resume from './resume.pdf';
import {
  PersonalSummaryContainer, DogLover, InnerPersonalSummary, HeyThere, P, Resume,
} from './components';


const PersonalSummary = () => (
  <PersonalSummaryContainer>
    <DogLover />
    <InnerPersonalSummary>
      <HeyThere>Hey there,</HeyThere>
      <P>
        I'm Scott, and I'm a full stack developer working at Domain in Sydney, Australia. I've spent a lot of time building in React and Node at home and at work, but lately I've been working to branch away from purely Javascript and work on developing my skills in other languages. Specifically, this has meant some dabbling in C# and Python. Lately I've been learning more about different programming paradigms, OOP for example, and trying to learn more fundamentals through resources like Nand To Tetris. My next ideal role would be one where I have the opportunity to build servers in any language and write React applications on the front end.
      </P>
      <P>
        You can check out some of the things I've worked on in my spare time below. I learn best by doing and building, which means I love building things. If you want something to print out and show off to your team (good idea!), my resume is right here.
      </P>
      <Resume
        target="_blank"
        href={resume}
      >
       Resume
      </Resume>
    </InnerPersonalSummary>
  </PersonalSummaryContainer>
);

export default PersonalSummary;
