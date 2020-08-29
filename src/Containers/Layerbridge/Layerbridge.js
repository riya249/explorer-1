import React, { Component } from 'react';
import './layerbridge.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { reversePlasmaManager } from '../../ethereum/ReversePlasmaManager';
import { plasmaManager } from '../../ethereum/PlasmaManager';
import { providerEth, providerESN } from '../../ethereum/Provider';

class Layerbridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestESNBlockNumber: null,
      nextStartBlockNumber: null,
      blockNumberETH: null,
      latestBlockNumberOnESNContract: null,
      toEthblocks: {
        data: [],
        isLoading: true,
      },
      toESNblocks: {
        data: [],
        isLoading: true,
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.updateBlockNumber();
      this.updateLatestBlockNumberOnESNContract();
      this.updateNextStartBlockNumber();
      this.updateLatestESNBlockNumber();
      this.fetchToESNBlocks();
      this.fetchToEthBlocks();
    }, 1000);
  }

  updateNextStartBlockNumber = async () => {
    const nextStartBlockNumber = await plasmaManager.getNextStartBlockNumber();
    this.setState({ nextStartBlockNumber: nextStartBlockNumber.toNumber() });
  };

  updateLatestESNBlockNumber = async () => {
    const blockNumber = await providerESN.getBlockNumber();
    this.setState({ latestESNBlockNumber: blockNumber });
  };

  updateBlockNumber = async () => {
    const blockNumber = await providerEth.getBlockNumber();
    this.setState({ blockNumberETH: blockNumber }, this.fetchToESNBlocks);
  };

  updateLatestBlockNumberOnESNContract = async () => {
    const latestBlockNumber = await reversePlasmaManager.latestBlockNumber();
    this.setState(
      {
        latestBlockNumberOnESNContract: latestBlockNumber.toNumber(),
      },
      this.fetchToESNBlocks
    );
  };

  async fetchToEthBlocks() {
    let res;
    try {
      res = await Apis.fetchBunches();
      console.log('toeth blocks', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        toEthblocks: {
          data: Array.isArray(res?.data) ? res?.data : [],
          isLoading: false,
        },
      });
    }
  }

  async fetchToESNBlocks() {
    if (
      this.state.blockNumberETH &&
      this.state.latestBlockNumberOnESNContract
    ) {
      let res;
      try {
        res = await Apis.fetchLayer2ToESNBlock(
          (this.state.blockNumberETH ?? 0) -
            (this.state.latestBlockNumberOnESNContract ?? 0)
        );
        console.log('fetchToESNBlocks res', res.length);
      } catch (e) {
        console.log(e);
      } finally {
        this.setState({
          toESNblocks: {
            data: res && Array.isArray(res) ? res.reverse() : [],
            isLoading: false,
          },
        });
      }
    }
  }

  render() {
    return (
      <div className="layer-bridge compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Layer2 Bridge</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <Col lg={6}>
              <div className="card mb40">
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table ">
                    <tr>
                      <td className="noborder" width="150">
                        <p className="explr-text-black">ESN to ETH</p>
                      </td>
                      <td className="noborder">
                        <p className="explr-purple-text">
                          Last Block Number on Plasma Smart <br />
                          {this.state.nextStartBlockNumber !== null ? (
                            <>
                              {this.state.nextStartBlockNumber - 1}{' '}
                              {this.state.latestESNBlockNumber ? (
                                <>
                                  (+
                                  {this.state.latestESNBlockNumber -
                                    this.state.nextStartBlockNumber}{' '}
                                  blocks pending)
                                </>
                              ) : null}
                            </>
                          ) : (
                            <>Loading...</>
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>Start Block Number</th>
                      <th>Bunch Depth</th>
                    </tr>
                    {this.state.toEthblocks.isLoading ? (
                      <tr>
                        <td colSpan="2">Loading...</td>
                      </tr>
                    ) : this.state.toEthblocks.data?.length ? (
                      this.state.toEthblocks.data.map((block) => (
                        <tr>
                          <td>{block.startBlockNumber}</td>
                          <td>{block.bunchDepth}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2">No Blocks</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="card mb40">
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table ">
                    <tr>
                      <td className="noborder" width="150">
                        <p className="explr-text-black">ETH to ESN</p>
                      </td>
                      <td className="noborder">
                        <p className="explr-purple-text">
                          Live block number of Rinkeby ETH (Layer 1) : 6871773
                          <br />
                          Block number confirmed on ESN Reverse Plasma Contract
                          :{' '}
                          {this.state.latestBlockNumberOnESNContract ??
                            'Loading...'}
                          {this.state.blockNumberETH !== null &&
                          this.state.latestBlockNumberOnESNContract !== null
                            ? ` (${
                                (this.state.blockNumberETH ?? 0) -
                                (this.state.latestBlockNumberOnESNContract ?? 0)
                              } pending)`
                            : null}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>Block Number for Ex</th>
                      <th>Consensus</th>
                    </tr>
                    {this.state.toESNblocks.isLoading ? (
                      <tr>
                        <td colSpan="2">Loading...</td>
                      </tr>
                    ) : this.state.toESNblocks.data?.length ? (
                      this.state.toESNblocks.data.map((block) => (
                        <tr>
                          <td>{block.block_number}</td>
                          <td>
                            {block.block_number <=
                            this.state.latestBlockNumberOnESNContract ? (
                              'Finalized!'
                            ) : (
                              <>
                                [
                                {block?.proposalValidators
                                  ?.map((validator) =>
                                    validator?.address.substr(0, 6)
                                  )
                                  .join(',')}
                                ]
                              </>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2">No Blocks</td>
                      </tr>
                    )}
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

export default Layerbridge;
