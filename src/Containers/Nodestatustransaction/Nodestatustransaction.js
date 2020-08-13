import React, { Component } from 'react';
import './nodestatustransaction.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';
class Nodestatustransaction extends Component {
  snackbarRef = React.createRef();
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
    // this.fetchBunch();
  }
  async fetchBunch() {
    try {
      const res = await Apis.fetchBunch(this.state.bunchIndex);
      if (res.status)
        this.setState({
          bunch: {
            data: res.data,
            isLoading: false,
          },
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        bunch: {
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
      <div className="nrt-manager">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Node status Transaction
          </h2>
        </div>
        <div className="container ">
          <div className="BlockPage-detail">
            <Container>
              <Row>
                <Col lg={12} className="mb20">
                  <h5>ESN Node</h5>
                </Col>
                <Col lg={12}>
                  <div className="card">
                    <div className="table-responsive">
                      <table className="es-transaction striped bordered hover">
                        <tr>
                          <th>Block Height: </th>
                          <th>ESN Node</th>
                        </tr>
                        <tr>
                          <th>Latest Block Number: </th>
                          <th>109972</th>
                        </tr>
                        <tr>
                          <th>New Pending Transactions: </th>
                          <th>0 transactions</th>
                        </tr>
                        <tr>
                          <th>TimeStamp: </th>
                          <th>6/16/2020, 4:59:13 PM</th>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt40">
                <Col lg={12} className="mb20">
                  <h5>Transactions</h5>
                </Col>
                <Col lg={6}>
                  <div className="card">
                    <div className="table-responsive">
                      <table className="es-transaction striped bordered hover">
                        <tr>
                          <th>Block Number</th>
                          <th>Transactions</th>
                          <th>Sealer </th>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="card">
                    <div className="table-responsive">
                      <table className="es-transaction striped bordered hover">
                        <tr>
                          <th>Block Number</th>
                          <th>Transactions</th>
                          <th>Sealer </th>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                        <tr>
                          <td>ESN Node</td>
                          <td>109972</td>
                          <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7 </td>
                        </tr>
                      </table>
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
export default Nodestatustransaction;
