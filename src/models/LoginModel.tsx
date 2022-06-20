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
    const [registrationModel, setRegistrationModel] = useState(false)
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="p-5 registration-model"
            >
                <Modal.Header closeButton className='registration-model-header'>
                Log In
                </Modal.Header>
                <Modal.Body>
                    <div className="registration-model-body">
                        <input type="text" placeholder='Indian Rupee' className='mt-3' />
                        <input type="text" placeholder='Password' className='mt-3' />
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