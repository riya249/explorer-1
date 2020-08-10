import React, { Component } from 'react';
import './TopStatistics.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { validatorsManager } from '../../ethereum/ValidatorStakingsManager';
import { nrtManager } from '../../ethereum/NrtManager';
import { ethers } from 'ethers';

class TopStatistics extends Component {
  month = 0;

  constructor(props) {
    super(props);
    this.state = {
      validators: {
        data: [],
        isLoading: true,
      },
      month: null,
      totalBlocksSealedThisMonth: 0,
    };

    this.decreaseMonth = this.decreaseMonth.bind(this);
    this.increaseMonth = this.increaseMonth.bind(this);
    this.defaultMonth = this.defaultMonth.bind(this);
  }

  componentDidMount() {
    this.fetchMonth();
  }

  async fetchMonth() {
    const month = await nrtManager().currentNrtMonth();
    this.month = ethers.BigNumber.from(month).toNumber();
    this.setState({ month: this.month }, this.fetchData);
  }

  fetchData() {
    console.log('this.state.month', this.state.month);
    this.fetchValidators();
    this.fetchTotalBlocksSealed();
  }

  async fetchTotalBlocksSealed() {
    try {
      if (this.state.month !== null) {
        const totalBlocks = await validatorsManager.getTotalBlocksSealed(
          this.state.month
        );
        this.setState({
          totalBlocksSealedThisMonth: totalBlocks.toNumber(),
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async fetchValidators() {
    try {
      if (this.state.month !== null) {
        const res = await Apis.fetchValidatorsByMonth(this.state.month);
        console.log('res', res);
        if (res)
          this.setState({
            validators: {
              data: res || Array.isArray(res) || [],
              isLoading: false,
            },
          });
      }
    } catch (e) {
      console.log('fetchValidators', e);
      this.setState({
        validators: {
          data: [],
          isLoading: false,
        },
      });
    }
  }

  decreaseMonth() {
    if (this.state.month !== null)
      this.setState(
        {
          month: this.month - 1,
          validators: {
            ...this.state.validators,
            isLoading: true,
          },
        },
        this.fetchData
      );
  }

  increaseMonth() {
    if (this.state.month !== null)
      this.setState(
        {
          month: this.month + 1,
          validators: {
            ...this.state.validators,
            isLoading: true,
          },
        },
        this.fetchData
      );
  }

  defaultMonth() {
    if (this.state.month !== null)
      this.setState(
        {
          month: this.month,
          validators: {
            ...this.state.validators,
            isLoading: true,
          },
        },
        this.fetchData
      );
  }

  render() {
    return (
      <div className="calculator">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
          Top Statistics
          </h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <div className="col-lg-6"></div>
            <div className="text-right col-lg-6">
            <select class="selectpicker">
                              <optgroup label="Year">
                                <option>1 Year</option>
                                <option>2 Year</option>
                                <option>24 Year</option>
                              </optgroup>
                              <optgroup label="Month">
                                <option>1 Month</option>
                                <option>2 Month</option>
                                <option>3 Month</option>
                              </optgroup>
                            </select>

            </div>
            <Col lg={12} className="mt20">
              <div className="card tab-card ">
                  <div className="card-header tab-card-header overviewtab">
                    <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                          <a className="nav-link active " id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Overview</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Transactions</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Network</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="Four" aria-selected="false">Miners</a>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                            <div className="mt30 eraswapcal-tab row">
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>TRANSACTIONS</th>
                                                            <th className="text-right"><a href="" className="value-dash-txt">View Top 10</a></th>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              <p class="sect-txt-bold ">Top ES Sender</p>
                                                              <p class="value-dash-txt">Unknown</p>
                                                            </td>
                                                            <td className="text-right">
                                                              <p class="sect-txt-bold">Total ES</p>
                                                              <p class="value-dash-txt">215151121 ES</p>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              <p class="sect-txt-bold ">Top ES Receiv</p>
                                                              <p class="value-dash-txt">Unknown</p>
                                                            </td>
                                                            <td className="text-right">
                                                              <p class="sect-txt-bold ">Total ES</p>
                                                              <p class="value-dash-txt">513151121 ES</p>
                                                            </td>
                                                            
                                                          </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt10" >
                                                      <div  className="card">
                                                          <table className="es-transaction striped bordered hover">
                                                            <thead>
                                                              <tr>
                                                                <th></th>
                                                                <th className="text-right"><a href="" className="value-dash-txt">View Top 10</a></th>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <p class="sect-txt-bold ">Top Txn Count Sent</p>
                                                                  <p class="value-dash-txt">Unknown</p>
                                                                </td>
                                                                <td className="text-right">
                                                                  <p class="sect-txt-bold">Total Txn</p>
                                                                  <p class="value-dash-txt">13,741</p>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <p class="sect-txt-bold ">Top Txn Count Received</p>
                                                                  <p class="value-dash-txt">Unknown</p>
                                                                </td>
                                                                <td className="text-right">
                                                                  <p class="sect-txt-bold ">Total ES</p>
                                                                  <p class="value-dash-txt">270,968</p>
                                                                </td>
                                                                
                                                              </tr>
                                                            </thead>
                                                          </table>
                                                        </div>
                                                  </div>
                                                  <div className="col-lg-6 mt20" >
                                                    <div  className="card">
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Network</th>
                                                            <th className="text-right"><a href="" className="value-dash-txt">View Top 10</a></th>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              <p class="sect-txt-bold ">Top accounts by txn count </p>
                                                              <p class="value-dash-txt">Unknown</p>
                                                            </td>
                                                            <td className="text-right">
                                                              <p class="sect-txt-bold">Txn Count</p>
                                                              <p class="value-dash-txt">215151121 ES</p>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              <p class="sect-txt-bold "></p>
                                                              <p class="value-dash-txt"></p>
                                                            </td>
                                                            <td className="text-right">
                                                              <p class="sect-txt-bold "></p>
                                                              <p class="value-dash-txt"></p>
                                                            </td>
                                                            
                                                          </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt20" >
                                                      <div  className="card">
                                                          <table className="es-transaction striped bordered hover">
                                                            <thead>
                                                              <tr>
                                                                <th>Miners</th>
                                                                <th className="text-right"><a href="" className="value-dash-txt">View Top 10</a></th>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <p class="sect-txt-bold ">Top Blockee</p>
                                                                  <p class="value-dash-txt">Unknown</p>
                                                                </td>
                                                                <td className="text-right">
                                                                  <p class="sect-txt-bold">Blockee Mined</p>
                                                                  <p class="value-dash-txt">13,741</p>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <p class="sect-txt-bold ">Top Stakers</p>
                                                                  <p class="value-dash-txt">Unknown</p>
                                                                </td>
                                                                <td className="text-right">
                                                                  <p class="sect-txt-bold ">Total ES</p>
                                                                  <p class="value-dash-txt">270,968</p>
                                                                </td>
                                                                
                                                              </tr>
                                                            </thead>
                                                          </table>
                                                        </div>
                                                  </div>

                                            </div>

                    </div>
                    <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                          <div className="mt30 eraswapcal-tab row">
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top ES Sender</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Rank</th>
                                                            <th>Address</th>
                                                            <th>Total Txn</th>
                                                            <th>Percentage</th>
                                                          </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top ES Receiver</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Rank</th>
                                                            <th>Address</th>
                                                            <th>Total Txn</th>
                                                            <th>Percentage</th>
                                                          </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top Txn Count Sent</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Rank</th>
                                                            <th>Address</th>
                                                            <th>Total Txn</th>
                                                            <th>Percentage</th>
                                                          </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top Txn Count Sent</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Rank</th>
                                                            <th>Address</th>
                                                            <th>Total Txn</th>
                                                            <th>Percentage</th>
                                                          </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                            <td>6.60%</td>
                                                           </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                            </div>              
                    </div>
                    <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                                           <div className="mt30 eraswapcal-tab row">
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Account vs Txn Count</div>
                                                    
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top ES Receiver</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                            <th>Rank</th>
                                                            <th>Address</th>
                                                            <th>Total Txn</th>
                                                           
                                                          </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr><tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                           <tr>
                                                            <td>1</td>
                                                            <td>0x08D85B...F81Fb3beb4853a22</td>
                                                            <td>153,314.7944</td>
                                                           </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  
                                            </div>              
            
                    </div>
                    <div className="tab-pane fade p-3" id="four" role="tabpanel" aria-labelledby="four-tab">
                                             <div className="mt30 eraswapcal-tab row">
                                                  <div className="col-lg-12 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era"></div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                              <th>Rank</th>
                                                              <th>Address</th>
                                                              <th>Total Blockee Mined</th>
                                                              <th>Total Rewards</th>
                                                              <th>Total Txn Fees</th>
                                                              <th>Est. Hash Rate</th>
                                                          </tr>
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                            
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-12 mt10" >
                                                    <div  className="card">
                                                    <div class="border-era">Top Blockee</div>
                                                      <table className="es-transaction striped bordered hover">
                                                        <thead>
                                                          <tr>
                                                              <th>Rank</th>
                                                              <th>Address</th>
                                                              <th>Total Blockee Mined</th>
                                                              <th>Total Rewards</th>
                                                              <th>Total Txn Fees</th>
                                                              <th>Est. Hash Rate</th>
                                                          </tr>
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                           
                                                           <tr>
                                                              <td>1</td>
                                                              <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                                                              <td>153,314.7944</td>
                                                              <td>4,843.27219</td>
                                                              <td>153,314.7944></td>
                                                              <td>48,303.310652</td>
                                                           </tr>
                                                            
                                                        </thead>
                                                      </table>
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
    );
  }
}

export default TopStatistics;
