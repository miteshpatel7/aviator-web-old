import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Registration from './Registration';


interface Props {
    onHide: () => void;
    openRegisterModal: () => void;
    openForgotPass: () => void;
    show?: boolean;
}

const LoginModel: React.FC<Props> = ({ show, onHide, openRegisterModal, openForgotPass }) => {

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: any, name: string) => {
        if (name === "email" || name === "password") {
            setLogin({ ...login, [name]: e.target.value })
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="p-5 registration-model"
                backdrop="static"
            >
                <Modal.Header closeButton className='registration-model-header'>
                    Log In
                </Modal.Header>
                <Modal.Body>
                    <div className="registration-model-body">
                        <input type="text" placeholder='E-mail / Phone' className='mt-3' value={login.email} onChange={(e) => handleChange(e, "email")} />
                        <input type="text" placeholder='Password' className='mt-3' value={login.password} onChange={(e) => handleChange(e, "password")} />
                        <h6 onClick={() => openForgotPass()}>Forgot Password?</h6>
                        <button className='registra-btn btn-bg-color'>Log In</button>
                        <p>Still no account? <span onClick={() => openRegisterModal()}>Register</span></p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginModel