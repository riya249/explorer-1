import React, { Component } from 'react';
import './nodestatus.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { ethers } from 'ethers';
import Apis from '../../lib/apis';
import { toLocaleTimestamp,formatEther } from '../../lib/parsers';
import AddressLink from '../../Components/AddressLink/AddressLink';

class Nodestatus extends Component {
  provider;
  intervalIds = [];

  constructor(props) {
    super(props);
    this.state = {
      nodes: {
        data: [],
        isLoading: true
      }
    };
  }

  componentDidMount(){
    this.fetchNodes();
  }

  async fetchNodes(){
    let res = [];
    try{
      res = await Apis.fetchNodes();
      console.log('res',res)
    }catch(e){
      console.log(e);
    } finally {
      this.setState({
        nodes: {
          data: Array.isArray(res) ? res : [],
          isLoading: false
        }
      });
    }
    
  }

  extractIp(url){
    try{
      url = new URL(url);
      return /*url.protocol + '//' +*/ url.hostname;  
    }catch(e){
      console.error(e);
      return '';
    } 
  }

  extractPort(url){
    try{
      url = new URL(url);
      return url.port;  
    }catch(e){
      console.error(e);
      return '';
    } 
  }

  render() {
    return (
      <div className="node-status">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Node Status</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table">
                    <tr>
                      <th>Wallet Address</th>
                      <th>Last Seen</th>
                      <th>Host</th>
                      <th>Port</th>
                      <th>OS</th>
                      <th>Stakes</th>
                    </tr>
                    {
                      this.state.nodes.isLoading ? 
                      <tr>
                        <td colSpan="6">Loading...</td>
                      </tr>
                      :
                      this.state.nodes.data?.length ?
                      this.state.nodes.data.map(node => 
                      <tr>
                        <th><AddressLink value={node.address.address} type="address"/></th>
                        <th>{toLocaleTimestamp(node.lastTimeStamp).format('hh:mm DD/MM/YYYY')}</th>
                        <th>{this.extractIp(node.nodeIp)}</th>
                        <th>{this.extractPort(node.nodeIp)}</th>
                        <th>{node.os || 'Linux'}</th>
                        <th>{formatEther(node.stakes?.amount)+' ES' || '-'}</th>
                      </tr>
                      )
                      :
                      <tr>
                        <td colSpan="6">No Nodes</td>
                      </tr>
                    }
                  </table>
                </div>
              </div>
              <div className="cus-pagination row">
                <div className="col-md-12 text-right">
                  <button type="button" className="btn mr10 mt10">
                    Back
                  </button>
                  <button type="button" className="btn mr10 mt10">
                    Next
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Nodestatus;
