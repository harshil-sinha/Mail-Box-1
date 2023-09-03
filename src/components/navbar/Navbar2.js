import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import "./Navbar2.css";

const Navbar2 = () =>{
    return (
        <>
           <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home"> 📧 Mail Box Client</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}
export default Navbar2;