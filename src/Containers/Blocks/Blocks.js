import React, { Component } from 'react';
import './Blocks.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import AddressLink from '../../Components/AddressLink/AddressLink';
import * as moment from 'moment';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';

class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          blocks: {
            data: [],
            currentPage: 0,
            totalPages: 0,
            isLoading: false
          }
        };

        this.fetchBlocks = this.fetchBlocks.bind(this);
    }

    componentDidMount(){
      this.fetchBlocks(0);
    }

    componentDidUpdate(){

    }

    async fetchBlocks(i,e){
      try {
        console.log('calling page number',i);
        let pageNo = 0;
        if(i) pageNo = i * 10;
        const res = await Apis.fetchBlocks(pageNo);
        console.log('res',res,i)
        this.setState({
          blocks: {
            data: res.data,
            currentPage: Number(res.currentPage),
            totalPages: res.totalPages,
            isLoading: false
          }
        });
      } catch (e) {
        console.log(e);
        this.snackbarRef.current.openSnackBar(e.message);
        this.setState({
          blocks: {
            data: [],
            isLoading: false
          }
        });
      }
    }


    render() {
        return (
            <div className="blocks-table">
               <div className='booking-hero-bgd booking-hero-bgd-inner'>
                    <Navbar />
                    <h2 className="es-main-head es-main-head-inner">Blocks</h2>
                 </div>
                <Container>
                   
                    <table className="es-transaction ">
                        <tr>
                            <th>Block</th>
                            <th>Age</th>
                            <th>Txn</th>
                            <th>Uncles</th>
                            <th>Miner</th>
                            <th>Gas Used</th>
                            <th>Gas Limit</th>
                            <th>Avg.Gas Price</th>
                            <th>Reward</th>
                        </tr>
                        {
                          this.state.blocks.isLoading ? 
                          <tr>
                            <td colspan="9">Loading</td>
                          </tr>
                          :
                          this.state.blocks.data.length ?
                          this.state.blocks.data.map((block,i) => {
                            return <tr key={i+1}>
                              <td className="tr-color-txt">
                                <AddressLink value={block.block_number} type="block"/>
                              </td>
                              <td>{moment(moment(block.createdOn).toDate()).fromNow()}</td>
                              <td className="tr-color-txt">
                                <Link to={{
                                    pathname:'block'+'/'+block.block_number,
                                    state: { value: block.block_number}
                                  }}>{block.raw_transactions_count}</Link>
                              </td>
                              <td>0</td>
                              <td className="tr-color-txt"><AddressLink value={block.miner.address} type="address"/></td>
                              <td className="underline">{block.total_gas_used} <span className="tr-color-txt">(97.71%)</span></td>
                              <td>{block.total_gas_limit} </td>
                              <td>24.83 Gwei</td>
                              <td>2.28994 ES</td>
                          </tr>
                          })
                          :
                          <tr>
                            <td colspan="9">Loading</td>
                          </tr>
                        }
                    </table>
                      <CustomPagination 
                        handleClick={this.fetchBlocks} 
                        currentPage={this.state.blocks.currentPage}
                        prevPage={this.state.blocks.currentPage - 1}
                        nextPage={this.state.blocks.currentPage + 1}
                        totalPages={this.state.blocks.totalPages}
                      />
                </Container>
            </div>
        );

    }
}


export default Blocks;