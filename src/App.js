import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Button,Alert,Breadcrumb, Card, Form} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        
    <Form>
    <Row>
    <Col md>
      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Example@email.com"/>
        <Form.Text className="text-muted">
          We'll never share you email address, turust us!
        </Form.Text>
      </Form.Group>
      </Col>
      <Col md>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="****"/>
      </Form.Group>
      </Col>
     
     
      </Row>
      <Button variant="secondry" type="submit" style={{color:"#ffff"}}>Login</Button>
    </Form>

      
      {/**  * Card bootstrap yapısı aşşağıdaki gibidir.      */}
      
       <Card className="mb-3" style={{backgroundColor:'black'}}>
        <Card.Img src="https://picsum.photos/200/100"/>
        <Card.Body>
          <Card.Title> Card Example </Card.Title>
          <Card.Text>
           This is an example of react bootstrap cards
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
       </Card>

        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This a button</Alert>
       
       
        </Container>
      </header>
    </div>
  );
}

export default App;
