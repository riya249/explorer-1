import React, { Component } from 'react';
import './BlockPage.css'
import Images from '../Images/Images';
import Header from '../../Components/Header/Index';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import { Col, Button, Container, Row } from 'react-bootstrap';
import Overview from '../../Components/Overview/Index';


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>
            <Overview/>
        </div>,
        main: () => <h2></h2>
    },
    {
        path: '/Comments',
        sidebar: () => <div> fdgdfgdfgdfg</div>,
        main: () => <h2></h2>
    },
]

class BlockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Header />
                <div className="wrapper-container">
                    <div className="notif-txt">
                        Blocks #102587
                    </div>
                    <div className="BlockPage-detail">
                        <Container>
                        <Router>
                            <div className="two-border-container">
                            <Link to="/"><p className="bloc-txt-opt">Overview</p></Link>
                            <Link to="/Comments"><p className="block-txt-opt">Comments</p></Link>
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
                </div>
            </div>

        );

    }
}


export default BlockPage;