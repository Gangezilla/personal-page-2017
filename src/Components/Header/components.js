import glamorous from 'glamorous';
import { Logo } from '../Common/components';

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
    height: '100px',
    padding: '20px 0 0 0',
  },
});

export const SelfPromotionHeader = glamorous.div({
  padding: '50px 0',
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '800px',
  margin: '0 auto',
  '@media(max-width: 480px)': {
    padding: '0 20px',
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

export const HeaderLogo = glamorous(Logo)({
  '@media(max-width: 480px)': {
    marginBottom: '10px',
  },
});

export const ScottGangemi = glamorous.h1({
  fontFamily: 'Oxygen',
  fontSize: '40px',
  '@media(max-width: 480px)': {
    textAlign: 'center',
  },
});

export const Title = glamorous.h2({
  fontFamily: 'Source Sans Pro',
  fontSize: '24px',
});
