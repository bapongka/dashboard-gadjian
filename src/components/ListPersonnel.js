import { Card, Container, Row, Col, Image } from "react-bootstrap";
// import user from "../assets/images/user.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [personnels, setPersonnels] = useState([]);
  const getPersonnels = async () => {
    try {
      const response = await axios.get(" https://randomuser.me/api/?results=28 ");
      setPersonnels(response.data.results);
      console.log(response.data.results);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPersonnels();
  }, []);

  return (
    <div>
      <Container fluid className="d-flex">
        {personnels.slice(0, 4).map((personnel, index) => {
          return (
            <Card className="cardContainer" key={index}>
              <Card.Header className="cardHeader">
                <a>
                  Personel ID :<span className="personelID">{personnel.id.value}</span>
                </a>
                <HiDotsHorizontal className="PersonelIcon" />
              </Card.Header>
              <Card.Body>
                <Image className="PersonelProfile" src={personnel.picture.medium} roundedCircle />
                <Container className="PersonelDetail" fluid>
                  <Card.Title className="PersonelDetailTitle">Name</Card.Title>
                  <Card.Text>
                    {personnel.name.first}
                    {personnel.name.last}
                  </Card.Text>
                  <Card.Title className="PersonelDetailTitle">Telephone</Card.Title>
                  <Card.Text>{personnel.phone}</Card.Text>
                  <Card.Title className="PersonelDetailTitle">Birthday</Card.Title>
                  <Card.Text>{personnel.dob.date}</Card.Text>
                  <Card.Title className="PersonelDetailTitle">Email</Card.Title>
                  <Card.Text>{personnel.email}</Card.Text>
                </Container>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default List;
