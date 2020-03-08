import React from 'react'
import { Jumbotron, Container, Form, Label, Input, FormGroup, Button } from 'reactstrap'
import '../App.css'

export function Jumbo() {
    return (

        <div>
            < Jumbotron className="jumbo" color="danger" >
                <Container >
                    <h1 className="display-3">Good Morning</h1>
                    <p className="lead">Start your day off in a good mood!</p>

                </Container>
            </Jumbotron >
        </div>
    )
}


