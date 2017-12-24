import React from 'react';
import {
  HeaderContainer,
  LinkContainer,
  A,
  SelfPromotionHeader,
  InnerSelfPromotionHeader,
  Logo,
  ScottGangemi,
  Title,
  PersonalDetail,
} from './styled';

const Header = () => (
  <HeaderContainer>
    <LinkContainer>
      <A href="https://www.github.com/Gangezilla">Github</A>
      <A href="https://www.linkedin.com/in/scott-gangemi-18146198/">LinkedIn</A>
      <PersonalDetail>0431 987 232</PersonalDetail>
      <PersonalDetail>s.gangemi@me.com</PersonalDetail>
    </LinkContainer>
    <SelfPromotionHeader>
      <InnerSelfPromotionHeader>
        <ScottGangemi>Scott Gangemi</ScottGangemi>
        <Title>Maker of things, breaker of things</Title>
      </InnerSelfPromotionHeader>
      <Logo />
    </SelfPromotionHeader>
  </HeaderContainer>
);

export default Header;
