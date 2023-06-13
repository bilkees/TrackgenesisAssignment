import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
const DataTableComponent = () => {
  const[records,setRecords]= useState([])
  const [filterRecords,setFilterRecords]= useState([])

    const column=[
      {
name:"id",
selector:row => row.id,
sortable:true
      },
        {
            name:"title",
            selector:row => row.title,
            sortable:true
        },
        {
            name:"Image",
            selector:row =><img width={50} height={50} src={row.image}/> ,
            sortable:true
        },
//         {
//           name:"rating",
// selector:row => row.rating.rate,
// sortable:true
//         }
    ]
    // const handleFilter=(event)=>{
    //   const newData= records.filter(row=>row.name.includes(event.target.value))
    // setRecords(newData)
    // }
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
       // console.log(response.data);
       let records=response.data;
      setRecords(records);
      setFilterRecords(response.data)
    //     const firstProduct = product[0];
    //     const productName = firstProduct.title;
    // const productDescription = firstProduct.description;
      
    // console.log('Product Name:', productName);
    // console.log('Description:', productDescription);
    })
    .catch(error => console.log(error));
   
    },[])
  return (
    <div style={{padding:"50px 10%",backgroundColor:""}}>
      {/* <div style={{display:'flex', justifyContent:'right'}}>
        <input type="text" placeholder='Search...' onChange={handleFilter} style={{padding:'6px 10px'}}></input></div> */}
      <DataTable
        columns={column}
        data = {records}
        pagination
        selectableRows
        

        >
      </DataTable>
    </div>
  )
}

export default DataTableComponent