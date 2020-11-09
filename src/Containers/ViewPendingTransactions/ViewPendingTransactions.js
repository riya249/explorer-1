import React, { Component } from 'react';
import './viewPendingTransactions.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import AddressLink from '../../Components/AddressLink/AddressLink';
import * as moment from 'moment';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import { ethers } from 'ethers';
import { formatEther, toLocaleTimestamp } from '../../lib/parsers';
import { providerESN } from '../../ethereum/Provider';
import { routine } from 'eraswap-sdk/dist/utils';

class ViewPendingTransaction extends Component {
  snackbarRef = React.createRef();

  intervalIds = [];
  constructor(props) {
    super(props);
    this.state = {
      pendingTransactions: [],
      blocks: []
    };
  }

  componentDidMount() {
    this.intervalIds.push(routine(this.fetchPendingTransactions,1000));
  }

  componentWillUnmount(){
    this.intervalIds.map(id => clearInterval(id));
  }

  fetchPendingTransactions = async () => {
    try {
      const pendingTransactions = await providerESN.send(
        'parity_pendingTransactions',
        []
      );
      this.setState({ pendingTransactions });
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        pendingTransactions: []
      });
    }
  }

  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className="blocks-table compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner ">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Pending Transactions</h2>
        </div>
        <Container>
          <Row className="mt40">
            <Col lg={12}>
              <div className="card">
                <h3>Pending Transactions: {this.state.pendingTransactions.length}</h3>
                <div className="table-responsive">
                  <table className="es-transaction table">
                    <thead>
                      <tr>
                        <th>Hash </th>
                        <th>From </th>
                        <th>To</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.pendingTransactions.length ?
                       this.state.pendingTransactions.map(txn => <tr>
                        <td><AddressLink value={txn.hash} type="tx" shrink={true}/></td>
                        <td><AddressLink value={txn.from} type="address"/></td>
                        <td><AddressLink value={txn.to} type="address"/></td>
                        <td>{formatEther(txn.value)}</td>
                      </tr>)
                      :
                      <tr>
                        <td colSpan={4} className="text-center">
                          <br></br>
                          <i class="fa fa-spinner fa-spin"></i>
                          <p>Waiting for Transactions</p>
                          </td>
                        </tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewPendingTransaction;
