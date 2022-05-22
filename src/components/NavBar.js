import { Navbar, Image } from "react-bootstrap";
import logo from "../assets/images/logo1.png";
import user from "../assets/images/user.jpg";

const NavigationTop = () => {
  return (
    <div>
      <Navbar bg="white" className="navbar">
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Gajian Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-txt">
            Hallo, <span className="nav-span">Gadjian User</span>
          </Navbar.Text>
          <Navbar.Text>
            <Image src={user} alt="Gajian Logo" className="user-img" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationTop;
