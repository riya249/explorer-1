import React, { Component } from 'react';
import './Homepage.css'
import Images from '../../Containers/Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div className="ticket-wrap-para">List your event on BookingDapp by simply, clicking on Create an Event button, and mention all the required information of your event like – the Title, Description, Venue, Date, and Seat Map of your event..</div>,
    },
    {
        path: '/section2',
        sidebar: () => <div className="ticket-wrap-para">Once your event is successfully listed, add the number of tickets you are adding for sale, once your event tickets are listed, will connect you with your participants directly, in a P2P mode.</div>,

    },
    {
        path: '/section3',
        sidebar: () => <div className="ticket-wrap-para">Now, that all the process is completed, you can receive the value you deserve by selling your tickets directly, to the purchaser in the Peer-to-Peer mode, without paying huge cuts or multi-layer middlemen charges</div>,

    },
]

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        

        return (
            <div>
                <div className='booking-hero-bgd'>
                   <Navbar/>
                </div>
                <div className="bookindapp-Container">
                    
                </div>
            </div>

        );

    }
}


export default Homepage;