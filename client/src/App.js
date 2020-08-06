import React, {Component} from 'react';
import {
    Table,
    Spinner,
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Info from './components/Info'

class App extends Component {
    state = {
        response: [],
        post: '',
        responseToPost: '',
        loading: false,
        obj: []
    };

    async handleClick() {
        try {
            this.setState({loading: true})
            const response = await fetch('/api/get');
            const data = await response.text()
            this.setState({
                response: JSON.parse(JSON.stringify(data))
            })
            this.setState({
                obj: JSON.parse(this.state.response)
            })
            this.setState({loading: false})
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {post: this.state.post}
            )
        });
        const body = await response.text();
        this.handleClick()
        this.setState({responseToPost: body});
        this.setState({post: ''});
    };


    render() {
        return (
            <div className="App">
                <Navigation/>
                <br/>
                <br/>
                <Info/>
                <br/>
                <Container>
                    <Card body className="text-center">
                        <Row className="justify-content-md-center">
                            <Col md="auto">

                                <Form onSubmit={
                                    this.handleSubmit
                                }>
                                    <p>
                                        <strong>Fetch Top N Occuring Words:</strong>
                                    </p>
                                    <FormControl type="text"
                                        value={
                                            this.state.post
                                        }
                                        onChange={
                                            e => this.setState({post: e.target.value})
                                        }
                                        placeholder="Enter Value Of N"/>
                                    <br/>
                                    <Button variant="outline-secondary" className="justify-content-center"
                                        onClick={
                                            () => this.handleClick()
                                    }>Submit</Button>
                                </Form>


                                <br/>
                                <p>
                                    <b> {
                                        this.state.responseToPost
                                    } </b>
                                </p>
                            </Col>
                        </Row>
                    </Card>

                    <br/>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Word</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.loading ? <Spinner animation="border"/> : Object.keys(this.state.obj).map((i, j) => {
                                return (
                                    <tr key={j}>
                                        <td>{
                                            j + 1
                                        }</td>
                                        <td>{i}</td>
                                        <td>{
                                            this.state.obj[i]
                                        }</td>
                                    </tr>
                                )
                            })
                        }</tbody>
                    </Table>
                    <div className="text-center">
                        <strong>
                            Made With
                            <img src="https://img.icons8.com/cotton/64/000000/like--v1.png" alt="heart"/>
                            By Paras Patidar</strong>
                        <a href="https://icons8.com/icon/64452/heart">.</a>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;
