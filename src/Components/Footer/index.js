import React from 'react';
import glamorous from 'glamorous';
import { Logo } from '../Common/components';

const FooterLogo = glamorous(Logo)({ margin: '40px auto' });

const FooterElement = glamorous.div({
  display: 'flex',
  backgroundColor: '#22BBB5',
});

const Footer = () => (
  <FooterElement>
    <FooterLogo />
  </FooterElement>
);

export default Footer;
