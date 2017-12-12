import React from 'react';
import glamorous from 'glamorous';
import DogLoverImage from './doglover.jpg';

const PersonalSummaryContainer = glamorous.div({
  display: 'flex',
  maxWidth: '1400px',
  margin: '30px auto',
  justifyContent: 'space-around',
});

const InnerPersonalSummary = glamorous.div({
  textAlign: 'left',
  maxWidth: '800px',
});

const DogLover = glamorous.div({
  background: `url(${DogLoverImage})`,
  height: '350px',
  width: '350px',
  backgroundPositionX: 'center',
  backgroundPostiionY: 'center',
  backgroundSize: '350px',
});

const HeyThere = glamorous.h2({
  color: '#22BBB5',
  fontSize: '32px',
  fontFamily: 'Oxygen',
});

const P = glamorous.h2({
  fontFamily: 'Source Sans Pro',
  fontWeight: 300,
  fontSize: '20px',
});

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
      <a> Resume </a>
    </InnerPersonalSummary>
  </PersonalSummaryContainer>
);

export default PersonalSummary;
