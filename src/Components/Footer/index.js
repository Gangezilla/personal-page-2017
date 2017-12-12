import React from 'react';
import glamorous from 'glamorous';
import LogoSG from '../../Images/logo.png';

const FooterElement = glamorous.div({
  display: 'flex',
  backgroundColor: '#22BBB5',
});

const Logo = glamorous.div({
  backgroundImage: `url(${LogoSG})`,
  height: '150px',
  width: '150px',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundSize: '150px',
  margin: '40px auto',
});

const Footer = () => (
  <FooterElement>
    <Logo />
  </FooterElement>
);

export default Footer;
