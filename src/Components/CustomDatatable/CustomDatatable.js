import React from 'react';
import { useEffect, useState } from "react";

const { default: DataTable } = require("react-data-table-component");


export const CustomDatatable = ({title,apiCallback,countPerPage,columns}) =>{
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const getUserList = () => {
    // fetch(`${url}?page=${page}&length=${countPerPage}`)
    // .then(res => res.json())
    console.log({countPerPage});
    apiCallback({ length: countPerPage, page })
    .then(res => ({
      ...res,
      data: res.data.map((row,index) => ({index:page*(index+1),...row}))
    }))
    .then(res => {
      console.log('getUserList',res);
      
      setData(res);
    }).catch(err => {
      setData({});
    });
  }
   
  useEffect(() => {
    getUserList();
  }, [page]);
  
  return <DataTable
    title={title}
    columns={columns}
    data={data.data}
    highlightOnHover
    pagination
    paginationServer
    paginationTotalRows={data.totalPages}
    paginationPerPage={countPerPage}
    paginationComponentOptions={{
      noRowsPerPage: true
    }}
    onChangePage={page => setPage(page)}
  />
}

