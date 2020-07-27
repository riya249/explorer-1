import React, { Component } from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import * as moment from 'moment';
import './Homepage.css'
import Images from '../Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { toLocaleTimestamp } from '../../lib/parsers';
import { ethers } from 'ethers';

class Homepage extends Component {
  snackbarRef = React.createRef();
  search = '';

  constructor(props) {
    super(props);
    this.state = {
      esPriceUSDT: 0,
      esPriceBTC: 0,
      blocks: {
        data: [],
        isLoading: true
      },
      transactions: {
        data: [],
        isLoading: true
      },
      bunches: {
        data: [],
        isLoading: true
      },
    };

    this.fetchTransactions = this.fetchTransactions.bind(this);
  }

  componentDidMount() {
    this.fetchBlocks();
    this.fetchTransactions();
    this.fetchBunches();
    this.fetchESPrice();
  }

  fetchBlocks = async () => {
    try {
      const res = await Apis.fetchBlocks(0, 3);
      this.setState({
        blocks: {
          data: res.data,
          isLoading: false
        }
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        blocks: {
          data: [],
          isLoading: false
        }
      });
    }
  }

  openSnackBar = message =>{
    // this.snackbarRef.current.openSnackBar(message);
  } 

  fetchTransactions = async() => {
    try {
      const res = await Apis.fetchTransactions(0, 3);
      console.log('res',res)
      this.setState({
        transactions: {
          data: res.data, 
          isLoading: false
        }
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        transactions: {
          data: [],
          isLoading: false
        }
      });
    }
  }

  fetchBunches = async() => {
    try {
      const res = await Apis.fetchBunches(0, 3);
      console.log('bunches res',res)
      this.setState({
        bunches: {
          data: res.data, 
          isLoading: false
        }
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        bunches: {
          data: [],
          isLoading: false
        }
      });
    }
  }

  async fetchESPrice(){
    try{
      const res = await Apis.getESPrice();
      console.log('fetchESPrice res',res)
      if(res?.data?.probitResponse?.data?.length){
        this.setState({
          esPriceUSDT: res.data.probitResponse.data[0].last,
          esPriceBTC: res.data.probitResponse.data[1].last,
        })
      }
    }catch(e){
      console.log(e)
    }
  }


  handleChange = (e) => {
    switch (e.target.name) {
      case 'search':
        this.search = e.target.value;
        break;
      default:
        break;
    }
  }
 
  handleClick = () => {
    if(this.search.length === 42)
      this.props.history.push('/address/'+this.search);
    else if(this.search.length === 66)
      this.props.history.push('/tx/'+this.search);
    else
      this.props.history.push('/block/'+this.search);
  }

  calculatePriceDiff(){
    if(this.state.esPriceUSDT && this.state.esPriceBTC){

    }
  }

