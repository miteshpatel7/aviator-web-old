import React from 'react'
import { Modal } from 'react-bootstrap';


interface Props {
    onHide: () => void;
    backToLoginModel: () => void;
    show?: boolean;
}
const ForgotPassword: React.FC<Props> = ({ show, onHide, backToLoginModel }) => {
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
                    Forgot Password
                </Modal.Header>
                <Modal.Body>
                    <div className="registration-model-body">
                        <input type="text" placeholder='E-mail / Phone' className='mt-3' />
                        <button className='registra-btn btn-bg-color mt-5'>Send</button>
                        <button className='registra-btn border-none' onClick={() => backToLoginModel()}>Back</button>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ForgotPassword