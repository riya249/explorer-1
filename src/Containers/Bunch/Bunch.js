import React, { Component } from 'react';
import './bunch.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';

class Bunch extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      bunchIndex: params.bunchIndex,
      bunch: {
        data: {},
        isLoading: true,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchBunch();
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
    this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div>
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Bunch #{this.state.bunchIndex}
          </h2>
        </div>
        <div className="wrapper-container">
          <div className="BlockPage-detail">
            <Container>
              <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                <Tab eventKey="overview" title="Overview">
                  <div className="card">
                    <div className="table-responsive">
                      <table className="block-overview">
                        {Object.keys(this.state.bunch.data).length ? (
                          <tbody>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Bunch Index is the Index of Bunch"
                              >
                                Bunch Index:{' '}
                              </td>
                              <td>{this.state.bunch.data.bunchIndex}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Bunch Depth is the Depth of Merkle Tree"
                              >
                                Bunch Depth:{' '}
                              </td>
                              <td>{this.state.bunch.data.bunchDepth}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Transaction Mega Root is the Merkle Root of all the Transaction Roots of Blocks in this Bunch"
                              >
                                Transactions Mega Root:{' '}
                              </td>
                              <td>
                                {this.state.bunch.data.transactionsMegaRoot}
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Receipts Mega Root is the Merkle Root of all the Receipt Roots of Blocks in this Block"
                              >
                                Receipts Mega Root:{' '}
                              </td>
                              <td>{this.state.bunch.data.receiptsMegaRoot}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Last Block Hash is the hash of last Block in this Bunch"
                              >
                                Last Block Hash:{' '}
                              </td>
                              <td>{this.state.bunch.data.lastBlockHash}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Informer pays the gas fee to post the Bunch Roots to Ethereum"
                              >
                                Informer:
                              </td>
                              <td>
                                <AddressLink
                                  value={this.state.bunch.data.informer}
                                  type="address"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Informer Transaction Hash is the Transaction Hash of Bunch Posting Transaction by Informer on Ethereum"
                              >
                                Informer Transaction Hash:{' '}
                              </td>
                              <td>{this.state.bunch.data.informerTxHash}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Block Count is the number of Blocks in this Bunch"
                              >
                                Blocks Count:{' '}
                              </td>
                              <td>{this.state.bunch.data.blocksCount}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Block Count is the number of Blocks in this Bunch"
                              >
                                Transactions Count:{' '}
                              </td>
                              <td>{this.state.bunch.data.transactionsCount}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Time Stamp show that the blocks are connected in a chronological order which marks the time for each transaction on Era Swap Network"
                              >
                                Timestamp:
                              </td>
                              <td>
                                {toLocaleTimestamp(
                                  this.state.bunch.data.timestamp
                                ).fromNow()}{' '}
                                (
                                {toLocaleTimestamp(
                                  this.state.bunch.data.timestamp
                                ).format('MMMM-DD-YYYY hh:mm:ss A')}
                                )
                              </td>
                            </tr>
                          </tbody>
                        ) : (
                          <tr>
                            <td colSpan="2">No Bunch</td>
                          </tr>
                        )}
                      </table>
                    </div>
                  </div>
                </Tab>
                {/* <Tab eventKey="comments" title="Comments">
                  <Row>
                    <Col sm={2}>
                      <img className='comm-profile-Img' src={Images.path.imgProfile} alt='profile' />
                    </Col>
                    <Col sm={10}>
                      <textarea className='comm-field' type="text" id="text" name="text" placeholder="Comments" />
                      <div className="btn-flex-right">
                        <button className="submit-btn-comm">Submit</button>
                      </div>
                    </Col>
                  </Row>
                  <div className="public-container">
                    <div className="flex-user-comm">
                      <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                      <div>
                        <h6>Ravindra Jadeja</h6>
                        <p className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                      </div>
                    </div>

                    <div className="flex-user-comm">
                      <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                      <div>
                        <h6>Ravindra Jadeja</h6>
                        <p className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                      </div>
                    </div>
                  </div>
                </Tab> */}
              </Tabs>
              <Snackbar ref={this.snackbarRef} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Bunch;
