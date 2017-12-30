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
        I&apos;m a front end (and aspiring full stack) developer whose currently working at Domain Group in Sydney, Australia. I&apos;m very interested in solving cool problems, teaching, and seeing the impact of awesome work. I do most of my work in React and Node; I really just love JS.
      </P>
      <P>
        I try and bring my design background to my development by trying to think like the people using my products, and working to create great products.
      </P>
      <P>
        You can check out some of the things I&apos;ve done below, or if you want a quick resume summary, you can grab that right here. Just a warning, this resume isn&apos;t usually as up to date as the rest of this page, but I do my best to update it when I can.
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
