import React from 'react';
import { Link } from 'react-router-dom';

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
    };
  }

  shrinkValue(value) {
    // return value.substr(0,5) + '...' + value.substr(value.length - 5,value.length);
    return value && value.length && value.substr(0, 14) + '...';
  }

  render() {
    const url = '/' + this.props.type + '/' + this.props.value;
    return (
      <Link
        to={{
          pathname: url,
          state: { value: this.props.value },
        }}
        title={this.props.value}
        className="frst-era hex-data"
      >
        {this.props.shrink
          ? this.shrinkValue(this.props.value)
          : this.props.value}
      </Link>
    );
  }
}
