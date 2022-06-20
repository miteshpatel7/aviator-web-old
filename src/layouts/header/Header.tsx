import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ForgotPassword from "../../models/ForgotPassword";
import LoginModel from "../../models/LoginModel";
import Registration from "../../models/Registration";

const Header: React.FC = () => {

    const [registrationModel, setRegistrationModel] = useState(false)
    const [loginModel, setLoginModel] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
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
                            <button className="log-in-btn" onClick={() => setLoginModel(!loginModel)}>Log In</button>
                            <button className="Registration" onClick={() => setRegistrationModel(!registrationModel)}>Registration</button>
                        </Nav>
                    </div>
                    {/* </Container> */}
                </Navbar>
            </div>

            {registrationModel && <Registration show={registrationModel} onHide={() => setRegistrationModel(false)} openLoginModel={() => { setRegistrationModel(false); setLoginModel(true) }} />}
            {loginModel && <LoginModel show={loginModel} onHide={() => setLoginModel(false)} openRegisterModal={() => { setLoginModel(false); setRegistrationModel(true) }} openForgotPass={() => { setLoginModel(false); setForgotPassword(true) }} />}
            {forgotPassword && <ForgotPassword show={forgotPassword} onHide={() => setForgotPassword(false)} backToLoginModel={() => { setForgotPassword(false); setLoginModel(true) }} />}
        </>
    );
};

export default Header;

