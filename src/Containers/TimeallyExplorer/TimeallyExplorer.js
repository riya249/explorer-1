import React, { Component } from 'react';
import './TimeallyExplorer.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import TimeAllyManager from '../../ethereum/TimeallyManager';
import { StakingItem } from './StakingItem/StakingItem';

class TimeallyExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stakings: [],
    };
  }

  componentDidMount = async () => {
    const parsedLogs = (
      await TimeAllyManager.queryFilter(
        TimeAllyManager.filters.StakingTransfer(null, null, null)
      )
    ).map((log) => TimeAllyManager.parseLog(log));

    const stakings = parsedLogs.map((parsedLog) => ({
      // staker: parsedLog.args.from,
      staking: parsedLog.args.staking,
    }));
    console.log('stakings', stakings);
    this.setState({
      stakings,
    });
    // this.setState({
    //   // TODO: the form can be used as staker but not urgetn
    //   stakings: parsedLogs.map((parsedLog) => ({
    //     // staker: parsedLog.args.from,
    //     staking: parsedLog.args.staking,
    //   })),
    // });
  };

  render() {
    return (
      <div>
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">TimeAlly Explorer</h2>
          <p className="explr-txt">
            Era Swap is a Block Explorer and Analytics Platform for
          </p>
          <p className="explr-txt">
            Era Swap, a decentralized smart contracts platform
          </p>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <div className="col-md-12 pull-right">
              <a className="time-dwnld pull-right down-data">
                Download This Data
              </a>
            </div>
            {this.state.stakings.map((staking, i) => (
              <StakingItem key={i} stakingContractAddress={staking.staking} />
            ))}
            {/* <table className="es-transaction striped bordered hover">
              <tr>
                <th>Address</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Staking Type</th>
                <th>Timestamp</th>
              </tr>
              <tr>
                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                <td>1 Year</td>
                <td>7804.97</td>
                <td>Reward Staking</td>
                <td>6/16/2020, 4:59:13 PM </td>
              </tr>
              <tr>
                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                <td>1 Year</td>
                <td>7804.97</td>
                <td>Reward Staking</td>
                <td>6/16/2020, 4:59:13 PM </td>
              </tr>
              <tr>
                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                <td>1 Year</td>
                <td>7804.97</td>
                <td>Reward Staking</td>
                <td>6/16/2020, 4:59:13 PM </td>
              </tr>
              <tr>
                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                <td>1 Year</td>
                <td>7804.97</td>
                <td>Reward Staking</td>
                <td>6/16/2020, 4:59:13 PM </td>
              </tr>
              <tr>
                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                <td>1 Year</td>
                <td>7804.97</td>
                <td>Reward Staking</td>
                <td>6/16/2020, 4:59:13 PM </td>
              </tr>
            </table> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default TimeallyExplorer;
