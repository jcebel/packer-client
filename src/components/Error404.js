import {Alert, Button, Container} from "react-bootstrap";
import React from "react";
import {Page} from "./Page";

export class Error404 extends React.Component {

    render() {
        return (
            <Page>
                <section>
                    <Container>
                        <Alert variant="danger">
                            <Alert.Heading>Error 404!</Alert.Heading>
                            <p>
                                Page not found!
                            </p>
                            <Button href="/">Go to Home</Button>
                        </Alert>
                    </Container>
                </section>
            </Page>
        );
    }
}