import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar bg="light">
                    <Navbar.Brand>Frequency Computation App</Navbar.Brand>
                </Navbar>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="hhttps://twitter.com/patidarparas13" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter"/></a>
                        <a href="https://github.com/patidarparas13" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github"/></a>

                        <a href="https://www.linkedin.com/in/patidarparas13/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" alt="linkedin"/></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
