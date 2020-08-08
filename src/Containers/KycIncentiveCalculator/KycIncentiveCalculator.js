import React, { Component } from 'react';
import './KycIncentiveCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab, Form } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';

class KycIncentiveCalculator extends Component {
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
      insentiveTable: false,
      dayswappertreeInput: '',
      directkycstandaloneInputOne: '',
      directkycstandaloneInputTwo: '',
      directkycstandaloneInputThree: '',
      directkycstandaloneInputFour: '',
      directkycstandaloneInputFive: '',
      directkyccummInputOne: '',
      directkyccummInputTwo: '',
      directkyccummInputThree: '',
      directkyccummInputFour: '',
      directkyccummInputFive: '',
      indirectkycstandaloneInputOne: '',
      indirectkycstandaloneInputTwo: '',
      indirectkycstandaloneInputThree: '',
      indirectkycstandaloneInputFour: '',
      indirectkycstandaloneInputFive: '',
      indirectkyccummInputOne: '',
      indirectkyccummInputTwo: '',
      indirectkyccummInputThree: '',
      indirectkyccummInputFour: '',
      indirectkyccummInputFive: '',
      displayValues:'',

    };

    // this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    // this.fetchNrtPlatforms();
  }

  calculateValues = () => {
    function kyc(dayswappertree, directkycstandalone, indirectkycstandalone, directkyccumm, indirectkyccumm) {
      var directcollection = 0;
      var indirectcollection = 0;
      var standAlone = [31.5, 63, 94.5, 315, 5000];
      var cumm = [31.5, 70, 150, 500, 5150];
      for (let i = 0; i < 5; i++) {
        directcollection += directkycstandalone[i] * standAlone[i];
        directcollection += directkyccumm[i] * standAlone[i];
        indirectcollection += indirectkycstandalone[i] * standAlone[i];
        indirectcollection += indirectkyccumm[i] * cumm[i];
      }
      var stakedtodirect = directcollection;
      var timeAllyclubLiquid = directcollection * 0.2;
      var timeAllyclubStake = timeAllyclubLiquid;
      var dayswapperTreeReward = (directcollection + indirectcollection) * dayswappertree;
      var tagya = directcollection * 0.2;
      var currator = directcollection * 0.2;
      var burning = directcollection * 0.1;
      var charity = directcollection * 0.1;
      return {
        tagya,
        currator,
        burning,
        charity,
        dayswapperTreeReward,
        stakedtodirect,
        timeAllyclubStake
      }
    }
    const displayValues = kyc(Number(this.state.dayswappertreeInput)/100,
       [Number(this.state.directkycstandaloneInputOne),Number(this.state.directkycstandaloneInputTwo),Number(this.state.directkycstandaloneInputThree),Number(this.state.directkycstandaloneInputFour),Number(this.state.directkycstandaloneInputFive)] ,
       [Number(this.state.directkyccummInputOne),Number(this.state.directkyccummInputTwo),Number(this.state.directkyccummInputThree),Number(this.state.directkyccummInputFour),Number(this.state.directkyccummInputFive)],
       [Number(this.state.indirectkycstandaloneInputOne),Number(this.state.indirectkycstandaloneInputTwo),Number(this.state.indirectkycstandaloneInputThree),Number(this.state.indirectkycstandaloneInputFour),Number(this.state.indirectkycstandaloneInputFive)],
       [Number(this.state.indirectkyccummInputOne),Number(this.state.indirectkyccummInputTwo),Number(this.state.indirectkyccummInputThree),Number(this.state.indirectkyccummInputFour),Number(this.state.indirectkyccummInputFive)],
       );
      this.setState({
        displayValues,
      })
  }


  render() {

    return (
      <div className="nrt-manager">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">KYC Charge Incentive Calculator</h2>
        </div>
        <div className="container">
          <div className="BlockPage-detail">
            <Container>
              <Row>
                <Col lg={6}></Col>
                <Col lg={6} className="text-right">
                  <a
                    href=""
                    className="btn btn-sm"
                    data-toggle="modal"
                    data-target="#nrtunsucessful"
                    onClick={() => this.setState({ insentiveTable: !this.state.insentiveTable })}
                  >
                    KYC Benifits <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                </Col>
              </Row>


              <Row className="mt40">
                <Col lg={12}>
                  {this.state.insentiveTable ?
                    <div className="card">
                      <div className="table-responsive">
                        <table className="es-transaction striped bordered hover table">
                          <tr>
                            <th>KYC Benefits</th>
                            <th>KYCCharge(ES)</th>
                            <th>Cummulative KYC Charges for the levels (ES) </th>
                            <th>Applicant Benefit (Staked ES)  </th>
                            <th> Introducer Incentive (50% Stake & 50% ES)</th>
                            <th>Incentive to User’s Day Swappers Tree (50% Stake & 50% ES) </th>
                            <th>Curators (50% Stake & 50% ES)</th>
                            <th>Tagya  (50% Stake & 50%ES)</th>
                            <th>Burning (ES)</th>
                            <th>Charity (ES) </th>
                            <th>Total Benefits (ES) </th>
                          </tr>
                          <tr>
                            <td>% BreakUp </td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100.00%</td>
                            <td>40.00%</td>
                            <td>40.00%</td>
                            <td>40.00%</td>
                            <td>40.00%</td>
                            <td>10.00%</td>
                            <td>10.00%</td>
                            <td>280.00%</td>
                          </tr>
                          <tr>
                            <td>Level 1 KYC - Identity </td>
                            <td>31.50 </td>
                            <td> 31.50</td>
                            <td> 31.50</td>
                            <td>12.60 </td>
                            <td>12.60 </td>
                            <td>12.60 </td>
                            <td>12.60 </td>
                            <td> 3.15 </td>
                            <td>3.15 </td>
                            <td>88.20 </td>
                          </tr>
                          <tr>
                            <td>Level 2 KYC - Skill / Business </td>
                            <td>63</td>
                            <td>70.00</td>
                            <td>63</td>
                            <td>25.20</td>
                            <td>25.20</td>
                            <td>25.20</td>
                            <td>25.20</td>
                            <td>6.3</td>
                            <td>6.3</td>
                            <td>176.40</td>

                          </tr>
                          <tr>
                            <td>Level 3 KYC - Experience / Recommendation</td>
                            <td>94.5 </td>
                            <td>150</td>
                            <td>94.5 </td>
                            <td>37.80</td>
                            <td>37.80</td>
                            <td>37.80</td>
                            <td>37.80</td>
                            <td>9.45</td>
                            <td>9.45</td>
                            <td>264.60</td>
                          </tr>
                          <tr>
                            <td>Level 4 KYC - FOS Tagya Validation</td>
                            <td>315</td>
                            <td>450</td>
                            <td>315</td>
                            <td>126.00</td>
                            <td>126.00</td>
                            <td>126.00</td>
                            <td>126.00</td>
                            <td>31.5</td>
                            <td>31.5</td>
                            <td>882.00</td>
                          </tr>
                          <tr>
                            <td>Level 5 KYC - Online Curator Validation</td>
                            <td>5000</td>
                            <td>5150</td>
                            <td>5000</td>
                            <td>2000.00</td>
                            <td>2000.00</td>
                            <td>2000.00</td>
                            <td>2000.00</td>
                            <td>500</td>
                            <td>500</td>
                            <td>14000.00</td>
                          </tr>

                        </table>
                      </div>
                    </div>
                    : ' '}
                </Col>
              </Row>


              <Row className="mt40 eraswapcal cal-com-page eraswapcal-tab">
                <Col lg={12}>
                  <div class="card">
                    <div class="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <div class="form-row">
                            <div class="col-md-12 col-lg-12 form-group">
                              <label for="">Expected Avg % Earning from Indirect Team Members as per Day Swappers Tree</label>
                             <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    dayswappertreeInput: event.target.value,
                                  })
                                }
                                value={this.state.dayswappertreeInput}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.dayswappertreeInput))}
                              />


                            </div>
                            <div class="col-md-12 col-lg-12">
                              <p className="text-weight"><b>Stand Alone KYC Input (Directs)</b></p>
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 1 KYC - Identity (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkycstandaloneInputOne: event.target.value,
                                  })
                                }
                                value={this.state.directkycstandaloneInputOne}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkycstandaloneInputOne))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 2 KYC - Skill / Business (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkycstandaloneInputTwo: event.target.value,
                                  })
                                }
                                value={this.state.directkycstandaloneInputTwo}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkycstandaloneInputTwo))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 3 KYC - Experience (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkycstandaloneInputThree: event.target.value,
                                  })
                                }
                                value={this.state.directkycstandaloneInputThree}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkycstandaloneInputThree))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 4 KYC - FOS Tagya Validation (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkycstandaloneInputFour: event.target.value,
                                  })
                                }
                                value={this.state.directkycstandaloneInputFour}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkycstandaloneInputFour))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 5 KYC - Online Curator Validation (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkycstandaloneInputFive: event.target.value,
                                  })
                                }
                                value={this.state.directkycstandaloneInputFive}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkycstandaloneInputFive))}
                              />

                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-row">
                            <div class="col-md-12 col-lg-12 form-group mt40">
                              <label for=""></label>
                            </div>
                            <div class="col-md-12 col-lg-12">
                              <p className="text-weight"><b>Cummulative KYC Input (Directs)</b></p>
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 1 KYC - Identity (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkyccummInputOne: event.target.value,
                                  })
                                }
                                value={this.state.directkyccummInputOne}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkyccummInputOne))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 2 KYC - Skill / Business (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkyccummInputTwo: event.target.value,
                                  })
                                }
                                value={this.state.directkyccummInputTwo}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkyccummInputTwo))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 3 KYC - Experience (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkyccummInputThree: event.target.value,
                                  })
                                }
                                value={this.state.directkyccummInputThree}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkyccummInputThree))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 4 KYC - FOS Tagya Validation (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkyccummInputFour: event.target.value,
                                  })
                                }
                                value={this.state.directkyccummInputFour}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkyccummInputFour))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 5 KYC - Online Curator Validation (Directs)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    directkyccummInputFive: event.target.value,
                                  })
                                }
                                value={this.state.directkyccummInputFive}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.directkyccummInputFive))}
                              />


                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mt20">
                          <div class="form-row">

                            <div class="col-md-12 col-lg-12">
                              <p className="text-weight"><b>Stand Alone KYC Input (Indirects)</b></p>
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 1 KYC - Identity (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkycstandaloneInputOne: event.target.value,
                                  })
                                }
                                value={this.state.indirectkycstandaloneInputOne}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkycstandaloneInputOne))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 2 KYC - Skill / Business (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkycstandaloneInputTwo: event.target.value,
                                  })
                                }
                                value={this.state.indirectkycstandaloneInputTwo}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkycstandaloneInputTwo))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 3 KYC - Experience (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkycstandaloneInputThree: event.target.value,
                                  })
                                }
                                value={this.state.indirectkycstandaloneInputThree}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkycstandaloneInputThree))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 4 KYC - FOS Tagya Validation (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkycstandaloneInputFour: event.target.value,
                                  })
                                }
                                value={this.state.indirectkycstandaloneInputFour}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkycstandaloneInputFour))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 5 KYC - Online Curator Validation (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkycstandaloneInputFive: event.target.value,
                                  })
                                }
                                value={this.state.indirectkycstandaloneInputFive}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkycstandaloneInputFive))}
                              />


                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-row">
                            <div class="col-md-12 col-lg-12 form-group">
                              <label for=""></label>
                            </div>
                            <div class="col-md-12 col-lg-12">
                              <p className="text-weight"><b>Cummulative KYC Input (Indirects)</b></p>
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 1 KYC - Identity (Indirects)</label>
                             <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkyccummInputOne: event.target.value,
                                  })
                                }
                                value={this.state.indirectkyccummInputOne}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkyccummInputOne))}
                              />


                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 2 KYC - Skill / Business (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkyccummInputTwo: event.target.value,
                                  })
                                }
                                value={this.state.indirectkyccummInputTwo}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkyccummInputTwo))}
                              />
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 3 KYC - Experience (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkyccummInputThree: event.target.value,
                                  })
                                }
                                value={this.state.indirectkyccummInputThree}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkyccummInputThree))}
                              />

                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 4 KYC - FOS Tagya Validation (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkyccummInputFour: event.target.value,
                                  })
                                }
                                value={this.state.indirectkyccummInputFour}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkyccummInputFour))}
                              />
                            </div>
                            <div class="col-md-6 col-lg-6 form-group">
                              <label for="">Level 5 KYC - Online Curator Validation (Indirects)</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    indirectkyccummInputFive: event.target.value,
                                  })
                                }
                                value={this.state.indirectkyccummInputFive}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.indirectkyccummInputFive))}
                              />

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
                            data-toggle="modal"
                            data-target="#nrtunsucessful"
                            onClick={this.calculateValues}
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
                <div className="col-lg-6" >
                  <div className="card">
                    <div className="border-era">RESULTS</div>
                    <table className="es-transaction striped bordered hover">
                      <thead>
                        <tr>
                          <th>TRANSACTIONS</th>
                          <th>STAKE REWARDS ES</th>
                          <th>LIQUID REWARDS ES</th>
                        </tr>
                        <tr>
                          <td>Revenue Collected from Directs</td>
                          <td></td>
                          <td>11355.5</td>
                        </tr>
                        <tr>
                          <td>Applicant Benefit</td>
                          <td>11355.5</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Taygi (Physical Validator)</td>
                          <td>{this.state.displayValues.tagya}</td>
                          <td>{this.state.displayValues.tagya}</td>
                        </tr>
                        <tr>
                          <td>Currator (Online Validator)</td>
                          <td>{this.state.displayValues.currator}</td>
                          <td>{this.state.displayValues.currator}</td>
                        </tr>
                        <tr>
                          <td>Burning</td>
                          <td>{this.state.displayValues.burning}</td>
                          <td>{this.state.displayValues.burning}</td>
                        </tr>
                        <tr>
                          <td>Charity</td>
                          <td></td>
                          <td>{this.state.displayValues.charity}</td>
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

export default KycIncentiveCalculator;
