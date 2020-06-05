import React from 'react';
import './Sidebar.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import { Col, Button, Container, Row } from 'react-bootstrap';
import MyListing from '../../Containers/MyListing/Index';
import GetInTouch from '../../Containers/GetInTouch/Index';
import Kycform from '../../Containers/Kycform/Index';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div><MyListing/></div>,
        main: () => <h2></h2>
    },
    {
        path: '/getinTouch',
        sidebar: () => <div><GetInTouch/></div>,
        main: () => <h2></h2>
    },
    {
        path: '/KYC',
        sidebar: () => <div><Kycform/></div>,
        main: () => <h2></h2>
    }
]

class Sidebar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="wrapper-side-container">
                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                                        <li><Link to="/" className="side-link "><div className="link-style">My Listed Events</div></Link></li>
                                        <li><Link to="/getinTouch" className="side-link" > <div className="link-style">Get In Touch</div></Link></li>
                                        <li><Link to="/KYC" className="side-link"><div className="link-style">KYC </div></Link></li>
                                    </ul>
                                </Col>
                                <Col sm={8}>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.sidebar}
                                        />
                                    ))}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Sidebar