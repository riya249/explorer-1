import React, { Component } from 'react';
import './BlockPage.css'
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';


class BlockPage extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const { match: { params } } = this.props;

    this.state = {
      blockNumber: params.blockNumber,
      block: {
        data: {},
        isLoading: true
      }
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchBlock();
  }

  async fetchBlock() {
    try {
      const res = await Apis.fetchBlock(this.state.blockNumber);
      if (res.status)
        this.setState({
          block: {
            data: res.data,
            isLoading: false
          }
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        block: {
          data: {},
          isLoading: false
        }
      });
    }
  }

  openSnackBar(message){
    this.snackbarRef.current.openSnackBar(message);
  }


  render() {
    return (
      <div>
        <div className='booking-hero-bgd booking-hero-bgd-inner'>
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Blocks #{this.state.blockNumber}</h2>
        </div>
        <div className="wrapper-container">
          <div className="BlockPage-detail">
            <Container>
              <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                <Tab eventKey="overview" title="Overview">
                  <div>

                    <table className="block-overview">
                      {Object.keys(this.state.block.data).length
                        ?
                        <thead>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="Block Height is defined as the number of blocks in Era Swap Network between this block and the genesis block in ESN">Block Height: </td>
                            <td>{this.state.blockNumber}</td>

                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="Time Stamp show that the blocks are connected in a chronological order which marks the time for each transaction on Era Swap Network">Timestamp:</td>
                            <td>{toLocaleTimestamp(this.state.block.data.createdOn).fromNow()} ({toLocaleTimestamp(this.state.block.data.createdOn).format('MMMM-DD-YYYY hh:mm:ss A')})</td>
                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="These are the transactions that are included in this Block">Transactions:</td>
                            <td><span className="tr-color-txt">{this.state.block.data.raw_transactions_count} transactions </span> and 51 contract internal transactions in this block</td>

                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="The Address of the Validator who sealed this Block">Sealed By:</td>
                            <td><span className="tr-color-txt"> <AddressLink value={this.state.block.data.miner?.address || ''} type="address" /> </span> {this.state.block.data.miner?.label && `(${this.state.block.data.miner?.label})`} in 14 secs</td>

                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Block Reward:</td>
                            <td>2.36648154845164884845 ES (2+0.3565451645884654)</td>

                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Uncles Reward:</td>
                            <td>0</td>

                          </tr>
                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Difficulty</td>
                            <td>2,332,829,297,798</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Total Difficulty: </td>
                            <td>15,928,285,456,798,756</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="Total space occupied by this Block in every Era Swap Network Node">Size:</td>
                            <td>{this.state.block.data.size} bytes</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="Gas used is the amount of Computation Power utilized in the Block">Gas Used:</td>
                            <td>12,018,436 (99.91%)</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="Gas Limit is the maximum amount of computation that can happen in this Block">Gas Limit:</td>
                            <td>{this.state.block.data.total_gas_used}</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Extra Data:</td>
                            <td>PPYE-ethermine-eu1-7 (Hex:{this.state.block.data.extra_data})</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Parent Hash:</td>
                            <td><span className="tr-color-txt">
                              <AddressLink value={this.state.block.data.parent_hash} type="tx" />
                            </span></td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="">Sha3Uncles:</td>
                            <td>{this.state.block.data.sha3_uncles}</td>
                          </tr>

                          <tr>
                            <td data-toggle="tooltip" data-placement="top" title="The 'n'th Number of transaction by the sender">Nonce:</td>
                            <td>{this.state.block.data.nonce}</td>
                          </tr>
                        </thead>
                        :
                        <tr>
                          <td colSpan="2" data-toggle="tooltip" data-placement="top" title="">No Block</td>
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


export default BlockPage;