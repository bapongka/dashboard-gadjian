import { Navbar, Container, Nav } from "react-bootstrap";
import { FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa";

const NavigationSide = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-side">
        <Container>
          <Nav defaultActiveKey="/home" collapseOnSelect expand="lg" className="flex-column">
            <Nav.Link href="/" className="side-txt">
              <FaHome className="side-icon" />
              Beranda
            </Nav.Link>
            <Nav.Link href="/" className="side-txt">
              <FaUsers className="side-icon" />
              Personnel List
            </Nav.Link>
            <Nav.Link href="/" className="side-txt">
              <FaCalendarAlt className="side-icon" />
              Daily Attendance
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationSide;
