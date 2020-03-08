import React from 'react'
import { Container } from 'reactstrap'
import './App.css'
import { Jumbo } from './Components/Jumbo'
import { ContactForm } from './Components/ContactForm'



function App() {

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

      </Container>
      <ContactForm />
    </div >
  )
}

export default App;
