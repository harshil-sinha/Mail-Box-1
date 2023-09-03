import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../Navbar/Navbar2.css"

const Navbar2 = () =>{
    return (
        <>
           <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home"> 📧 Mail Box Client</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink to='/signup' className='bar'>SignUp</NavLink>
                <NavLink to='/login' className='bar'>Login</NavLink>
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}
export default Navbar2;
