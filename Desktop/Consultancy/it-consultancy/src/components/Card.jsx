import styled from "styled-components"

const Container = styled.div`
   
    margin: 0 0 20px 0;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5eeee;
    border-radius: 5px;
    box-shadow: -3px 3px 9px gray;
    margin: 20px 0;
`
const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    flex-direction: column;
`
const ItemTitle = styled.h2`
    font-weight: 600;
`
const Image = styled.img`
     width: 100%;
     height: 100%;
     object-fit: contain;
     margin: 10px;
`
const ItemDescription = styled.p`
     width: 80%;
     flex-wrap: wrap;
     text-align: center;
`
const Anchor = styled.a`
  
`

const Card = () => {
  return (
    <Container>
            <Wrapper>
              <ContainerItem>
               <Image src="/desktop.jpg"  />
               </ContainerItem>
               <ContainerItem>
               <ItemTitle>Laptop Repair</ItemTitle>
               <ItemDescription>Let us fix it for you
               </ItemDescription>
               <Anchor>Learn more</Anchor>
               </ContainerItem>
            </Wrapper>
            <Wrapper>
               <ContainerItem>
               <ItemTitle>Buy from us</ItemTitle>
               <ItemDescription>Need a new laptop? Need more space? We got you covered!
               </ItemDescription>
               <Anchor>Learn more</Anchor>
               </ContainerItem>
               <ContainerItem>
               <Image src="/laptops.jpg"  />
               </ContainerItem>
            </Wrapper>
            <Wrapper>
              <ContainerItem>
               <Image src="/cctv.jpg"  />
               </ContainerItem>
               <ContainerItem>
               <ItemTitle>Let us protect you</ItemTitle>
               <ItemDescription>We sell and install CCTV cameras 
               </ItemDescription>
               <Anchor>Learn more</Anchor>
               </ContainerItem>
            </Wrapper>
            <Wrapper>
               <ContainerItem>
               <ItemTitle>Visit for help with IT challenges</ItemTitle>
               <ItemDescription>We assist in software installations, VPN services and other IT 
                challenges
               </ItemDescription>
               <Anchor>Learn more</Anchor>
               </ContainerItem>
              <ContainerItem>
               <Image src="/desktop.jpg"  />
               </ContainerItem>
            </Wrapper>
    </Container>
  )
}

export default Card