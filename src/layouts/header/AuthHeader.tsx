import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
// import Balanceicon from 'assets/img/Vector.svg'

const AuthHeader: React.FC = () => {

  return (
    <>
      <div className="position-fixed header">
        <Navbar>
          <div className="d-flex justify-content-between w-100 header-content">
            <h2>Logo</h2>
            <Nav className="ms-auto nav_link">
              <Nav.Link href="#" className="active_tabs">Home</Nav.Link>
              <Nav.Link href="#" className="disable_tabs">Aviator</Nav.Link>
              <Nav.Link href="#" className="disable_tabs add-balance d-flex align-items-center gap-2">Balance
                <img src='./assets/img/Vector.svg' alt="" />
                <p className="mb-0 ms-3 active_tabs">₹ 0.00 </p>
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
              </Nav.Link>
              <button className="user-btn add-balance"><img src="./assets/img/User.png" alt="" />
                <span className="tooltiptext" style={{width:"200px", textAlign:"right"}}>
                  <h5>Withdrawal</h5>
                  <h5>Transfer</h5>
                  <h5>Bets History</h5>
                  <h5>Settings</h5>
                  <h5>Log Out</h5>
                </span>
              </button>
              <button className="Registration" onClick={() => { }}>Deposit</button>
            </Nav>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default AuthHeader;
