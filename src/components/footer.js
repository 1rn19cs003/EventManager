import React from "react";
// import SimpleReactFooter from "simple-react-footer";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styled from 'styled-components';
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, } from '@fortawesome/free-solid-svg-icons'
import{Container,Nav} from 'react-bootstrap';

library.add(fab, faCheckSquare, faCoffee)


function footer(){
    return (
        <div>
            <Container className="text-bottom">
            <MDBFooter color="green" className="font-small pt-6 mt-5 py-8" >
                <MDBContainer fluid className="text-center text-md-left py-2" style={{
                    height: '10em',
                    textAlign: 'center',
                    fontSize: '1em',
                    bottom: '0',
                    margin:'0'
                    
                     }}>
                    <MDBRow>
                        <MDBCol md="0">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </MDBCol>
                        <MDBCol md="7">
                            <Nav className="justify-content-center" >
                                <Nav.Item>
                                    <Nav.Link href="!#"><FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="!#"><FontAwesomeIcon icon={['fab', 'facebook']} /> Facebook</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="!#"><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinekedIn</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="!#"><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="!#"><FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item> */}
                            </Nav>



                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-4">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://1rn19cs003.github.io/abhishekjaiswal/"> uknown.org </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
            </Container>
        </div>
    );
}
export default footer;