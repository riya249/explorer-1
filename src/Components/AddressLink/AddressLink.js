import React from 'react'; 
import { Link } from 'react-router-dom';
import './addresslink.css';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { LocalStorageManager } from '../../lib/LocalStorageManager';
import { providerESN } from '../../ethereum/Provider';
import { ethers } from 'ethers';
const ONE_DAY = 1000*60*60*24;
/***
 * props: {
 *  type: tx, address, block, bunch
 *  value :
 * }
 */
export default class AddressLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      popupMessage: props.value,
      addressComponent: props.value
    };
    this.copyValue = this.copyValue.bind(this);
  }

  componentDidMount(){
    this.renderValue();
  }

  shrinkValue(value) {
    // return value.substr(0,5) + '...' + value.substr(value.length - 5,value.length);
    return value && value.length && value.substr(0, 14) + '...';
  }

  copyValue() {
    const input = document.createElement('input');
    input.value = this.props.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this.setState(
      {
        popupMessage: 'Copied!',
      },
      () => {
        setTimeout(() => {
          this.setState({
            popupMessage: this.props.value,
          });
        }, 1500);
      }
    );
  }

  async getUsername(){
    try{
      //fetch from localStorage if not exists then fetch from provider
      const storedUsername = LocalStorageManager.getWithExpiry(this.props.value);
      if(storedUsername) return storedUsername.value;

      const usernameByte32 = await providerESN.resolveUsername(this.props.value);
      const username = ethers.utils.parseBytes32String(usernameByte32);
      LocalStorageManager.setWithExpiry(this.props.value,username,ONE_DAY);
      return username;
    }catch(e){
      console.log(e)
      return null
    }
  }

  async renderValue(){
    const value = this.props.shrink
        ? this.shrinkValue(this.props.value)
        : this.props.value;

    let username = null;
    if(this.props.type === 'address')
      username = await this.getUsername(username);
    
    const addressComponent = username ? <>{username} ({value})</> : value;
    console.log({username,value});
    console.log({addressComponent})
    this.setState({ addressComponent });
  }

  render() {
    const url = '/' + this.props.type + '/' + this.props.value;
    return (
      <>
        <Link
          to={{
            pathname: url,
            state: { value: this.props.value },
          }}
          title={this.props.value}
          className="frst-era hex-data"
          style={this.props.style}
        >
          {/* {this.state.addressComponent} */}
          {this.props.shrink
        ? this.shrinkValue(this.props.value)
        : this.props.value}
        </Link>
        &nbsp;
        <CustomTooltip
          message={this.state.popupMessage}
          style={this.props.style}
        >
          <button
            class="btn-transparent"
            onClick={this.copyValue}
            style={this.props.style}
          >
            <i class="fa fa-copy"></i>
          </button>
        </CustomTooltip>
      </>
    );
  }
}
