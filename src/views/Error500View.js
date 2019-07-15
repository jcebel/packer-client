import React from 'react';
import { Alert, Button, Container} from 'react-bootstrap';

export default class Error500View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount(){
        this.setState({
        });
    }

    render() {
        return (
            <section>
                <Container>
                    <Alert variant="danger">
                        <Alert.Heading>Error 500!</Alert.Heading>
                        <p>
                            Something went wrong
                        </p>
                        <Button href = "/">Go to Home</Button>
                    </Alert>
                </Container>
            </section>
        );
    }

}