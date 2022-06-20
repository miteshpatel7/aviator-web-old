import { Nav, Navbar } from "react-bootstrap";

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
              <Nav.Link href="#" className="disable_tabs add-balance d-flex align-items-center gap-2">Balance <img src="./assets/img/Vector.svg" alt="" />
                <p className="mb-0 ms-3 active_tabs">₹ 0.00 </p>
                <span className="tooltiptext">
                  <p>Balance</p>
                  <p>Tooltip text</p>
                  <p>Tooltip text</p>
                  <p>Tooltip text</p>
                </span>
              </Nav.Link>
              <button className="user-btn"><img src="./assets/img/User.png" alt="" /></button>
              <button className="Registration" onClick={() => { }}>Deposit</button>
            </Nav>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default AuthHeader;
