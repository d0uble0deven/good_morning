import React from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import '../App.css'

export function ContactForm() {
    const handleSubmit = (event) => {
        console.log('hi')
        event.preventDefault()
    }
    return (

        <div>
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text" name="name" id="exampleName" placeholder="Jane Doe" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number: </Label>
                    <Input type="text" name="number" id="exampleNumber" placeholder="000-000-0000" />
                </FormGroup>

                <Button outline color="primary">submit</Button>

            </Form>
        </div>
    )
}


