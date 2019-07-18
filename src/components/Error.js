import React from 'react';
import {Alert, Button, Container} from "react-bootstrap";
import {Page} from "./Page";

export class Error extends React.Component{


    render() {
        return (
            <Page>
                <section>
                    <Container>
                        <Alert variant="danger">
                            <Alert.Heading>Something went wrong!</Alert.Heading>
                            <p>
                                Please try again or contact our support team.
                            </p>
                            <Button href = "/">Go to Home</Button>
                        </Alert>
                    </Container>
                </section>
            </Page>
        );
    }
}