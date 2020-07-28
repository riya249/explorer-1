import React, { Component } from 'react';
import { ethers } from 'ethers';
import NrtManager from '../../../ethereum/NrtManager';
import stakingManager from '../../../ethereum/StakingManager';

export class StakingItem extends Component {
  stakingContract;
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      amount: null,
      delegations: null,
    };
  }

  componentDidMount = async () => {
    this.stakingContract = stakingManager(this.props.stakingAddress);
    const owner = await this.stakingContract.owner();
    const month = await NrtManager.currentNrtMonth();
    const amountNextMonth = await this.stakingContract.getPrincipalAmount(
      month.add(1)
    );
    const delegationsNextMonth = await this.stakingContract.getDelegations(
      month.add(1)
    );
    const delegations = delegationsNextMonth.map((d) => ({
      platform: d.platform,
      delegatee: d.delegatee,
      amount: ethers.utils.formatEther(d.amount),
    }));

    this.setState({
      owner,
      amount: ethers.utils.formatEther(amountNextMonth),
      delegations,
    });
  };

  render() {
    return (
      <div className="staking-item">
        <p>Staking Contract: {this.props.stakingContractAddress}</p>
        <p>Owner: {this.state.owner ?? 'Loading...'}</p>
        <p>Next Month Amount: {this.state.amount ?? 'Loading...'}</p>
        <p>Next month delegations:</p>
        {this.state.delegations
          ? this.state.delegations.length
            ? this.state.delegations.map((d, i) => (
                <div key={i} className="staking-item">
                  <p>Platform: {d.platform}</p>
                  <p>Delegatee: {d.delegatee}</p>
                  <p style={{ margin: 0 }}>Delegation: {d.amount}</p>
                </div>
              ))
            : 'No delegations'
          : 'Loading...'}
      </div>
    );
  }
}
