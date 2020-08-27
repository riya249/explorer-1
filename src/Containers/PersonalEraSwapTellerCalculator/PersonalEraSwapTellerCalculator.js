import React, { Component } from 'react';
import './PersonalEraSwapTellerCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab, Form } from 'react-bootstrap';
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
      // petValues: '',
      cAmount: '',
      stakingAmountOne: '',
      stakingAmountTwo: '',
      stakingAmountThree: '',
      stakingAmountFour: '',
      stakingAmountFive: '',
      stakingAmountSix: '',
      stakingAmountSeven: '',
      stakingAmountEight: '',
      stakingAmountNine: '',
      stakingAmountTen: '',
      stakingAmountEleven: '',
      stakingAmountTwelve: '',
      petValues: {
        petBounty: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        selfStaking: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        monthlyTotalStaking: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        monthAnnuityBenifit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fullTarget: 0,
        petBonus: 0,
        annuityBenifit: 0,
        grossBenifit: 0,
        annuity: 0,
        grossStaking: 0,
        totalStaking: 0,
        annuityPercent: 0,
        petBonusPercent: 0,
        grossBenifitPercent: 0,
        totalPetBounty: 0,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {}

  calculateValues = () => {
    function pet(stakingAmount, cAmount) {
      var petBounty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var selfStaking = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var monthlyTotalStaking = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var monthAnnuityBenifit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var fullTarget = 0;
      var petBonus = 0;
      var annuityBenifit = 0;
      var grossBenifit = 0;
      var annuity = 0;
      var grossStaking = 0;
      var totalStaking = 0;
      var annuityPercent = 0;
      var petBonusPercent = 0;
      var grossBenifitPercent = 0;
      var totalPetBounty = 0;

      //inputs are monthly staking amount, commitment amount (cAmount)
      if (cAmount >= 10000) {
        annuity = 0.12;
      } else if (cAmount >= 5000) {
        annuity = 0.115;
      } else if (cAmount >= 2500) {
        annuity = 0.11;
      } else if (cAmount >= 1000) {
        annuity = 0.105;
      } else if (cAmount >= 500) {
        annuity = 0.1;
      }

      for (var i = 0; i < 12; i++) {
        if (stakingAmount[i] >= cAmount) {
          selfStaking[i] += stakingAmount[i];
          petBounty[i] = cAmount + (stakingAmount[i] - cAmount) / 2;
          annuityBenifit += (selfStaking[i] + petBounty[i]) * 5 * annuity;
          fullTarget++;
          grossStaking += petBounty[i] + stakingAmount[i];
        } else if (stakingAmount[i] >= cAmount / 2) {
          selfStaking[i] += stakingAmount[i];
          grossStaking += petBounty[i] + stakingAmount[i];
          monthlyTotalStaking[i] = petBounty[i] + selfStaking[i];
          annuityBenifit += (selfStaking[i] + petBounty[i]) * 5 * annuity;
        } else {
          if (i < 11) {
            stakingAmount[i + 1] += stakingAmount[i];
          } else {
            selfStaking[i] = stakingAmount[i];
          }
        }
        totalStaking += selfStaking[i];
        monthlyTotalStaking[i] = petBounty[i] + selfStaking[i];
        monthAnnuityBenifit[i] = (selfStaking[i] + petBounty[i]) * annuity;
        totalPetBounty += petBounty[i];
      }

      petBonus = (grossStaking * fullTarget) / 12;
      grossBenifit = annuityBenifit + petBonus;
      annuityPercent = (annuityBenifit * 100) / totalStaking;
      petBonusPercent = (petBonus * 100) / totalStaking;
      grossBenifitPercent = (grossBenifit * 100) / totalStaking;

      return {
        petBonus,
        grossBenifit,
        annuityBenifit,
        monthAnnuityBenifit,
        grossBenifitPercent,
        petBonusPercent,
        annuityPercent,
        totalStaking,
        petBounty,
        selfStaking,
        monthlyTotalStaking,
        grossStaking,
        totalPetBounty,
      };
    }
    // pet([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 9000, 10000, 10000, 10000], 10000);
    const petValues = pet(
      [
        Number(this.state.stakingAmountOne),
        Number(this.state.stakingAmountTwo),
        Number(this.state.stakingAmountThree),
        Number(this.state.stakingAmountFour),
        Number(this.state.stakingAmountFive),
        Number(this.state.stakingAmountSix),
        Number(this.state.stakingAmountSeven),
        Number(this.state.stakingAmountEight),
        Number(this.state.stakingAmountNine),
        Number(this.state.stakingAmountTen),
        Number(this.state.stakingAmountEleven),
        Number(this.state.stakingAmountTwelve),
      ],
      Number(this.state.cAmount)
    );

    this.setState({
      petValues,
    });

    // console.log("Gross Staking", grossStaking);
    //console.log("Pet Bounty :", petBounty);
    // console.log("Annuity Benifit :", annuityBenifit);
    // console.log("Booster Bonus :", petBonus);
    // console.log("Gross Tota; Benifit :", grossBenifit);
  };

  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className="nrt-manager calculator compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Personal Era Swap Teller Calculator
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
                              <label for="">Minimum Staking Commitment</label>
                              <Form.Control
                                onChange={(event) =>
                                  this.setState({
                                    cAmount: event.target.value,
                                    stakingAmountOne: event.target.value,
                                    stakingAmountTwo: event.target.value,
                                    stakingAmountThree: event.target.value,
                                    stakingAmountFour: event.target.value,
                                    stakingAmountFive: event.target.value,
                                    stakingAmountSix: event.target.value,
                                    stakingAmountSeven: event.target.value,
                                    stakingAmountEight: event.target.value,
                                    stakingAmountNine: event.target.value,
                                    stakingAmountTen: event.target.value,
                                    stakingAmountEleven: event.target.value,
                                    stakingAmountTwelve: event.target.value,
                                  })
                                }
                                value={this.state.cAmount}
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                isInvalid={isNaN(Number(this.state.cAmount))}
                              />
                              <span>
                                {' '}
                                <img
                                  className="eslogo"
                                  src={Images.path.eslogo}
                                />
                              </span>
                            </div>
                            <div class="col-md-6 col-lg-6 form-group"></div>
                            <div className="col-md-12 col-lg-12">
                              <div className="eraswapcal-tab">
                                <div className="card">
                                  <div className="table-responsive">
                                    <table className="es-transaction  table">
                                      <tr>
                                        <td>
                                          Monthly PET Staking for 12 months{' '}
                                        </td>
                                        <td>500 to 999</td>
                                        <td>1000 to 2499</td>
                                        <td>2500 to 4999</td>
                                        <td>5000 to 9999</td>
                                        <td>10000 and above</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          PET Bounty will accumulate equal ES as
                                          per SAP each corresponding month{' '}
                                        </td>
                                        <td>500 to 999</td>
                                        <td>1000 to 2499</td>
                                        <td>2500 to 4999</td>
                                        <td>5000 to 9999</td>
                                        <td>10000 and above</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Monthly Annuity return in ES every
                                          month for 5 years
                                        </td>
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
                              <div className="card">
                                <div className="table-responsive">
                                  <table className="es-transaction  table">
                                    <tr>
                                      <th>MONTH OF STAKING</th>
                                      <th>SELF STAKED ES (ES)</th>
                                      <th>PET BOUNTY </th>
                                      <th>TOTAL STAKING </th>
                                      <th>
                                        MONTHLY ANNUITY BENIFIT FOR 5 YEARS
                                      </th>
                                    </tr>
                                    <tr>
                                      <td>Month 1 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountOne:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountOne}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountOne)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[0]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[0]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[0]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 2 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountTwo:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountTwo}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountTwo)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[1]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[1]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[1]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 3 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountThree:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountThree}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(
                                              this.state.stakingAmountThree
                                            )
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[2]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[2]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[2]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 4 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountFour:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountFour}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountFour)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[3]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[3]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[3]
                                        }
                                      </td>
                                    </tr>

                                    <tr>
                                      <td>Month 5 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountFive:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountFive}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountFive)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[4]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[4]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[4]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 6 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountSix:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountSix}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountSix)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[5]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[5]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[5]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 7 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountSeven:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountSeven}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(
                                              this.state.stakingAmountSeven
                                            )
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[6]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[6]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[6]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 8 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountEight:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountEight}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(
                                              this.state.stakingAmountEight
                                            )
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[7]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[7]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[7]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 9 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountNine:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountNine}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountNine)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[8]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[8]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[8]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 10 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountTen:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountTen}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(this.state.stakingAmountTen)
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[9]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[9]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[9]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 11 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountEleven:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountEleven}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(
                                              this.state.stakingAmountEleven
                                            )
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[10]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[10]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[10]
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Month 12 </td>
                                      <td>
                                        <Form.Control
                                          onChange={(event) =>
                                            this.setState({
                                              stakingAmountTwelve:
                                                event.target.value,
                                            })
                                          }
                                          value={this.state.stakingAmountTwelve}
                                          type="text"
                                          placeholder=""
                                          autoComplete="off"
                                          isInvalid={isNaN(
                                            Number(
                                              this.state.stakingAmountTwelve
                                            )
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {this.state.petValues.petBounty[11]}
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthlyTotalStaking[11]
                                        }
                                      </td>
                                      <td>
                                        {
                                          this.state.petValues
                                            .monthAnnuityBenifit[11]
                                        }
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 text-right mt20">
                              <a
                                className="btn btn-sm"
                                data-toggle="modal"
                                data-target="#nrtunsucessful"
                                onClick={this.calculateValues}
                              >
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
                                        <th>Total acuumulation Staking</th>
                                        <th>ES COUNT</th>
                                        <th>% OF ES ACCUMLATION</th>
                                      </tr>
                                      <tr>
                                        <td>Total acuumulation Staking</td>
                                        <td>
                                          {this.state.petValues.totalStaking}
                                        </td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>PET Bounty Gained </td>
                                        <td>
                                          {this.state.petValues.totalPetBounty}
                                        </td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>Gross staking</td>
                                        <td>
                                          {this.state.petValues.grossStaking}
                                        </td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <th>AT 5 YEARS (ES)</th>
                                        <th></th>
                                        <th></th>
                                      </tr>
                                      <tr>
                                        <td>Gross Annuity Benefits</td>
                                        <td>
                                          {this.state.petValues.annuityBenifit}
                                        </td>
                                        <td>
                                          {this.state.petValues.annuityPercent}%
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Gross PET Bonus Benefits</td>
                                        <td>{this.state.petValues.petBonus}</td>
                                        <td>
                                          {this.state.petValues.petBonusPercent}
                                          %
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>GROSS TOTAL BENEFITS</b>
                                        </td>
                                        <td>
                                          <b>
                                            {this.state.petValues.grossBenifit}
                                          </b>
                                        </td>
                                        <td>
                                          <b>
                                            {
                                              this.state.petValues
                                                .grossBenifitPercent
                                            }
                                            %
                                          </b>
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

export default PersonalEraSwapTellerCalculator;
