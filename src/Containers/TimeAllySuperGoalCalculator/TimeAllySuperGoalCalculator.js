import React, { Component } from 'react';
import './TimeAllySuperGoalCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab, Form } from 'react-bootstrap';
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
         cAmountInput: '',
         annuity: '',
         stakingAmountOne:'',
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
         tsgapValues: '',
      };
      this.openSnackBar = this.openSnackBar.bind(this);
   }
   componentDidMount() {
   }
 
   checkAnnuity = () =>{
     
   }

   TsgCalculateValue = () => {
      function tsgap(cAmount, stakingAmountArray) {
         //inputs are monthly staking amount, commitment amount (cAmount) , annuity returns %
                 
         var annuity = 0 ;
         var totalStaking = 0;
         var boosterBonus = 0;
         var missedPayments = 0;
         var annuityBenifit = 0;
         var grossBenifit = 0;
         var monthAnnuityBenifit = [0,0,0,0,0,0,0,0,0,0,0,0];
         var annuityPercent = 0;
         var grossBenifitPercent = 0;
         var boosterBonusPercent = 0;

         if (cAmount >= 100000) {
            annuity = 0.24
         } else if (cAmount >= 10000) {
            annuity = 0.22
         } else if (cAmount >= 1000) {
            annuity = 0.20
         } else if (cAmount >= 500) {
            annuity = 0.18
         } else if (cAmount >= 100) {
            annuity = 0.16
         }


         for (var i = 0; i < 12; i++) {
            if (stakingAmountArray[i] < cAmount) {
               missedPayments++;
            } else {
               totalStaking += stakingAmountArray[i];
               boosterBonus += stakingAmountArray[i];
               monthAnnuityBenifit[i] = stakingAmountArray[i] * annuity;
               annuityBenifit += stakingAmountArray[i] * 9 * annuity;
            }

         }

         boosterBonus -= (boosterBonus * missedPayments * 2) / 100;
         grossBenifit = annuityBenifit + boosterBonus;
         annuityPercent = annuityBenifit * 100 / totalStaking;
         boosterBonusPercent = boosterBonus * 100 / totalStaking;
         grossBenifitPercent = grossBenifit * 100 / totalStaking;

         return { totalStaking, boosterBonus, missedPayments, monthAnnuityBenifit, annuityBenifit, grossBenifit, annuityPercent ,boosterBonusPercent ,grossBenifitPercent};
      }

      const result = tsgap(
         [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 9000, 10000, 10000, 10000],
         10000,
         22 / 100
      );
      const tsgapValues = tsgap(Number(this.state.cAmountInput),
         [Number(this.state.stakingAmountOne), Number(this.state.stakingAmountTwo), Number(this.state.stakingAmountThree),
         Number(this.state.stakingAmountFour), Number(this.state.stakingAmountFive), Number(this.state.stakingAmountSix)
            , Number(this.state.stakingAmountSeven), Number(this.state.stakingAmountEight), Number(this.state.stakingAmountNine)
            , Number(this.state.stakingAmountTen), Number(this.state.stakingAmountEleven), Number(this.state.stakingAmountTwelve)],
      );

      this.setState({
         tsgapValues,
      })
   }



   openSnackBar(message) {
      // this.snackbarRef.current.openSnackBar(message);
   }
   render() {
      return (
         <div className="nrt-manager calculator">
            <div className="booking-hero-bgd booking-hero-bgd-inner">
               <Navbar />
               <h2 className="es-main-head es-main-head-inner">TimeAlly Super Goal Calculator</h2>
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
                                        <div className="">
                                             <div className="eraswapcal-tab">
                                                <div className="card">
                                                   <div className="table-responsive">
                                                      <table className="es-transaction  table">
                                                         <tr>
                                                            <td>TSGAP SIP Staked Monthly Minimum Limit (12 months)</td>
                                                            <td>100 ES</td>
                                                            <td>500</td>
                                                            <td>1000</td>
                                                            <td>10000</td>
                                                            <td>100000</td>
                                                         </tr>
                                                         <tr>
                                                            <td>TSGAP SIP Staked Monthly Minimum Limit (12 months)</td>
                                                            <td>499 ES</td>
                                                            <td>999 ES</td>
                                                            <td>9999 ES</td>
                                                            <td>99999 ES</td>
                                                            <td>NA</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Annuity </td>
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
                                       <div class="form-row mt20">
                                          <div class="col-md-6 col-lg-6 form-group">
                                             <label for="">Minimum Staking Commitment</label>
                                             <Form.Control
                                                onChange={(event) =>
                                                   this.setState({
                                                      cAmountInput: event.target.value,
                                                      stakingAmountOne:event.target.value,
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
                                                value={this.state.cAmountInput}
                                                type="text"
                                                placeholder=""
                                                autoComplete="off"
                                                isInvalid={isNaN(Number(this.state.cAmountInput))}
                                             />
                                             <span> <img className="eslogo" src={Images.path.eslogo} /></span>
                                          </div>
                                         
                                          <div className="mt20 eraswapcal-tab col-lg-12">
                                             <div className="card">
                                                <div className="table-responsive">
                                                   <table className="es-transaction  table">
                                                      <tr>
                                                         <th>MONTH</th>
                                                         <th>MONTHLY STAKINGS</th>
                                                         <th>MONTHLY ANNUITY BENIFIT FOR 9 YEARS</th>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 1 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountOne: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountOne}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountOne))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[0]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 2 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountTwo: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountTwo}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountTwo))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[1]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 3</td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountThree: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountThree}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountThree))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[2]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 4 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountFour: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountFour}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountFour))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[3]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 5 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountFive: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountFive}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountFive))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[4]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 6 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountSix: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountSix}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountSix))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[5]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 7 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountSeven: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountSeven}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountSeven))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[6]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 8 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountEight: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountEight}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountEight))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[7]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 9 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountNine: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountNine}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountNine))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[8]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 10 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountTen: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountTen}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountTen))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[9]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 11 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountEleven: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountEleven}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountEleven))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[10]}
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Month 12 </td>
                                                         <td><Form.Control
                                                            onChange={(event) =>
                                                               this.setState({
                                                                  stakingAmountTwelve: event.target.value,
                                                               })
                                                            }
                                                            value={this.state.stakingAmountTwelve}
                                                            type="text"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            isInvalid={isNaN(Number(this.state.stakingAmountTwelve))}
                                                         /></td>
                                                         <td>
                                                            {this.state.tsgapValues.monthAnnuityBenifit[11]}
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-lg-12 text-right mt20">
                                             <a href=""
                                                className="btn btn-sm"
                                                data-toggle="modal"
                                                data-target="#nrtunsucessful"
                                                onClick={this.TsgCalculateValue}>
                                                Calculate</a>
                                          </div>
                                          <div className="col-lg-12 ">
                                             <div className="mt30" >
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
                                                         <td>{this.state.tsgapValues.totalStaking}</td>
                                                            <td>-</td>
                                                         </tr>
                                                         <tr>
                                                            {/* <td>Gross Staked Amount Including Re-staking </td>
                                                            <td>10.00</td>
                                                            <td>-</td> */}
                                                         </tr>
                                                         <tr>
                                                            <th>After 9 years (ES)</th>
                                                            <th></th>
                                                            <th></th>
                                                         </tr>
                                                         <tr>
                                                            <td>Gross Booster Bonus</td>
                                                            <td>{this.state.tsgapValues.boosterBonus}</td>
                                                            <td>{this.state.tsgapValues.boosterBonusPercent}%</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Annuity Benefit in  9 years</td>
                                                            <td>{this.state.tsgapValues.annuityBenifit}</td>
                                                            <td>{this.state.tsgapValues.annuityPercent}%</td>
                                                         </tr>
                                                         <tr>
                                                            <td><b>Gross Benefit</b></td>
                                                            <td><b>{this.state.tsgapValues.grossBenifit}</b></td>
                                                         <td><b>{this.state.tsgapValues.grossBenifitPercent}%</b></td>
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
