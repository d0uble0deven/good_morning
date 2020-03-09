import React from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import useInput from '../Hooks/HandleInput'
import vibes from '../Data/Data'
import '../App.css'

export function ContactForm() {
    const { value: valueName, bind: bindName, reset: resetName } = useInput('')
    const { value: valueNumber, bind: bindNumber, reset: resetNumber } = useInput('')

    const randomVibe = () => {
        // logic for finding random vibe from export data
        // later => feed into Twilio sms api
        let idx = Math.floor(Math.random() * Math.floor(vibes.length))
        let random = vibes[idx]
        alert(random)
        console.log(random)
        return random
    }

    const handleSubmit = (event, random) => {
        event.preventDefault()
        randomVibe()
        alert(`This is the what was inputted: ${valueName} ${valueNumber}`)
        resetName()
        resetNumber()
    }
    return (

        <div>
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text"
                        name="name"
                        {...bindName}
                        placeholder="Jane Doe" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number: </Label>
                    <Input type="text"
                        name="number"
                        {...bindNumber}
                        placeholder="000-000-0000" />
                </FormGroup>

                <Button outline color="primary">submit</Button>

            </Form>
        </div>
    )
}


