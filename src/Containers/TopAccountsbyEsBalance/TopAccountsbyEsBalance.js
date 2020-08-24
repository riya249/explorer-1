import React, { Component } from 'react';
import './TopAccountsbyEsBalance.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { formatEther } from '../../lib/parsers';
import AddressLink from '../../Components/AddressLink/AddressLink';

class TopAccountsbyEsBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: {
        data: [],
        isLoading: true,
      },
    };
  }

  componentDidMount() {
    this.fetchTopAccounts();
  }

  async fetchTopAccounts() {
    let res;
    try {
      res = await Apis.fetchTopAccounts();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('res', res);
      this.setState({
        accounts: {
          data: res && Array.isArray(res) ? res : [],
          isLoading: false,
        },
      });
    }
  }

  render() {
    return (
      <div className="node-status">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Top Accounts by ES Balance
          </h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40 eraswapcal-tab">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped  hover ">
                    <tr>
                      <th>Rank</th>
                      <th>Address</th>
                      <th>Name Tag</th>
                      <th>Stake </th>
                      <th>Balance</th>
                      <th>Percentage</th>
                      <th>Txn Count</th>
                    </tr>
                    {this.state.accounts.isLoading ? (
                      <tr>
                        <td colSpan="7">Loading...</td>
                      </tr>
                    ) : this.state.accounts.data?.length ? (
                      this.state.accounts.data?.map((account, i) => (
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            <AddressLink
                              value={account.address}
                              type="address"
                            />
                          </td>
                          <td>{account.label || '-'}</td>
                          <td>
                            <span className="">
                              {formatEther(account.stakes)}
                            </span>
                          </td>
                          <td>
                            <span className="">
                              {formatEther(account.balance)} ES
                            </span>
                          </td>
                          <td>3.45758416% </td>
                          <td>{account.transactions}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No Data</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
              {/* <div className="cus-pagination row">
                <div className="col-md-12 text-right">
                  <button type="button" className="btn mr10 mt10">
                    Back
                  </button>
                  <button type="button" className="btn mr10 mt10">
                    Next
                  </button>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopAccountsbyEsBalance;
