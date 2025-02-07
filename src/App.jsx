import React from 'react';
import { Container, Card } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Lorem ipsum dolor sit amet</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae commodi tempora
                voluptates eos maxime inventore suscipit ipsum reiciendis.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Lorem ipsum dolor sit amet</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae commodi tempora
                voluptates eos maxime inventore suscipit ipsum reiciendis.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default App;
