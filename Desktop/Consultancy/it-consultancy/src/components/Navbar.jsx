import { Diversity2 } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 5px;
`
const LogoContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
const Logo = styled.div`
  
`
const LogoText = styled.h3`
    margin-left: 20px;
`
const List = styled.ul`
   display: flex;
   align-items: center;
   column-gap: 20px;
`
const ListItem = styled.li`
   color: #11233d;
   font-weight: 600;
`


const Navbar = () => {
  return (
    <Container>
        <LogoContainer>
          <Logo>
            <Diversity2/>
          </Logo>
          <LogoText>CSP Tech</LogoText>
        </LogoContainer>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Contact</ListItem>
        </List>
    </Container>
  )
}

export default Navbar