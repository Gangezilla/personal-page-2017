import React from 'react';
import glamorous from 'glamorous';
import DogLoverImage from './doglover.jpg';

const PersonalSummaryContainer = glamorous.div({
  display: 'flex',
  maxWidth: '1200px',
  margin: '50px auto',
  justifyContent: 'space-between',
  padding: 0,
  '@media(max-width: 480px)': {
    padding: '0 20px',
    margin: 0,
    flexDirection: 'column',
  },
});

const InnerPersonalSummary = glamorous.div({
  textAlign: 'left',
  maxWidth: '800px',
});

const DogLover = glamorous.div({
  background: `url(${DogLoverImage})`,
  height: '350px',
  width: '350px',
  margin: '0 20px',
  backgroundPositionX: 'center',
  backgroundPostiionY: 'center',
  backgroundSize: '350px',
  objectFit: 'none',
  objectPosition: '50% 50%',
  '@media(max-width: 480px)': {
    height: '280px',
    width: '280px',
    margin: '0 auto',
    order: 3,
  },

});

const HeyThere = glamorous.h2({
  color: '#22BBB5',
  fontSize: '32px',
  fontFamily: 'Oxygen',
  marginTop: 0,
  '@media(max-width: 480px)': {
    margin: '25px 0',
  },
});

const P = glamorous.p({
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
});

const Resume = glamorous.a({
  padding: '15px 30px',
  color: '#22BBB5',
  border: '1px solid #22BBB5',
  display: 'block',
  width: '120px',
  textAlign: 'center',
  margin: '0 auto',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.4s',
  ':hover': {
    backgroundColor: '#22BBB5',
    color: 'white',
  },
  '@media(max-width: 480px)': {
    margin: '0 auto 20px',
  },
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
      <Resume href="/resume.pdf"> Resume </Resume>
    </InnerPersonalSummary>
  </PersonalSummaryContainer>
);

export default PersonalSummary;
