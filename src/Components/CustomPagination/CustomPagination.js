import React from 'react';

export default class CustomPagination extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props 
    };
  }
  componentDidMount(){
    // this.setState({
    //   state: this.props
    // });
  }

  componentDidUpdate(props){
    console.log('props 1',props)
    if(this.props.currentPage !== props.currentPage)
      this.setState({
        state: props
      });
  }

  render(){
    console.log('this.state.currentPage',this.state.currentPage)
    console.log('this.state.nextPage',this.state.nextPage)
    console.log('this.state.prevPage',this.state.prevPage)
    return <div>
      <button 
        type="button" 
        onClick={this.props.handleClick.bind(this,1)} 
        >
          First
        </button>
      <button 
        type="button" 
        onClick={this.props.handleClick.bind(this,this.state.prevPage)} 
        >
          Previous
        </button>
      <button 
        type="button" 
        onClick={this.props.handleClick.bind(this,this.state.nextPage)} 
        >
          Next
        </button>
      <button 
        type="button" 
        onClick={this.props.handleClick.bind(this,this.state.totalPages)} 
        >
          Last
        </button>
    </div>
  }
}