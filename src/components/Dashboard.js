import { Card, Container } from "react-bootstrap";

const DashboardBar = () => {
  return (
    <div>
      <Container>
        <Card style={{ width: "80rem" }}>
          <Card.Body>
            <Card.Title className="title">PERSONNEL LIST</Card.Title>
            <Card.Subtitle className=" cardlist mb-2 text-muted">List off all personnel</Card.Subtitle>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
};

export default DashboardBar;
