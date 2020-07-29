import React, { Component } from 'react';
import './Blocks.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import AddressLink from '../../Components/AddressLink/AddressLink';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import { toLocaleTimestamp } from '../../lib/parsers';
import { ethers } from 'ethers';

class Blocks extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        data: [],
        currentPage: 0,
        totalPages: 0,
        isLoading: false,
      },
    };

    this.fetchBlocks = this.fetchBlocks.bind(this);
  }

  componentDidMount() {
    this.fetchBlocks(0);
  }

  async fetchBlocks(start, length = 10) {
    try {
      const res = await Apis.fetchBlocks(start, length);
      console.log('res', res);
      if (res)
        this.setState({
          blocks: {
            data: res.data,
            currentPage: Number(res.currentPage),
            totalPages: res.totalPages,
            isLoading: false,
          },
        });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        blocks: {
          data: [],
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
      <div className="blocks-table">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Blocks</h2>
        </div>
        <Container>
          <div className="table-responsive">
            <table className="es-transaction table">
              <tr>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The Block in which this Transaction was included"
                >
                  Block
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Age is the Age of this Block when it was mined"
                >
                  Age
                </th>
                <th data-toggle="tooltip" data-placement="top" title="">
                  Transaction
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The validator who authors a Block on Era Swap Network"
                >
                  Sealer
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Gas used is the amount of Computation Power utilized in the Block"
                >
                  Gas Used
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Gas Limit is the maximum amount of computation that can happen in this Block"
                >
                  Gas Limit
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The average gas price is typically on the order of about 20 ESMETER (or 0.00000002 ES), but can increase during times of high network traffic as there are more transactions competing to be included in the next block"
                >
                  Average Gas Price
                </th>
                <th
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Rewards are the rewards pending for final computation at the beginning of the next NRT month"
                >
                  Reward
                </th>
              </tr>
              {this.state.blocks.isLoading ? (
                <tr>
                  <td colspan="9">Loading</td>
                </tr>
              ) : this.state.blocks.data.length ? (
                this.state.blocks.data.map((block, i) => {
                  return (
                    <tr key={i + 1}>
                      <td className="tr-color-txt">
                        <AddressLink value={block.block_number} type="block" />
                      </td>
                      <td>{toLocaleTimestamp(new Date(block.timestamp).getTime()*1000).fromNow()}</td>
                      <td className="tr-color-txt">
                        <Link
                          to={{
                            pathname: 'txs' + '/' + block.block_number,
                            state: { value: block.block_number },
                          }}
                        >
                          {block.raw_transactions_count}
                        </Link>
                      </td>
                      <td className="tr-color-txt">
                        <AddressLink
                          value={block.miner.address}
                          type="address"
                        />
                      </td>
                      <td className="underline">
                        {block?.total_gas_used} (
                        {(
                          (block?.total_gas_used / block?.total_gas_limit) *
                          100
                        ).toFixed(2)}
                        %)
                      </td>
                      <td>{block.total_gas_limit} </td>
                      <td>
                        {' '}
                        {ethers.utils.formatEther(block.average_gas_price)} ES
                      </td>
                      <td>
                        {block.provisional_reward !== null ? (
                          block.provisional_reward + 'ES'
                        ) : (
                          <i>pending for next NRT...</i>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colspan="9">Loading</td>
                </tr>
              )}
            </table>
          </div>
          <CustomPagination
            handleClick={this.fetchBlocks}
            currentPage={this.state.blocks.currentPage}
            prevPage={this.state.blocks.currentPage - 1}
            nextPage={this.state.blocks.currentPage + 1}
            totalPages={this.state.blocks.totalPages}
          />
          <Snackbar ref={this.snackbarRef} />
        </Container>
      </div>
    );
  }
}

export default Blocks;
