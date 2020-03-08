import React from 'react'
import { Jumbotron, Container, Form, Label, Input, FormGroup, Button } from 'reactstrap'
import './App.css'
import { Jumbo } from './Components/Jumbo'



function App() {
  const handleSubmit = (event) => {
    console.log('hi')
    event.preventDefault()
  }
  return (
    <div className="App">

      <Jumbo />
      <Container className="prime">
        <div >
          <h2>
            Sign Up
      </h2>
          <p >Input your phone number into the form below to receive a text message with a motivational message every morning at 6 AM.</p>
        </div>
        <Form onSubmit={handleSubmit}>

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
