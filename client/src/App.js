import React from 'react'
import { Jumbotron, Container, Form, Label, Input, FormGroup, Button } from 'reactstrap'
import './App.css'



function App() {
  return (
    <div className="App">
      <Jumbotron className="jumbo" color="danger">
        <Container >
          <h1 className="display-3">Good Morning</h1>
          <p className="lead">Start your day off in a good mood!</p>

        </Container>
      </Jumbotron>


      <Container className="prime">
        <div >
          <h2>
            Sign Up
      </h2>
          <p >Input your phone number into the form below to receive a text message with a motivational message every morning at 6 AM.</p>
        </div>
        <Form >

          <FormGroup>
            <Label for="name">Name: </Label>
            <Input type="text" name="name" id="exampleName" placeholder="Jane Doe" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleNumber">Phone Number: : </Label>
            <Input type="text" name="number" id="exampleNumber" placeholder="000-000-0000" />
          </FormGroup>
          <Button outline color="primary">submit</Button>
        </Form>
      </Container>
    </div >
  )
}

export default App;
