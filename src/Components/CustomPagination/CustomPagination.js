import React from 'react';

export default function CustomPagination(props)  {

    function handleOnChange(e){
      props.handleClick(0,e.target.value,this);
    }

    return <div>
      <div>
        <span>Show Result</span>
        <select onChange={handleOnChange}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div>
        <button 
          type="button" 
          onClick={props.handleClick.bind(this,0,undefined)} 
          disabled={props.prevPage < 0}
          >
            First
          </button>
        <button 
          type="button" 
          onClick={props.handleClick.bind(this,props.prevPage,undefined)} 
          disabled={props.prevPage < 0}
          >
            Previous
          </button>
          <span>
            Page {props.currentPage +1 } of {props.totalPages +1}
          </span>
        <button 
          type="button" 
          onClick={props.handleClick.bind(this,props.nextPage,undefined)} 
          disabled={props.currentPage === props.totalPages}
          >
            Next
          </button>
        <button 
          type="button" 
          onClick={props.handleClick.bind(this,props.totalPages,undefined)} 
          disabled={props.currentPage === props.totalPages}
          >
            Last
          </button>
        </div>
    </div>;
}