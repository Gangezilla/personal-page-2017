import React from 'react';
import resume from './resume.pdf';
import {
  PersonalSummaryContainer, DogLover, InnerPersonalSummary, HeyThere, P, Resume,
} from './components';


const PersonalSummary = () => (
  <PersonalSummaryContainer>
    <DogLover />
    <InnerPersonalSummary>
      <HeyThere>Hey there <span role="img" aria-label="wave">👋🏻</span>,</HeyThere>
      <P>
        I&apos;m Scott, and I&apos;m a software developer working at Expert360 in Sydney, Australia.
        I spend my time building user experiences in React, and server side applications in Elixir.
        My current focus is strengthening my backend skills, so I'm learning about architecture, databases, networking, as well as continuing to learn Elixir. You know, all the good stuff.
        If you want something to print out and show off to your team (good idea!), my resume is right here. Or if you&apos;d rather contact me, check out one of your options up above.
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
