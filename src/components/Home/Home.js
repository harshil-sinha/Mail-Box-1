import { MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import React from 'react';
import { signOut } from 'firebase/auth';
import { database } from '../../firebase';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Home = () =>{
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(()=>{
            alert("Logout Successfully")
            history("/login")
        }).catch((err)=>{
            alert(err.code);
        })
    }
    return (
        <>
         <MDBContainer className="my-2 text-end">
         <MDBRow>
         <MDBCol>
         <Button variant="primary" onClick={handleClick}>LogOut</Button>
         </MDBCol>
         </MDBRow>
         </MDBContainer>
        <MDBContainer fluid className="my-2">
            <MDBRow>
            <MDBCol>
            <h3 className='text-center'>Welcome to Mail Box Client</h3>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Home;
