import { Card, Container, Row, Col } from "react-bootstrap";
import user from "../assets/images/user.jpg";
import { HiDotsHorizontal } from "react-icons/hi";

const List = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>
                Personal ID : 123456 <HiDotsHorizontal />
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={user} />
              </Card.Body>
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>First Name Last Name</Card.Text>
                <Card.Title>Telephone</Card.Title>
                <Card.Text>Phone Number</Card.Text>
                <Card.Title>Birthday</Card.Title>
                <Card.Text>DD-MM-YYYY</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>Email Address</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>
                Personal ID : 123456 <HiDotsHorizontal />
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={user} />
              </Card.Body>
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>First Name Last Name</Card.Text>
                <Card.Title>Telephone</Card.Title>
                <Card.Text>Phone Number</Card.Text>
                <Card.Title>Birthday</Card.Title>
                <Card.Text>DD-MM-YYYY</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>Email Address</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>
                Personal ID : 123456 <HiDotsHorizontal />
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={user} />
              </Card.Body>
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>First Name Last Name</Card.Text>
                <Card.Title>Telephone</Card.Title>
                <Card.Text>Phone Number</Card.Text>
                <Card.Title>Birthday</Card.Title>
                <Card.Text>DD-MM-YYYY</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>Email Address</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>
                Personal ID : 123456 <HiDotsHorizontal />
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={user} />
              </Card.Body>
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>First Name Last Name</Card.Text>
                <Card.Title>Telephone</Card.Title>
                <Card.Text>Phone Number</Card.Text>
                <Card.Title>Birthday</Card.Title>
                <Card.Text>DD-MM-YYYY</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>Email Address</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default List;
