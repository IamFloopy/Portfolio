import React from 'react';
import img1 from '../projectImages/Homies.png';
import img2 from '../projectImages/Moneyz.PNG';
import img3 from '../projectImages/portfolio.PNG';

import { SectionDivider, Background, BlogCard, CardInfo, GridContainer, HeaderThree, Tag, TagList, TitleContent, Link, Img, Section, SectionTitle, Stack, Tech } from '../styles/projectsStyles';

const projects = [
    {
      title: 'Real Time Video Watching App',
      description: "Application, where you can watch, react to and chat about movies and videos with friends. Using WebRTC, Express and PeerJS.",
        image: img1,
        tags: ['WebRTC', 'Express', 'Peer.js', 'Socket.io'],
      visit: 'https://me-and-the-homies.herokuapp.com/',
      id: 0,
    },
    {
      title: 'E-Commerce Site',
      description:"Online store using react framework, commerce.js to store all merchandise for sale and stripe for handling payments. Deployed using netlify.",
      image: img2,
      tags: ['React', 'Commerce.js', 'Stripe'],
      visit: 'https://givemoneyz.netlify.app/',
      id: 1,
    },
    {
      title: 'Portfolio Website',
      description: "Website featuring parallax scrolling effect in the header using css and React. Also taking advantage of material-UI and styled-components",
        image: img3,
        tags: ['React'],
      visit: 'https://google.com',
      id: 2,
    },
  ];

const Projects = () => (
  <Background>
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
        <Link href={p.visit}>
          <BlogCard key={i} className='cardHover'>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <Tech>
              <Stack>Stack</Stack>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </Tech>
          </BlogCard>
        </Link>
        );
      })}
    </GridContainer>
  </Section>
  </Background>
);

export default Projects;
