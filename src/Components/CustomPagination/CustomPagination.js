import React from 'react';

export default function CustomPagination(props)  {
  
    return <div>
      <button 
        type="button" 
        onClick={props.handleClick.bind(this,1)} 
        disabled={props.prevPage < 0}
        >
          First
        </button>
      <button 
        type="button" 
        onClick={props.handleClick.bind(this,props.prevPage)} 
        disabled={props.prevPage < 0}
        >
          Previous
        </button>
      <button 
        type="button" 
        onClick={props.handleClick.bind(this,props.nextPage)} 
        disabled={props.currentPage === props.totalPages}
        >
          Next
        </button>
      <button 
        type="button" 
        onClick={props.handleClick.bind(this,props.totalPages)} 
        disabled={props.currentPage === props.totalPages}
        >
          Last
        </button>
    </div>;
}