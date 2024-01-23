import styled from "styled-components"
import Card from "./Card"

const Container = styled.div`
  
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const Services = () => {
  return (
   <Container>
     <Wrapper>
         <Card/>
     </Wrapper>
   </Container>
  )
}

export default Services