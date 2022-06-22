import React, { useEffect, useState } from 'react'
import { DropdownButton, Form, InputGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../redux/actions/registerAction';
import { REGISTER } from '../redux/types';

interface Props {
    onHide: () => void;
    show?: boolean;
    openLoginModel: () => void;
}

interface Register {
    name: string,
    mobile: string,
    email: string,
    password: any,
    term: boolean,
}

const Registration: React.FC<Props> = ({ show, onHide, openLoginModel }) => {

    const dispatch = useDispatch()
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const [register, setRegister] = useState<Register>({
        name: "Indian Rupee",
        mobile: "",
        email: "",
        password: "",
        term: false,
    })
    const [btn, setBtn] = useState<boolean>(false)

    const registerData = useSelector((state: any) => state.registerData.register)

    const handleChange = (e: any, name: string) => {
        setBtn(false)
        let numberReg = /^[0-9\b]+$/;
        if (name === "name") {
            setRegister({ ...register, [name]: e.target.value })
        } else if (name === "mobile") {
            if (e.target.value === "" || numberReg.test(e.target.value)) {
                setRegister({ ...register, [name]: e.target.value })
            }
        } else if (name === "email") {
            setRegister({ ...register, [name]: e.target.value })
        } else if (name === "password") {
            setRegister({ ...register, [name]: e.target.value })
        } else if (name === "term") {
            setRegister({ ...register, [name]: e.target.checked })
        }
    }

    useEffect(() => {
        if (register.mobile.length > 9 && emailReg.test(register.email) && register.password.length > 7 && register.term) {
            setBtn(true)
        }
    })

    const submit = () => {
        // if (validation()) {
        //     return
        // }
        if (btn) {
            let body = {
                name: register.name,
                password: register.password,
                mobile: register.mobile,
                email: register.email
            }
            dispatch(registerAction(body))
        }
    }

    useEffect(() => {
        if (registerData && registerData.status === 200) {
            // dispatch({
            //     type: REGISTER,
            //     payload: []
            // })
            onHide()
        }
    }, [registerData])


    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="p-5 registration-model"
            backdrop="static"
        >
            <Modal.Header closeButton className='registration-model-header'>
                Registration
            </Modal.Header>
            <Modal.Body>
                <div className="registration-model-body">
                    {/* <input type="text" placeholder='Name' className='mt-3' value={register.name} onChange={(e) => handleChange(e, "name")} /> */}
                    <input type="text" placeholder='Name' className='mt-3' value={register.name} disabled />
                    <InputGroup className="mt-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title="+91"
                            id="input-group-dropdown-1"
                        >
                            {/* <Dropdown.Item href="">+93</Dropdown.Item>
                            <Dropdown.Item href="">+42</Dropdown.Item>
                            <Dropdown.Item href="">+99</Dropdown.Item>
                            <Dropdown.Item href="">+81</Dropdown.Item> */}
                        </DropdownButton>
                        <Form.Control aria-label="Text input with dropdown button" placeholder='9632588525' maxLength={10} value={register.mobile} onChange={(e) => handleChange(e, "mobile")} />
                    </InputGroup>
                    <input type="text" placeholder='E-mail' className='mt-3' value={register.email} onChange={(e) => handleChange(e, "email")} />
                    <input type="text" placeholder='Password' className='mt-3' value={register.password} onChange={(e) => handleChange(e, "password")} />
                    <div className='align-items-center mt-3 condition'>
                        <input type="checkbox" placeholder='Password' className='chechbox_input' checked={register.term} onChange={(e) => handleChange(e, "term")} />
                        <label htmlFor="" className='ms-2'>I agree with 1win website </label>
                    </div>
                    <button className={btn ? "btn-bg-color registra-btn" : 'registra-btn'} onClick={() => submit()}>Registration</button>
                    <p>Already have an account? <span onClick={() => openLoginModel()}>Login</span></p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Registration