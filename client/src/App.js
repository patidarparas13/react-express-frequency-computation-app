import React, {Component} from 'react';
import {Table, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        response: [],
        post: '',
        responseToPost: '',
        loading: false,
        obj: []
    };

    async handleClick() {
        console.log("1")
        try {
            this.setState({loading: true})
            const response = await fetch('/api/get');
            const data = await response.text()
            this.setState({
                response: JSON.parse(JSON.stringify(data))
            })
            console.log(this.state.response)
            console.log("9")
            this.setState({
                obj: JSON.parse(this.state.response)
            })
            console.log(this.state.obj)
            console.log("10")
            this.setState({loading: false})
        } catch (error) {
            console.log(error);
        }
        console.log("8")
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("3")
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
        console.log("4")
        this.setState({responseToPost: body});
    };


    render() {
        const display = Object.keys(this.state.response).map((i, j) => {
            return (
                <tr key={j}>
                    <td>{
                        j + 1
                    }</td>
                    <td>{i}</td>
                    <td>{
                        this.state.response[i]
                    }</td>
                </tr>

            )
        })
        return (
            <div className="App">
                <form onSubmit={
                    this.handleSubmit
                }>
                    <p>
                        <strong>Post to Server:</strong>
                    </p>
                    <input type="text"
                        value={
                            this.state.post
                        }
                        onChange={
                            e => this.setState({post: e.target.value})
                        }/>
                    <button type="submit"
                        onClick={
                            () => this.handleClick()
                    }>Submit</button>
                </form>

                <p>{
                    this.state.responseToPost
                }</p>
                <p>{
                    this.state.response
                }</p>

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
                    } </tbody>
                </Table>
            </div>
        );
    }
}

export default App;
