import React from 'react';
import glamorous from 'glamorous';
import LogoSG from './logo.png';

const HeaderContainer = glamorous.div({
  backgroundColor: '#22BBB5',
  color: 'white',
});

const LinkContainer = glamorous.div({
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

const SelfPromotionHeader = glamorous.div({
  padding: '50px',
  display: 'flex',
  justifyContent: 'space-around',
  '@media(max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const InnerSelfPromotionHeader = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const A = glamorous.a({
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

const Logo = glamorous.div({
  background: `url(${LogoSG})`,
  height: '150px',
  width: '150px',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundSize: '150px',
});

const Header = () => (
  <HeaderContainer>
    <LinkContainer>
      <A href="https://www.github.com/Gangezilla">Github</A>
      <A href="https://www.linkedin.com/in/scott-gangemi-18146198/">LinkedIn</A>
      <span>0431 987 232</span>
      <span>s.gangemi@me.com</span>
    </LinkContainer>
    <SelfPromotionHeader>
      <InnerSelfPromotionHeader>
        <h1>Scott Gangemi</h1>
        <p>Title for yourself goes here.</p>
      </InnerSelfPromotionHeader>
      <Logo />
    </SelfPromotionHeader>
  </HeaderContainer>
);

export default Header;
