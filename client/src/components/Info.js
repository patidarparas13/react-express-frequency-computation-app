import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
export default class Info extends Component {
    render() {
        return (
            <Container>
                <Card body className="text-center">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2>Frequency Computation App</h2>
                            <p>Fetch Most Occuring Words from this
                                <a href="https://terriblytinytales.com/test.txt" target="_blank" rel="noopener noreferrer">
                                    &nbsp;link</a>
                            </p>
                            <div>
                                <h4>Technology Used:&nbsp;
                                </h4>
                                &nbsp;<Button variant="outline-primary">React</Button>
                                &nbsp;<Button variant="outline-primary">NodeJs</Button>
                                &nbsp;<Button variant="outline-primary">Express</Button>
                            </div>
                            <br/>
                            <div>Source Code On:&nbsp;
                                <a href="https://github.com/patidarparas13/react-express-frequency-computation-app" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github"/></a>

                            </div>
                        </Col>
                    </Row>
                </Card>

            </Container>
        )
    }

}
