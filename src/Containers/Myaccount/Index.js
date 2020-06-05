import React, { Component } from 'react';
import './Myaccount.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Index';
import Header from '../../Components/Header/Index';


class Myaccount extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Header />
               <Sidebar/>
            </div>
        );

    }
}


export default Myaccount;