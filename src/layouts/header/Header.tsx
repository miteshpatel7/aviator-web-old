import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Registration from "../../models/Registration";

const Header: React.FC = () => {

    const [registrationModed, setRegistrationModed] = useState(false)
    return (
        <>
            <div className="position-fixed header">
                <Navbar>
                    {/* <Container style={{justifyContent:"space-between"}}> */}
                    <div className="d-flex justify-content-between w-100 header-content">
                        <h2>Logo</h2>
                        <Nav className="ms-auto nav_link">
                            <Nav.Link href="#" className="active_tabs">Home</Nav.Link>
                            <Nav.Link href="#" className="disable_tabs">Features</Nav.Link>
                            <button className="log-in-btn">Log In</button>
                            <button className="Registration" onClick={() => setRegistrationModed(!registrationModed)}>Registration</button>
                        </Nav>
                    </div>
                    {/* </Container> */}
                </Navbar>
            </div>

            {registrationModed && <Registration show={registrationModed} onHide={() => setRegistrationModed(false)} />}
        </>
    );
};

export default Header;

