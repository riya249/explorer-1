import React from 'react';

export default function CustomPagination(props) {
  function handleOnChange(e) {
    props.handleClick(0, e.target.value, this);
  }

  function handleClick(pageNo, length = 10, e) {
    let start = 0;
    if (pageNo) start = pageNo * length;
    props.handleClick(start, length);
  }

  return (
    <div className="cus-pagination row">
      <div className="col-md-6 mt20">
        <span className="mr10">Show Result</span>
        <select onChange={handleOnChange}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="col-md-6  text-right">
        <button
          type="button"
          className="btn mr10 mt10"
          onClick={handleClick.bind(this, 0, undefined)}
          disabled={props.prevPage < 0}
        >
          First
        </button>
        <button
          type="button"
          className="btn mr10 mt10"
          onClick={handleClick.bind(this, props.prevPage, undefined)}
          disabled={props.prevPage < 0}
        >
          Previous
        </button>
        <span className="mr10 mt10 page-count">
          Page {props.currentPage + 1} of {props.totalPages + 1}
        </span>
        <button
          type="button"
          className="btn mr10 mt10"
          onClick={handleClick.bind(this, props.nextPage, undefined)}
          disabled={props.currentPage === props.totalPages}
        >
          Next
        </button>
        <button
          type="button"
          className="btn  mt10"
          onClick={handleClick.bind(this, props.totalPages, undefined)}
          disabled={props.currentPage === props.totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}
