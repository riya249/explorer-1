import React, { Component } from 'react';
import './EraswapCalculator.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Card from 'react-bootstrap/Card';
import Apis from '../../lib/apis';
const MONTHSCOUNT = 12;
class EraswapCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalStakingInput: '1070260541.41',
      nrtReleasedInput: '25264221.28',
      myStakingsInput: '170000',
      selfUptimeInput: '90',
      networkUptimeInput: '90',
      esPriceUSDT: '0.0902',
      serverCostInput: '100',
    };
  }

  componentDidMount() {
    this.fetchNrtRelease();
    this.fetchESPrice();
    this.fetchTotalESStakes();
  }

  async fetchTotalESStakes() {
    const res = await Apis.getPlatformDetailsAllTime();
    if (res?.data?.totalStaking) {
      this.setState({
        globalStakingInput: Number(res.data.totalStaking).toFixed(2),
      });
      // this.globalStaking = res.data.totalStaking;
    }
  }

  async fetchESPrice() {
    const res = await Apis.getESPrice();
    if (res?.data?.success && res?.data?.probitResponse?.data) {
      this.setState({
        esPriceUSDT: res?.data?.probitResponse?.data[0].last,
      });
    }
  }

  async fetchNrtRelease() {
    const res = await Apis.nrtFractions();
    if (res?.data) {
      this.setState({
        nrtReleasedInput: ((res.data.actualNRTDistributed / 100) * 37).toFixed(
          2
        ),
      });
    }
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'myStakings':
        if (isFinite(e.target.value))
          this.setState({ myStakingsInput: e.target.value });
        break;
      default:
        break;
    }
  };

  tax(income, taxin) {
    var slab = 0;
    if (income % this.totalESDeposit === 0) {
      slab = income / this.totalESDeposit - 1;
    } else {
      slab = Math.floor(income / this.totalESDeposit);
    }
    if (slab <= 0) {
      return 0 + taxin;
    } else {
      return this.tax(
        slab * this.totalESDeposit,
        taxin + (income - slab * this.totalESDeposit) * 0.001 * slab
      );
    }
  }

  reward(NES, deposit) {
    deposit -= this.tax(deposit, 0);
    return (deposit * ((this.totalNRT * 0.12) / MONTHSCOUNT)) / NES;
  }

  render() {
    let monthlyReward =
      (this.state.myStakingsInput / this.state.globalStakingInput) *
      this.state.nrtReleasedInput;
    monthlyReward =
      (monthlyReward * this.state.selfUptimeInput) /
      this.state.networkUptimeInput;

    let monthlyProfit =
      monthlyReward * this.state.esPriceUSDT - this.state.serverCostInput;
    if (!isFinite(monthlyReward)) monthlyReward = 0;

    return (
      <div>
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Era Swap Calculator
          </h2>
          <p className="explr-txt">
            This mining calculator will display your expected earnings in
            Dollars. The calculations
            <br />
            are based on the assumption that all conditions remain as they are
            below.
          </p>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40 eraswapcal">
            <Col sm={12} lg={12}>
              <Card className="">
                <Card.Body>
                  <Col lg={12}>
                    <div class="form-row">
                      {/* <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">Number of Validators</label>
                        <input
                          type="text"
                          class="form-control"
                          id=""
                          placeholder=""
                        />
                        <span>
                          <i class="fa fa-user user" aria-hidden="true"></i>
                        </span>
                      </div> */}
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">My ES Stakings</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              myStakingsInput: event.target.value,
                            })
                          }
                          value={this.state.myStakingsInput}
                          type="text"
                          placeholder="Enter my stakings"
                          autoComplete="off"
                          isInvalid={isNaN(Number(this.state.myStakingsInput))}
                        />
                        <span>
                          <img className="eslogo" src={Images.path.eslogo} />
                        </span>
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">Global ES stakings</label>
                        {/* <input
                          type="text"
                          class="form-control"
                          id=""
                          placeholder=""
                        /> */}
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              globalStakingInput: event.target.value,
                            })
                          }
                          value={this.state.globalStakingInput}
                          type="text"
                          placeholder="Enter global stakings"
                          autoComplete="off"
                          isInvalid={isNaN(
                            Number(this.state.globalStakingInput)
                          )}
                        />
                        <span>
                          <img className="eslogo" src={Images.path.eslogo} />
                        </span>
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">Nrt Release</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              nrtReleasedInput: event.target.value,
                            })
                          }
                          value={this.state.nrtReleasedInput}
                          type="text"
                          placeholder="Enter nrt released"
                          autoComplete="off"
                          isInvalid={isNaN(Number(this.state.nrtReleasedInput))}
                        />
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">ES price</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              esPriceUSDT: event.target.value,
                            })
                          }
                          value={this.state.esPriceUSDT}
                          type="text"
                          placeholder="Enter global stakings"
                          autoComplete="off"
                          isInvalid={isNaN(Number(this.state.esPriceUSDT))}
                        />
                        <span>
                          <img className="eslogo" src={Images.path.eslogo} />
                        </span>
                      </div>
                      <div class="col-sm-6  form-group">
                        <label for="">Server cost (USD/yearly)</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              serverCostInput: event.target.value,
                            })
                          }
                          value={this.state.serverCostInput}
                          type="text"
                          placeholder="Enter self uptime"
                          autoComplete="off"
                          isInvalid={isNaN(Number(this.state.serverCostInput))}
                        />
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">Estimated validator's uptime</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              selfUptimeInput: event.target.value,
                            })
                          }
                          value={this.state.selfUptimeInput}
                          type="text"
                          placeholder="Enter global stakings"
                          autoComplete="off"
                          isInvalid={isNaN(Number(this.state.selfUptimeInput))}
                        />
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label for="">Network uptime</label>
                        <Form.Control
                          onChange={(event) =>
                            this.setState({
                              networkUptimeInput: event.target.value,
                            })
                          }
                          value={this.state.networkUptimeInput}
                          type="text"
                          placeholder="Enter self uptime"
                          autoComplete="off"
                          isInvalid={isNaN(
                            Number(this.state.networkUptimeInput)
                          )}
                        />
                      </div>

                      {/* <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                        <button class="btn">Calculate</button>
                      </div> */}
                    </div>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt30 eraswapcal-tab">
          <Row>
            <Col lg={12}>
              <Card className="">
                <div className="border-era">RESULTS</div>
                <table className="es-transaction striped bordered hover">
                  <tr>
                    <th>Interval</th>
                    <th>ERA SWAP Earned</th>
                    <th scope="col">Cost (USD)</th>
                    <th scope="col">Profit (USD)</th>
                  </tr>
                  <tr>
                    <td class="text-left text-secondary">Daily</td>
                    <td>
                      {monthlyReward / 30} ($
                      {((monthlyReward / 30) * this.state.esPriceUSDT).toFixed(
                        2
                      )}
                      )
                    </td>
                    <td>${(this.state.serverCostInput / 30).toFixed(2)}</td>
                    <td>
                      <span class="text-success">${monthlyProfit / 30}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left  text-secondary">Weekly</td>
                    <td>
                      {monthlyReward / 4} ($
                      {((monthlyReward / 4) * this.state.esPriceUSDT).toFixed(
                        2
                      )}
                      )
                    </td>
                    <td>${(this.state.serverCostInput / 4).toFixed(2)}</td>
                    <td>
                      <span class="text-success">${monthlyProfit / 4}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left  text-secondary">Monthly</td>
                    <td>
                      {this.state.globalStaking === null
                        ? 'Loading...'
                        : monthlyReward}
                      (${(monthlyReward * this.state.esPriceUSDT).toFixed(2)})
                    </td>
                    <td>${this.state.serverCostInput}</td>
                    <td>
                      <span class="text-success">$ {monthlyProfit}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left text-secondary">Yearly</td>
                    <td>
                      {monthlyReward * 12} ($
                      {(monthlyReward * 12 * this.state.esPriceUSDT).toFixed(2)}
                      )
                    </td>
                    <td>${(this.state.serverCostInput * 12).toFixed(2)}</td>
                    <td>
                      <span class="text-success">${monthlyProfit * 12}</span>
                    </td>
                  </tr>
                </table>
              </Card>
            </Col>

            {/* <Col lg={6}>
              <Card className="">
                <div className="border-era">STAKED AMOUNT GROWTH</div>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default EraswapCalculator;
