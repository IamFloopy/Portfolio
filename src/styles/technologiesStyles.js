import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  color: white;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 12px 0;
    margin-left: -3rem;
    margin-bottom: -3rem;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;
@media screen and (max-width: 768px){
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
@media screen and (max-width: 768px) {
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(23, 53, 42);
  @media screen and (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    z-index: -10;
  }
`
export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;

    margin: 5rem 0rem 1rem;
    @media screen and (max-width: 768px) {
        margin-top: 6rem;
    width: 32px;
    height: 2px;
  }
`
export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 768px) {
    margin-left: 1.8rem;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    width: 85%;
  }
`
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  color: white;
  margin-bottom: 16px;
  margin-top: 0rem;
  padding: 58px 0 16px;
  @media screen and (max-width: 768px) {
    line-height: 40px;
    font-size: 38px;
    line-height: 32px;
    margin-bottom: 8px;
    padding: 16px 0 8px;
    max-width: 100%;
  }
`