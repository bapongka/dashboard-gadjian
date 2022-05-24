import { Navbar, Image } from "react-bootstrap";
import logo from "../assets/images/logo1.png";
// import user from "../assets/images/user.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NavigationTop = () => {
  const [personnels, setPersonnels] = useState([]);
  const getPersonnels = async () => {
    try {
      const response = await axios.get(" https://randomuser.me/api/?results=28 ");
      setPersonnels(response.data.results);
      // console.log(response.data.results);
    } catch (e) {
      // console.log(e.message);
    }
  };

  useEffect(() => {
    getPersonnels();
  }, []);

  return (
    <div>
      {personnels.slice(0, 1).map((personnel, index) => {
        return (
          <Navbar bg="white" className="navbar" key={index}>
            <Navbar.Brand href="#home">
              <Image src={logo} alt="Gajian Logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="nav-txt">
                Hallo, <span className="nav-span">Gadjian User</span>
              </Navbar.Text>
              <Navbar.Text>
                {/* <Image src={user} alt="Gajian Logo" className="user-img" /> */}
                <Image className="PersonelProfile" src={personnel.picture.medium} roundedCircle />
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        );
      })}
    </div>
  );
};

export default NavigationTop;
