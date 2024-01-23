import styled from "styled-components"

const Container = styled.div`
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`
const ImgContainer = styled.div`
    flex: 1;
    padding: 10px;
    object-fit: contain;
`
const Image = styled.img`
    width: 100%;
`
const AboutContainer = styled.div`
    flex: 1;
`
const Title = styled.h2`
    color: #c41d39;
    line-height: 22px;
    margin: 10px 0;
`
const Description = styled.p`
    width: 80%;
    font-size: 0.7em;
`
const Button = styled.button`
    background: #142847;
    color: white;
    padding: 4px 20px;
    text-align: center;
    border-radius: 15px;
    border: none;
`

const About = () => {
  return (
    <Container>
       <Wrapper>
        <ImgContainer>
           <Image src="/ITservices.jpg" />
        </ImgContainer>
        <AboutContainer>
            <Title>Choose the Best IT Service Company</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis tempore mollitia quas assumenda
                 libero ea, ex ullam asperiores similique, et dolorem ut quia facilis?
            </Description>
            <Button>about Us</Button>
        </AboutContainer>
        </Wrapper> 
    </Container>
  )
}

export default About