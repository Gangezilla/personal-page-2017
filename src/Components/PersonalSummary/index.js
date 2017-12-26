import React from 'react';
import resume from './resume.pdf';
import {
  PersonalSummaryContainer, DogLover, InnerPersonalSummary, HeyThere, P, Resume,
} from './components';


const PersonalSummary = () => (
  <PersonalSummaryContainer>
    <DogLover />
    <InnerPersonalSummary>
      <HeyThere> Hey there, </HeyThere>
      <P>
        I&apos;m Scott. I really like dogs, and I think this is the best photo of me that&apos;s ever going to be taken.
        I’m a front end developer + designer and I’m passionate about solving cool problems, teaching,
        and seeing the impact of awesome work.
      </P>
      <P>
        I&apos;m interested in designing and creating fantastic experiences that people will love,
        and then want to experience again and again.
      </P>
      <P>
        You can check out some of the things I&apos;ve done below, or if you want a quick resume summary,
        you can grab that right here.
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
