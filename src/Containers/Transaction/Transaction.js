import React, { Component } from 'react';
import './transaction.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';


class Transaction extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const { match: { params } } = this.props;
    
    this.state = {
      hash: params.hash,
      transaction: {
        data: {},
        isLoading: true
      }
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    console.log('now')
    this.fetchTransaction();
  }

  async fetchTransaction() {
    try {
      console.log('this.state.hash',this.state.hash)
      const res = await Apis.fetchTransaction(this.state.hash);
      console.log('res',res)
      if (res.status)
        this.setState({
          transaction: {
            data: res.data,
            isLoading: false
          }
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        transaction: {
          data: {},
          isLoading: false
        }
      });
    }
  }

  openSnackBar =(message) => {
    // this.snackbarRef.current.openSnackBar(message);
  }


  render() {
    return (
      <div>
        <div className='booking-hero-bgd booking-hero-bgd-inner'>
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Transaction #{this.state.hash}</h2>
        </div>
        <div className="wrapper-container">
          <div className="BlockPage-detail">
            <Container>
              <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                <Tab eventKey="overview" title="Overview">
                  <div>

                    <table className="block-overview">
                      {Object.keys(this.state.transaction.data).length
                        ?
                        <thead>
                          <tr>
                            <td>Transaction Hash: </td>
                            <td>{this.state.hash}</td>

                          </tr>
                          <tr>
                            <td>Status: </td>
                            <td>{this.state.transaction.data.status_enum}</td>

                          </tr>
                          <tr>
                            <td>Block: </td>
                            <td>{this.state.transaction.data.block?.block_number}</td>

                          </tr>
                          <tr>
                            <td>Timestamp:</td>
                            <td>{toLocaleTimestamp(this.state.transaction?.block?.timestamp).fromNow()} ({toLocaleTimestamp(this.state.transaction?.block?.timestamp).format('MMMM-DD-YYYY hh:mm:ss A')})</td>
                          </tr>
                          <tr>
                            <td>From: </td>
                            <td>{this.state.transaction.data.fromAddress.address}</td>

                          </tr>
                          <tr>
                            <td>To: </td>
                            <td>{this.state.transaction.data.toAddress.address}</td>
                          </tr>
                          <tr>
                            <td>Tokens Transferred:</td>
                            <td><span className="tr-color-txt">{this.state.transaction.data.raw_transactions_count} transactions </span> and 51 contract internal transactions in this transaction</td>

                          </tr>
                          <tr>
                            <td>Value:</td>
                            <td><span className="tr-color-txt"> <AddressLink value={this.state.transaction.data.miner?.address || ''} type="address" /> </span> {this.state.transaction.data.miner?.label && `(${this.state.transaction.data.miner?.label})`} in 14 secs</td>

                          </tr>
                          <tr>
                            <td>Transaction Fee:</td>
                            <td>2.36648154845164884845 ES (2+0.3565451645884654)</td>

                          </tr>
                          <tr>
                            <td>Gas Limit:</td>
                            <td>{this.state.transaction.data.gas_used}</td>
                          </tr>

                          <tr>
                            <td>Gas Used by Transaction: </td>
                            <td>{this.state.transaction.data.gas_limit}</td>
                          </tr>

                          <tr>
                            <td>Gas Price:</td>
                            <td>{this.state.transaction.data.size} bytes</td>
                          </tr>

                          <tr>
                            <td>Nonce:</td>
                            <td>{this.state.transaction.data.nonce} (99.91%)</td>
                          </tr>

                          <tr>
                            <td>Input Data:</td>
                            <td>{this.state.transaction.data.data}</td>
                          </tr>

                        </thead>
                        :
                        <tr>
                          <td colSpan="2">No Transaction</td>
                        </tr>
                      }
                    </table>

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


export default Transaction; 