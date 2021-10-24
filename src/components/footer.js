import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import { Logo, Background, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from '../styles/footerStyles';

const Footer = () => {
  return (
    <Background id="footer">
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="">
            xfilipxfilipx@gmail.com
          </LinkItem>
        </LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="">+420 775 492 079</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <LinkItem href="https://github.com/IamFloopy">
            github.com/IamFloopy
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Instagram</LinkTitle>
          <LinkItem href="https://www.instagram.com/_filipnguyen_">
           www.instagram.com/_filipnguyen_
          </LinkItem>
        </LinkColumn>
        </LinkColumn>
        <Logo>Filip</Logo>
      </LinkList>
    </FooterWrapper>
    </Background>
  );
};

export default Footer;