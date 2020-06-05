import React, { Component } from 'react';
import './GetInTouch.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Container} from 'react-bootstrap';


class GetInTouch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Container>
                    <div>
                        <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
                    </div>
                    <div>
                        <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Email ID" />
                    </div>
                    <div>
                        <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Company Website" />
                    </div>
                    <div>
                        <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Reason For Contacting Us?" />
                    </div>
                    <div>
                        <textarea className='qs-field' type="text" id="text" name="text" placeholder="Your Question or Message" />
                    </div>
                    <div>
                        <button className="form-submit-btn"> Submit</button>
                    </div>
                </Container>
            </div>

        );

    }
}


export default GetInTouch;