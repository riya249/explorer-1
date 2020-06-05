import React, { Component } from 'react';
import './Alerts.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import Header from '../../Components/Header/Index';


class Alerts extends Component {
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
                        Notifications
                    </div>
                    <div className="alerts-detail">
                        <div className="display-txt-flex"><p className="dark-notif-txt">09- MAY <br/> 02:00 A.M</p><p className="para-notif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum venenatis neque eget tristique. Sed at porta felis. Duis vitae malesuada lacus. Duis lobortis risus gravida leo pellentesque bibendum.</p></div>

                        <div className="display-txt-flex"><p className="dark-notif-txt">09- MAY <br/> 01:30 A.M </p><p className="para-notif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum venenatis neque eget tristique. Sed at porta felis. Duis vitae malesuada lacus. Duis lobortis risus gravida leo pellentesque bibendum.</p></div>

                        <div className="display-txt-flex"><p className="dark-notif-txt">09- MAY <br/> 02:00 p.M </p><p className="para-notif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum venenatis neque eget tristique. Sed at porta felis. Duis vitae malesuada lacus. Duis lobortis risus gravida leo pellentesque bibendum.</p></div>
                        </div>
                </div>
            </div>

        );

    }
}


export default Alerts;