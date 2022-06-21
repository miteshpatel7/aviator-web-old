import React from 'react'

interface Props {
    onHide: () => void;
    show?: boolean;
}
const Usermodal: React.FC<Props> = ({ show, onHide }) => {
    return (
        <div className="add-balance">
            <span className="tooltiptext" style={{ width: "200px", textAlign: "right", left:"75%" }}>
                <h5>Withdrawal</h5>
                <h5>Transfer</h5>
                <h5>Bets History</h5>
                <h5>Settings</h5>
                <h5>Log Out</h5>
            </span>
        </div>
    )
}

export default Usermodal