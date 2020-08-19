import React, { Component } from 'react';
import './TimeAllySuperGoalCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';

class TimeAllySuperGoalCalculator extends Component {
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
    this.fetchNrtPlatforms();
  }
  async fetchNrtPlatforms() {
    try {
      const res = await Apis.fetchNrtPlatforms();
      console.log('res', res);
      if (res?.length)
        this.setState({
          platforms: {
            data: res,
            isLoading: false,
          },
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        platforms: {
          data: {},
          isLoading: false,
        },
      });
    }
  }
  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }
  render() {
    return (
      <div className="nrt-manager calculator">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            TimeAlly Super Goal Calculator
          </h2>
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
                              <input
                                placeholder=""
                                autocomplete="off"
                                type="text"
                                class="form-control"
                                value=""
                              />
                              <span>
                                {' '}
                                <img
                                  className="eslogo"
                                  src={Images.path.eslogo}
                                />
                              </span>
                            </div>
                            <div className="col-md-12 col-lg-12">
                              <div className="eraswapcal-tab">
                                <div className="card">
                                  <div className="table-responsive">
                                    <table className="es-transaction  table">
                                      <tr>
                                        <td>
                                          TSGAP SIP Staked Monthly Minimum Limit
                                          (12 months)
                                        </td>
                                        <td>100 ES</td>
                                        <td>500</td>
                                        <td>1000</td>
                                        <td>10000</td>
                                        <td>100000</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          TSGAP SIP Staked Monthly Minimum Limit
                                          (12 months)
                                        </td>
                                        <td>499 ES</td>
                                        <td>999 ES</td>
                                        <td>9999 ES</td>
                                        <td>99999 ES</td>
                                        <td>NA</td>
                                      </tr>
                                      <tr>
                                        <td>16%</td>
                                        <td>18%</td>
                                        <td>20%</td>
                                        <td>22%</td>
                                        <td>24%</td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt30 eraswapcal-tab col-lg-12">
                              <div className="card">
                                <div className="table-responsive">
                                  <table className="es-transaction  table">
                                    <tr>
                                      <th>DEPOSITS</th>
                                      <th>STAKER BENEFITS</th>
                                    </tr>
                                    <tr>
                                      <td>Month 1 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 2 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 3</td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 4 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 5 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 6 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 7 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 8 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 9 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 10 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 11 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 12 </td>
                                      <td>
                                        <input
                                          placeholder=""
                                          autocomplete="off"
                                          type="text"
                                          class="form-control"
                                          value="2000"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 text-right mt20">
                              <a href="" className="btn btn-sm">
                                Calculate{' '}
                              </a>
                            </div>
                            <div className="col-lg-12 ">
                              <div className="mt30">
                                <div className="card">
                                  <div className="border-era">RESULTS</div>
                                  <table className="es-transaction striped bordered hover">
                                    <thead>
                                      <tr>
                                        <th>STAKED AMOUNT (ES)</th>
                                        <th>ES COUNT</th>
                                        <th>% OF ES ACCUMLATION</th>
                                      </tr>
                                      <tr>
                                        <td>Total Intial Staking</td>
                                        <td>120000.00</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Gross Staked Amount Including
                                          Re-staking{' '}
                                        </td>
                                        <td>120000.00</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <th>AT MATURITY (ES)</th>
                                        <th></th>
                                        <th></th>
                                      </tr>
                                      <tr>
                                        <td>Gross Booster Bonus</td>
                                        <td>120000.00</td>
                                        <td>100%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Annuity Benefit till Restake
                                          Completion
                                        </td>
                                        <td>237600.00</td>
                                        <td>198%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Gross Benefit</b>
                                        </td>
                                        <td>
                                          <b>357600.00</b>
                                        </td>
                                        <td>
                                          <b>298.000%</b>
                                        </td>
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
export default TimeAllySuperGoalCalculator;
