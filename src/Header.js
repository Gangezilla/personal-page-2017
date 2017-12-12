import React from 'react';
import glamorous from 'glamorous';

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
});

const A = glamorous.a({
  cursor: 'pointer',
  ':hover': {
    borderBottom: '2px white thick',
  },

});

const Header = () => (
  <HeaderContainer>
    <LinkContainer>
      <A>Github</A>
      <A>LinkedIn</A>
      <span>0431 987 232</span>
      <span>s.gangemi@me.com</span>
    </LinkContainer>
    <SelfPromotionHeader>
      <div>
        <h1>Scott Gangemi</h1>
        <p>Title for yourself goes here.</p>
      </div>
      <span>Logo</span>
    </SelfPromotionHeader>
  </HeaderContainer>
);

export default Header;
