import React, { Component } from 'react';
import './PersonalEraSwapTellerCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';


class PersonalEraSwapTellerCalculator extends Component {
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
      <div className="nrt-manager calculator">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Personal Era Swap Teller Calculator</h2>
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
                                                  <label for="">Minimum Staking Commitmen</label>
                                                  <input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                  <span> <img className="eslogo" src={Images.path.eslogo} /></span>
                                              </div>
                                              <div class="col-md-6 col-lg-6 form-group">
                                                  <label for="">Expected Avg % Earning from Indirect Team Members as per Day Swappers Tree</label>
                                                  <input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                  
                                              </div>
                                              <div className="col-md-12 col-lg-12">
                                                    <div className="eraswapcal-tab">
                                                      <div  className="card">
                                                        <div className="table-responsive">
                                                        <table className="es-transaction  table">
                                                          
                                                          <tr>
                                                            <td>Monthly PET Staking for 12 months </td>
                                                            <td>500 to 999</td>
                                                            <td>1000 to 2499</td>
                                                            <td>2500 to 4999</td>
                                                            <td>5000 to 9999</td>
                                                            <td>10000 and above</td>
                                                          </tr>
                                                          <tr>
                                                            <td>PET Bounty will accumulate equal ES as per SAP each corresponding month </td>
                                                            <td>500 to 999</td>
                                                            <td>1000 to 2499</td>
                                                            <td>2500 to 4999</td>
                                                            <td>5000 to 9999</td>
                                                            <td>10000 and above</td>
                                                          </tr>
                                                          <tr>
                                                            <td>Monthly Annuity return in ES every month for 5 years</td>
                                                            <td>10.0%</td>
                                                            <td>10.5%</td>
                                                            <td>11%</td>
                                                            <td>11.5%</td>
                                                            <td>12.0%</td>
                                                          </tr>
                                                        
                                                        
                                                        </table>
                                                      
                                                      </div>
                                                  </div>
                                                  </div> 
                                              </div>
                                              <div className="mt30 eraswapcal-tab col-lg-12">
                                                <div  className="card">
                                                  <div className="table-responsive">
                                                  <table className="es-transaction  table">
                                                    <tr>
                                                      <th>MONTH OF STAKING</th>
                                                      <th>SELF STAKED ES (ES)</th>
                                                      <th>PET BOUNTY  </th>
                                                      <th>TOTAL STAKING </th>
                            
                                                    </tr>
                                                    <tr>
                                                      <td>Month 1 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 2 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 3 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 4 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>

                                                    <tr>
                                                      <td>Month 5 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 6 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 7 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 8 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 9 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 10 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 11 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Month 12 </td>
                                                      <td><input placeholder="" autocomplete="off" type="text" class="form-control" value="2000" /></td>
                                                      <td>2000 ES</td>
                                                      <td>2000 ES</td>
                                                    </tr>
                                                  </table>
                                                </div>
                                                </div>
                                             </div>
                                            
                                             
                                              <div className="col-lg-12 text-right mt20">
                                                    <a href="" className="btn btn-sm">Calculate   </a>
                                                </div>
                                                <div className="col-lg-12 ">
                                            <div className="mt30" >
                                              <div  className="card">
                                                <div className="border-era">RESULTS</div>
                                                <table className="es-transaction striped bordered hover">
                                                  <thead>
                                                    <tr>
                                                      <th>Total acuumulation Staking</th>
                                                      <th>ES COUNT</th>
                                                      <th>% OF ES ACCUMLATION</th>
                                                    </tr>
                                                    <tr>
                                                      <td>Total acuumulation Staking</td>
                                                      <td>120000.00</td>
                                                      <td>-</td>
                                                    </tr>
                                                    <tr>
                                                      <td>PET Bounty Gained </td>
                                                      <td>120000.00</td>
                                                      <td>-</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Gross staking</td>
                                                      <td>120000.00</td>
                                                      <td>-</td>
                                                    </tr>
                                                    <tr>
                                                      <th>AT 5 YEARS (ES)</th>
                                                      <th></th>
                                                      <th></th>
                                                    </tr>
                                                    <tr>
                                                      <td>Gross Annuity Benefits</td>
                                                      <td>144000.00</td>
                                                      <td>120.00%</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Gross PET Bonus Benefits</td>
                                                      <td>240000.00</td>
                                                      <td>200.00%</td>
                                                    </tr>
                                                    <tr>
                                                      <td><b>GROSS TOTAL BENEFITS</b></td>
                                                      <td><b>384000.00</b></td>
                                                      <td><b>320.00%</b></td>
                                                    </tr>
                                                  
                                                  </thead>
                                                </table>
                                               
                                                
                                                </div>
                                            </div>
                                        </div>
                                             
                                          </div>
                                        </div>
                                     
                                        
                                      
                                      </div>
                                    
                                  </div>
                              </div>
                </Col>
                </Row>
           
         

              
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalEraSwapTellerCalculator;
