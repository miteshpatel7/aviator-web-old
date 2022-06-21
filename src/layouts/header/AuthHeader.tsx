import { useState } from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import Balancemodal from "../../components/Balancemodal";
import Usermodal from "../../components/Usermodal";
// import Balanceicon from 'assets/img/Vector.svg'

const AuthHeader: React.FC = () => {

  const [balance, setBalance] = useState(false);
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <div className="position-fixed header">
        <Navbar>
          <div className="d-flex justify-content-between w-100 header-content">
            <h2>Logo</h2>
            <Nav className="ms-auto nav_link">
              <Nav.Link href="#" className="active_tabs">Home</Nav.Link>
              <Nav.Link href="#" className="disable_tabs">Aviator</Nav.Link>
              <Nav.Link href="#" className="disable_tabs add-balance d-flex align-items-center gap-2" onBlur={()=>setBalance(false)} onClick={() => setBalance(!balance)}>Balance
                <img src='./assets/img/Vector.svg' alt="" />
                <p className="mb-0 ms-3 active_tabs">₹ 0.00</p>
              </Nav.Link>
              <button className="user-btn add-balance" onBlur={()=> (setUserModal(false))} onClick={()=>setUserModal(!userModal)}><img src="./assets/img/User.png" alt="" />
              </button>
              <button className="Registration" onClick={() => { }}>Deposit</button>
            </Nav>
          </div>
        </Navbar>
      </div>
      {
        balance && <Balancemodal show={balance} onHide={() => setBalance(false)} />
      }
      {
        userModal && <Usermodal show={userModal} onHide={() => setUserModal(false)}/>
      }
    </>
  );
};

export default AuthHeader;
