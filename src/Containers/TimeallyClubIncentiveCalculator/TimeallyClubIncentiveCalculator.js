import React, { Component } from 'react';
import './TimeallyClubIncentiveCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';

class TimeallyClubIncentiveCalculator extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      platforms: {
        data: {},
        isLoading: true,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
   
  }

  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className="nrt-manager">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Timeally Club Incentive Calculator</h2>
        </div>
        <div className="container">
          <div className="BlockPage-detail">
            <Container>
              
              <Row className="mt40 eraswapcal cal-com-page eraswapcal-tab">
                <Col lg={12}>
                   <div class="card">
                                  <div class="card-body">
                                     <div className="row">
                                        <div className="col-lg-12">
                                          <div class="form-row">
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">Expected Avg % Earning from Indirect Team</label>
                                                  <input placeholder="" autocomplete="off" type="text" class="form-control" value="" />   
                                              </div>
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">Corresponding TimeAlly Club Belt</label>
                                                  <input placeholder="" autocomplete="off" type="text" class="form-control" value="" />   
                                              </div>
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">Pet Staking (Direct Sale) </label><input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                 
                                              </div>
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">TSGAP staking (Direct Sale)</label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                               <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">TA 1LT Staking (Direct Sale)</label><input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                 
                                              </div>
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">Pet Staking (Indirect Sale)</label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                               <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">TSGAP staking (Indirect Sale)</label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                               <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">TA 1LT Staking (Indirect Sale)</label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                             
                                          </div>
                                        </div>
                                       
                                     
                                      </div>
                                     <div className="row">
                                     <div className="col-lg-6"></div>
                                      <div className="col-lg-6 text-right">
                                         <a
                                          href=""
                                          className="btn btn-sm"
                                        >
                                          Calculate 
                                        </a>
                                        </div>
                                        </div>
                                  </div>
                              </div>
                 </Col>
              </Row>

          <div className="mt30 eraswapcal-tab row">
            <div className="col-lg-12" >
              <div  className="card">
                <div className="border-era">RESULTS</div>
                <table className="es-transaction striped bordered hover">
                  <thead>
                    <tr>
                      <th>TRANSACTIONS</th>
                      <th>STAKE REWARDS ES</th>
                      <th>LIQUID REWARDS ES</th>
                    </tr>
                    <tr>
                      <td>TimeAlly Club Direc</td>
                      <td>11355.5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Dayswappers Tree</td>
                      <td>11355.5</td>
                      <td>11355.5</td>
                    </tr>
                    
                   
                  </thead>
                </table>
                </div>
             </div>
             
           
          </div>
    
    

              
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeallyClubIncentiveCalculator;
