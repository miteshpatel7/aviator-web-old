import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
interface Props {
    onHide: () => void;
    show?: boolean;
}

const Balancemodal: React.FC<Props> = ({ show, onHide }) => {
    return (
        <div className="add-balance">
            <span className="tooltiptext">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Balance</p>
                    <div className="add-balance-icon">
                        <img src="./assets/img/pluse.png" alt="" />
                    </div>
                </div>
                <InputGroup size="lg" className="mt-4">
                    <InputGroup.Text id="inputGroup-sizing-lg"><img src="./assets/img/rupya.png" alt="" /></InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <Button className="wallet-management">Wallet Management</Button>
            </span>
        </div>
    )
}

export default Balancemodal