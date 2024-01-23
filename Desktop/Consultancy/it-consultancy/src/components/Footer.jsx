import styled from "styled-components"

const Container = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;
const Year = styled.input`
   width: 30px;
   border: none;
   outline: none;
   background-color: #333;
   color: white;
   font-size: 13px;
`

const Footer = () => {

    const showDate = new Date();
    const currentDate = showDate.getFullYear();

  return (
    <Container>
      <FooterText>&copy; <Year type="text" value= { currentDate } readOnly= "true" /> 
       CSP Tech Company</FooterText>
    </Container>
  )
}

export default Footer