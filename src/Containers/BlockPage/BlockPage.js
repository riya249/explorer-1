import React, { Component } from 'react';
import './BlockPage.css'
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import { Col, Button, Container, Row } from 'react-bootstrap';
import Comments from '../../Components/Comments/Comments';
import Overview from '../../Components/Overview/Overview';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>
            <Overview />
        </div>,
        main: () => <h2></h2>
    },
    {
        path: '/Comments',
        sidebar: () => <div> <Comments /></div>,
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
                <div className='booking-hero-bgd booking-hero-bgd-inner'>
                    <Navbar />
                    <h2 className="es-main-head es-main-head-inner">Blocks #102587</h2>
                </div>
                <div className="wrapper-container">
                    {/* <div className="notif-txt">
                        Blocks #102587
                    </div> */}
                    <div className="BlockPage-detail">
                        <Container>
                            <Router>
                                <div className="two-border-container">
                                    <div className="block-main">
                                        <Link to="/"><p className="block-txt-opt">Overview</p></Link>
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
                                </div>
                            </Router>
                        </Container>
                    </div>
                </div>
            </div>

        );

    }
}


export default BlockPage;