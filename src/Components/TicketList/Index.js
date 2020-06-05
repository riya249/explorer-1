import React, { Component } from 'react';
import './TicketList.css'
import Images from '../../Containers/Images/Images';
import { Container } from 'react-bootstrap';
import { Col, Button, Row } from 'react-bootstrap';


class TicketList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Container>
                <Row>
                   <Col sm={6}>
                       <div className="tickt-detail">
                           <div>
                       <a href='https://www.unitag.io/qrcode'><img className="qr-img-scan" src='https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPpEYgrTpeQPpAxSJGcmyf1yS40m%252F8TYex%252BClEuWu4lenvXZtoPs%252F%252BUrLXgu0YhszNgP%252BKdjyjPlmstXQT%252FaVrtPKhQyftmIdGYv13ikDwALrMbZP22mR79KHkzbFuKXEpiL8j20cuH2aGWOj2IjvLpcUzuo31AnGGGBeZdrGyuu6Mb1zDGpyywrS%252B5yeqbhCDi5N2jmuM%252FTAPgpUpoL%252FcocZ0EYmXmQgDKIdeF33i3Py4HjYkfLywjMpK%252F3qQWgtrBl1c23E1wTz0lBeRnnwr2kurpUSyPrULt%252B7TKfjjaFxmoonjuL9UxJGy2SCaPT%252FuA%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ6%252BvVUBl2O2Fufhv4lJCRtSccnJc3vL0A0h7RJ9tipEJadEbc05VSbS3mAIhPIe7TQ%253D%253D' alt='QR Code'/></a>
                       <p className="color-name">Ridiculous panther</p>
                       </div>
                       <div className="container-mytick">
                           <p className="no-tick">2 Tickets</p>
                           <div className="date-ticket">
                           <p> Sat,11  Jul,2020</p> <span> 7:30</span>
                           </div>
                           <p>Venue</p>
                           <p>DY Patil, Navi Mumbai</p>
                           <p>Block C</p>
                           <p>CCB CCR</p>
                           </div>
                           </div>
                       </Col>
                       <Col sm={6}>
                       <div className="tickt-detail">
                           <div>
                       <a href='https://www.unitag.io/qrcode'><img className="qr-img-scan" src='https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPpEYgrTpeQPpAxSJGcmyf1yS40m%252F8TYex%252BClEuWu4lenvXZtoPs%252F%252BUrLXgu0YhszNgP%252BKdjyjPlmstXQT%252FaVrtPKhQyftmIdGYv13ikDwALrMbZP22mR79KHkzbFuKXEpiL8j20cuH2aGWOj2IjvLpcUzuo31AnGGGBeZdrGyuu6Mb1zDGpyywrS%252B5yeqbhCDi5N2jmuM%252FTAPgpUpoL%252FcocZ0EYmXmQgDKIdeF33i3Py4HjYkfLywjMpK%252F3qQWgtrBl1c23E1wTz0lBeRnnwr2kurpUSyPrULt%252B7TKfjjaFxmoonjuL9UxJGy2SCaPT%252FuA%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ6%252BvVUBl2O2Fufhv4lJCRtSccnJc3vL0A0h7RJ9tipEJadEbc05VSbS3mAIhPIe7TQ%253D%253D' alt='QR Code'/></a>
                       <p className="color-name">Ridiculous panther</p>
                       </div>
                       <div className="container-mytick">
                           <p className="no-tick">2 Tickets</p>
                           <div className="date-ticket">
                           <p> Sat,11  Jul,2020</p> <span> 7:30</span>
                           </div>
                           <p>Venue</p>
                           <p>DY Patil, Navi Mumbai</p>
                           <p>Block C</p>
                           <p>CCB CCR</p>
                           </div>
                           </div>
                       </Col>
                </Row>
                </Container>
            </div>

        );

    }
}


export default TicketList;