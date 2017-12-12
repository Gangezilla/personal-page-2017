import glamorous from 'glamorous';
import LogoSG from '../../Images/logo.png';

export const HeaderContainer = glamorous.div({
  backgroundColor: '#22BBB5',
  color: 'white',
});

export const LinkContainer = glamorous.div({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '800px',
  margin: '0 auto',
  '@media(max-width: 480px)': {
    flexDirection: 'column',
    height: '150px',
  },
});

export const SelfPromotionHeader = glamorous.div({
  padding: '50px 0',
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '800px',
  margin: '0 auto',
  '@media(max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const InnerSelfPromotionHeader = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
});

export const A = glamorous.a({
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const Logo = glamorous.div({
  background: `url(${LogoSG})`,
  height: '150px',
  width: '150px',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundSize: '150px',
});

export const ScottGangemi = glamorous.h1({
  fontFamily: 'Oxygen',
  fontSize: '45px',
});

export const Title = glamorous.h2({
  fontFamily: 'Source Sans Pro',
  fontSize: '24px',
});

export const PersonalDetail = glamorous.span({

});