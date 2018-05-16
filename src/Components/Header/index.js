import React from 'react';
import resume from '../PersonalSummary/resume.pdf';
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
      <A target="_blank" href="https://www.github.com/Gangezilla">Github</A>
      <A target="_blank" href="https://www.linkedin.com/in/scott-gangemi-18146198/">LinkedIn</A>
      <span>0431 987 232</span>
      <span>s.gangemi@me.com</span>
      <A target="_blank" href={resume}>Resume</A>
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
