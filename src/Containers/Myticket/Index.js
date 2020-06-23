import React, { Component } from 'react';
import './Myticket.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


const routes = [
    {
        path: '/mytickets',
        exact: true,
        sidebar: () => <div>
        gfgdfgdfgdf
        </div>,
        main: () => <h2>dfgdfgdfgdfgdfgdfg</h2>
    },
    {
        path: '/usedticket',
        sidebar: () => <div>fgdgdfgdfgdfgdfgfg</div>,
        main: () => <h2></h2>
    },
]


class Myticket extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div>
                <Header />
                <div className="ticket-bgd-img">
                    <h4 className="tick-heading">My Tickets</h4>
                </div>
                <Container>
                    <Router>
                        <div className="two-tick-option">
                            <Link to="/mytickets"><p className="tick-txt-opt">My Tickets</p></Link>
                            <Link to="/usedticket"><p className="tick-txt-opt">Used Tickets</p></Link>
                        </div>

                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}

                    </Router>
                </Container>
            </div>
        );
    }
}


export default Myticket;