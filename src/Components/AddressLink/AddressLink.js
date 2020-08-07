import React from 'react';
import { Link } from 'react-router-dom';
import './addresslink.css';
import CustomTooltip from '../CustomTooltip/CustomTooltip';


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
      popupMessage: props.value
    };
    this.copyValue = this.copyValue.bind(this);
  }

  shrinkValue(value) {
    // return value.substr(0,5) + '...' + value.substr(value.length - 5,value.length);
    return value && value.length && value.substr(0, 14) + '...';
  }

  copyValue(){
    const input = document.createElement('input');
    input.value = this.props.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    this.setState({
      popupMessage: 'Copied!'
    },() => {
      setTimeout(() => {
        this.setState({
          popupMessage: this.props.value
        });
      },1500)
    });
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
        {this.props.shrink
          ? this.shrinkValue(this.props.value)
          : this.props.value}
      </Link>&nbsp;
      <CustomTooltip message={this.state.popupMessage}>
      <button class="btn-transparent" onClick={this.copyValue}>
        <i class="fa fa-copy"></i>
      </button>
      </CustomTooltip>
      </>
    );
  }
}
