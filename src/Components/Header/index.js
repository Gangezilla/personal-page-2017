import React from 'react';
import {
  HeaderContainer,
  LinkContainer,
  A,
  SelfPromotionHeader,
  InnerSelfPromotionHeader,
  HeaderLogo,
  ScottGangemi,
  Title,
} from './components';

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
        <ScottGangemi>Scott Gangemi</ScottGangemi>
        <Title>Maker of things, breaker of things</Title>
      </InnerSelfPromotionHeader>
      <HeaderLogo />
    </SelfPromotionHeader>
  </HeaderContainer>
);

export default Header;
