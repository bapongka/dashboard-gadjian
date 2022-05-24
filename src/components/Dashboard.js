import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { ImPlus } from "react-icons/im";

const DashboardBar = () => {
  return (
    <div>
      {/* <Container>
        <Card style={{ width: "62.3rem" }}>
          <Card.Body>
            <Card.Title className="title">PERSONNEL LIST</Card.Title>
            <Card.Subtitle className=" cardlist mb-2 text-muted">List off all personnel</Card.Subtitle>
          </Card.Body>
        </Card>
      </Container> */}
      <Container fluid>
        <Card style={{ width: "62.3rem" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="title">Personnel List</Card.Title>
                <Card.Subtitle className=" cardlist mb-2 text-muted">List off all personnel</Card.Subtitle>
              </Col>
              <Col md="auto">
                <Form className="SearchInput">
                  <Form.Control type="search" placeholder="Find Personnel" className="me-2" aria-label="Search" />
                </Form>
              </Col>
              <Col md="auto">
                <Button className="btn-add" variant="info">
                  Add Personnel <ImPlus className="btn-icon" />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
};

export default DashboardBar;
