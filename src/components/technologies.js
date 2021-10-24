import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Section, SectionDivider, SectionText, SectionTitle } from '../styles/technologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Experienced with React framework. For backend worked with Django and Node.js. Made apps using WebRtc, Stripe, Express, Socket.io and Peer.js.
      Most skilled in JavaScript, then Python, enough C++ to be able to code in Arduino without any problems and PHP.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript<br/>
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Django  <br />
            Node.js  <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Figma, <br/>
            Postman <br/>
            Adobe Photohop,
            Premiere, <br/>
            After Effects and  
            Animate 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br/>
    <SectionDivider colorAlt />
    <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I'm an 18 year old full-stack developer trying to learn as much about web design as possible. 
      </SectionText>
  </Section>
);

export default Technologies;