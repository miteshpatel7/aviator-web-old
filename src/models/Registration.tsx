import React from 'react'
import { Dropdown, DropdownButton, Form, InputGroup, Modal } from 'react-bootstrap';

interface Props {
    onHide: () => void;
    show?: boolean;
    openLoginModel: () => void;
}

const Registration: React.FC<Props> = ({ show, onHide, openLoginModel }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="p-5 registration-model"
        >
            <Modal.Header closeButton className='registration-model-header'>
                Registration
            </Modal.Header>
            <Modal.Body>
                <div className="registration-model-body">
                    <input type="text" placeholder='Indian Rupee' className='mt-3' />
                    <InputGroup className="mt-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title="+91"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">+93</Dropdown.Item>
                            <Dropdown.Item href="#">+42</Dropdown.Item>
                            <Dropdown.Item href="#">+99</Dropdown.Item>
                            <Dropdown.Item href="#">+81</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control aria-label="Text input with dropdown button" placeholder='9632588525' />
                    </InputGroup>
                    <input type="text" placeholder='E-mail' className='mt-3' />
                    <input type="text" placeholder='Password' className='mt-3' />
                    <div className='align-items-center mt-3 condition'>
                        <input type="checkbox" placeholder='Password' className='chechbox_input' />
                        <label htmlFor="" className='ms-2'>I agree with 1win website </label>
                    </div>
                    <button className='registra-btn'>Registration</button>
                    <p>Already have an account? <span onClick={() =>openLoginModel()}>Login</span></p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Registration