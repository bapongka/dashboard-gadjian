import { Navbar, Container, Nav, Button, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, render } from "react";
import { withRouter } from "react-router";
import { ImHome } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavigationSide = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-side">
        <Container>
          <Nav defaultActiveKey="/home" className="flex-column nav-side">
            <Nav.Link href="/" className="side-txt">
              <ImHome />
              Beranda
            </Nav.Link>
            <Nav.Link href="/" className="side-txt">
              <BsFillPersonLinesFill />
              Personnel List
            </Nav.Link>
            <Nav.Link href="/" className="side-txt">
              <FaCalendarAlt />
              Daily Attendance
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
  // const NavigationSide = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // return (
  //   <>
  //     <Button variant="info" onClick={handleShow}>
  //       Launch
  //     </Button>
  //     <Offcanvas show={show} onHide={handleClose}>
  //       <Offcanvas.Header closeButton></Offcanvas.Header>
  //       <Offcanvas.Body>
  //         <Offcanvas.Title>
  //           <i class="bi bi-house-fill"> </i> Beranda
  //         </Offcanvas.Title>
  //         <Offcanvas.Title>
  //           <i class="bi bi-people-fill"> </i> Personnel List
  //         </Offcanvas.Title>
  //         <Offcanvas.Title>
  //           <i class="bi bi-calendar3"> </i>Daily Attendance
  //         </Offcanvas.Title>
  //       </Offcanvas.Body>
  //     </Offcanvas>
  //   </>
  // );

  // function Example() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Button variant="primary" onClick={handleShow}>
  //         Toggle static offcanvas
  //       </Button>

  //       <Offcanvas show={show} onHide={handleClose} backdrop="static">
  //         <Offcanvas.Header closeButton>
  //           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
  //         </Offcanvas.Header>
  //         <Offcanvas.Body>I will not close if you click outside of me.</Offcanvas.Body>
  //       </Offcanvas>
  //     </>
  //   );
  // }

  // render(<Example />);
};
export default NavigationSide;
// export default render;

// const Side = (props) => {
//   return (
//     <>
//       <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
//         <div className="sidebar-sticky"></div>
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </>
//   );
// };
// const Sidebar = withRouter(Side);
// export default Sidebar;
