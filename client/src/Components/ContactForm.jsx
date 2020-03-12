import React from 'react';
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import useInput from '../Hooks/HandleInput';
import vibes from '../Data/Data';
import '../App.css';

export function ContactForm() {
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: phoneNumber, bind: bindNumber, reset: resetNumber } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

    const randomVibe = () => {
        // logic for finding random vibe from export data
        // later => feed into Twilio sms api
        let idx = Math.floor(Math.random() * Math.floor(vibes.length));
        let random = vibes[idx];
        alert(random);
        console.log(random);
        return random;
    };

    const handleSubmit = () => {
        alert(`This is the what was inputted: ${firstName} ${lastName} ${phoneNumber}${email}`);
        randomVibe();
        resetFirstName();
        resetLastName();
        resetNumber();
        resetEmail();
    };

    const validate = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value, inputNumber = bindNumber.value, inputEmail = bindEmail.value) => {
        event.preventDefault();
        const names = /^\D{2,}$/;
        const number = /^\d{3}-\d{3}-\d{4}$/;
        const emails = /[\w-]+@([\w-]+\.)+[\w-]+/;
        if (names.test(inputFirstName) && names.test(inputLastName) && emails.test(inputEmail)) {
            if (number.test(inputNumber)) {
                handleSubmit();
            } else {
                alert('Please follow the 000-000-0000 format.');
            }
        }
        else alert('Please input valid information.');
    };


    // add validate function
    // change onSubmit to validate
    // move preventDefault from handleSubmit
    // add email field for now
    // add first and last name fields
    // change alert from submit fn to validate fn

    return (

        <div>
            <Form onSubmit={validate}>

                <FormGroup>
                    <Label for="name">First Name: </Label>
                    <Input type="text"
                        name="first name"
                        {...bindFirstName}
                        placeholder="Jon" />
                </FormGroup>

                <FormGroup>
                    <Label for="name">Last Name: </Label>
                    <Input type="text"
                        name="last name"
                        {...bindLastName}
                        placeholder="Doe" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number: </Label>
                    <Input type="text"
                        name="number"
                        {...bindNumber}
                        placeholder="000-000-0000" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email: </Label>
                    <Input type="text"
                        name="email"
                        {...bindEmail}
                        placeholder="me@email.com" />
                </FormGroup>

                <Button outline color="primary">submit</Button>

            </Form>
        </div>
    )
}


