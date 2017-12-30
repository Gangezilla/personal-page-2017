import glamorous from 'glamorous';
import DogLoverImage from './doglover.jpg';

export const PersonalSummaryContainer = glamorous.div({
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

export const InnerPersonalSummary = glamorous.div({
  textAlign: 'left',
  maxWidth: '800px',
  paddingRight: '20px',
});

export const DogLover = glamorous.div({
  background: `url(${DogLoverImage})`,
  height: '350px',
  width: '350px',
  margin: '0 20px',
  backgroundPositionX: 'center',
  backgroundPostiionY: 'center',
  backgroundSize: '350px',
  objectFit: 'none',
  objectPosition: '50% 50%',
  borderRadius: '10px',
  '@media(max-width: 480px)': {
    height: '280px',
    width: '280px',
    margin: '0 auto',
    order: 3,
  },

});

export const HeyThere = glamorous.h2({
  color: '#22BBB5',
  fontSize: '32px',
  fontFamily: 'Oxygen',
  marginTop: 0,
  '@media(max-width: 480px)': {
    margin: '25px 0',
  },
});

export const P = glamorous.p({
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
});

export const Resume = glamorous.a({
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
