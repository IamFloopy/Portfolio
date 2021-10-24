import styled from 'styled-components';

export const Img = styled.img`
    border-radius: 7px 7px 0px 0px;
    position: relative;
  width:100%;
  height:23rem;
  left: 0rem;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 3rem;
place-items: center;
column-gap: 5rem;
row-gap: 4rem;
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  left: 0;
}
`
export const BlogCard = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 560px;
  height: 800px;
  transition: transform .2s;
  transform: scale(.92);
  &:hover {
    transform: scale(.94);
  }
  @media screen and (max-width: 768px) {
    transform: scale(0.6);
    margin-top: -8.5rem;
    margin-bottom: -10.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      transform: scale(0.62);
    }
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: rgb(105, 224, 181);
  padding: .5rem 0;
  font-size:  3rem;
  margin-top: 1.4rem;
  margin-bottom: 2.5rem;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 81%;
  padding: 0 50px;
  color: white;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 1rem;
list-style-type: none;
`
export const Tag = styled.li`
color: rgb(92, 151, 206);
font-size: 1.5rem;
`
export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;

    margin: 8rem 0rem -2rem;
    @media screen and (max-width: 768px) {
      margin: 3rem 0rem 0rem;
    width: 32px;
    height: 2px;
  }
`
export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 75px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  color: white;
  margin-bottom: 30px;
  margin-top: 40px;
  margin-left: -3rem;
  padding: 58px 0 16px;
  @media screen and (max-width: 768px){
    margin-left: 0rem;
    font-size: 42px;
    line-height: 40px;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 18px;
    padding: 16px 0 8px;
    max-width: 100%;
  }
`
export const Link = styled.a`
    text-decoration: none;
`
export const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(23, 53, 42);
    height: 140%;
 
`
export const Background = styled.div`
    background-color: rgb(23, 53, 42);
    margin-bottom: -0.5rem;
    @media screen and (max-width: 768px){
      padding-bottom: 0rem;
    }
`
export const Stack = styled.div`
    color: white;
    font-size: 1.5rem;
    margin-bottom: ;
`
export const Tech = styled.div`
  position: absolute;
  bottom: 1%;
  left: 0%;
  right: 0%;
`

