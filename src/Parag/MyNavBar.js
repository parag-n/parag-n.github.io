import "../App.css"
import { BsFillSunFill } from "react-icons/bs"
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
export default function MyNavBar() {
    return (<div >
        <Navbar style={{ padding: "10px" }} bg="secondary" expand="sm">
            <BsFillSunFill style={{ margin: "20px", scale: "2" }} className="App-logo" color="gold"></BsFillSunFill>
            <Navbar.Brand href="/">PARAG NUKALWAR</Navbar.Brand>

            <NavDropdown title="My Works">
                <NavDropdown.Item href="Compound_Interest_Calculator">Compound Interest Calculator</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    </div>)
}