  render() {
    return (
      <div>
        <div className='booking-hero-bgd'>
          <Navbar />
          <h2 className="es-main-head">Era Swap Blockchain Explorer</h2>
        </div>
        <div className="esexplorer-Container">

          <div className="home-search-container">

            <Container>
              <form >
                <input type="text" placeholder="Block, hash, transaction etc.." name="search" className="search-field" onChange={this.handleChange}/>
                <button className="search-btn"> <img className='search-Img' src={Images.path.search} onClick={this.handleClick}/></button>
              </form>
            </Container>
          </div>
        </div>
        <div className="es-explorer-wrapper">
          <Container>
            <div className="second-section-es">
              <Row>
                <Col lg={4} className="border-right">
                  <div className="flex-eraswap">
                    <img src={Images.path.escolor} className='escolor-pic1' />
                    <div>
                      <p className="era-head">ERA SWAP PRICE</p>
                      <p className="text-black">{this.state.esPriceUSDT ? `$ ${this.state.esPriceUSDT}` : 'Loading...' } <span className="text-gray">@ {this.state.esPriceBTC ? `${this.state.esPriceBTC} BTC` : 'Loading...' }</span>  <span className="text-green"> (+0.61%)</span></p>
                    </div>
                  </div>
                  <div className="mt10">
                    <div className="pdl70">
                      <p className="era-head">MARKET VOLUME</p>
                      <p className="text-black">$229.86</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="border-right">
                  <div className="flex-transc row">
                    <div className="col-lg-6">
                      <p className="era-head">TRANSACTIONS </p>
                      <p className="era-value text-black">738.81 M <span className="era-span text-gray">(12.1 TPS)</span></p>
                    </div>
                    <div className="col-lg-6">
                      <p className="era-head">SAFE GAS PRICE</p>
                      <p className="era-value text-black">0 Gwel <span className="era-span text-gray">($0.0)</span></p>
                    </div>
                  </div>
                  <div className="flex-transc border-value row">
                    <div className="col-lg-6">
                      <p className="era-head">DIFFICULTY</p>
                      <p className="era-value text-black">0 TH</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="era-head">HASH RATE</p>
                      <p className="era-value text-black">0 GH/s</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div>
                    <p className="era-head">ERA SWAP TRANSACTION HISTORY IN 14 DAYS</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <Row>
              <Col lg={4}>
                <div className="border-era">Latest Bunch </div>
                <table className="era-transaction">
                  {this.state.bunches.isLoading ? 
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                :
                this.state.bunches.data?.length ?

                this.state.bunches.data.map((bunch,i) => 
                <tr>
                  <td className="frst-era">
                    <AddressLink value={bunch.bunchIndex} type="bunch"/> 
                  <div className="sub-frst">{toLocaleTimestamp(bunch.createdOn).fromNow()}</div>
                  </td>
                  <td>Informer <span className="frst-era"><AddressLink value={bunch?.informer.address} type="address" shrink={true} /></span> 
                  {/* <div className="sub-frst">45 secs ago</div>  */}
                  </td>
                  <td><div className="era-no">{bunch.bunchDepth} </div> </td>
                </tr>
                )
                :
                <tr>
                  <td colSpan="4">No Bunches</td>
                </tr>
                }
                </table>
                <div className="border-era-two">
                  <button className="era-view-btn"><Link to="/bunches" className="era-link">View all Bunch</Link></button>
                </div>
              </Col>

              <Col lg={4}>
                <div className="border-era">Latest Blocks</div>
                <table className="era-transaction">
                  {this.state.blocks?.isLoading ?
                    'Loading...'
                    :
                    this.state.blocks?.data?.length ?
                      this.state.blocks.data.map((block, i) => {
                        return <tr key={i + 1}>
                          <td className="frst-era">
                            <AddressLink value={block.block_number} type="block" />
                            <div className="sub-frst">
                              {moment(moment(block.createdOn).toDate()).fromNow()}
                            </div>
                          </td>
                          <td>Miner <span className="frst-era">
                            <AddressLink value={block?.miner?.address} type="address" shrink={true}/>
                          </span>
                           </td>
                          <td><div className="era-no">{block.provisional_reward ? block.provisional_reward : <i>pending...</i>}</div> </td>
                        </tr>;
                      })
                      :
                      'No Blocks'
                  }
                </table>
                <div className="border-era-two">
                  <button className="era-view-btn"><Link to="/blocks" className="era-link">View all Blocks</Link></button>
                </div>
              </Col>

              <Col lg={4}>
                <div className="border-era">Latest Transactions</div>
                <table className="era-transaction">
                  {this.state.transactions?.isLoading ?
                    'Loading...'
                    :
                    this.state.transactions?.data?.length ?
                      this.state.transactions.data.map((transaction, i) => {
                        return <tr key={i + 1}>
                          <td className="frst-era">
                            <AddressLink value={transaction.txn_hash} type="tx" shrink={true}/>
                            <div className="sub-frst">
                              {moment(moment(transaction.createdOn).toDate()).fromNow()}
                            </div>
                          </td>
                          <td>
                            <span className="">
                             From: <AddressLink value={transaction?.fromAddress?.address} type="address" shrink={true}/><br></br>
                             To: <AddressLink value={transaction?.toAddress?.address} type="address" shrink={true}/>
                            </span>
                             </td>
                          <td><div className="era-no">{ethers.utils.formatEther(transaction.value)} ES</div> </td>
                        </tr>;
                      })
                      :
                      'No Transactions'
                  }

                </table>
                <div className="border-era-two">
                  <button className="era-view-btn"><Link to="/txs" className="era-link">View all Transactions</Link></button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Snackbar ref={this.snackbarRef} />
      </div>

    );

  }
}


export default withRouter(Homepage);