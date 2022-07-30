import React, { useEffect, useState } from 'react'

const TableRender = () => {

    const [item,setItem] = useState([]);


    useEffect(()=>{
        const fetchapi = async()=>{
            const url ="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
            const response = await fetch(url);
            const data = await response.json();
            setItem(data);
        }
        fetchapi();
        
    },[])

    console.log(item);

  return (
    <>
        <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>website</th>
                <th>address</th>
                <th>zipcode</th>

            </tr>
        </thead>
            <tbody>
            {
                item.map((ele,ind)=>{
                    return(
                        
                            <tr key={ind}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>  
                                <td>{ele.phone}</td>
                                <td>{ele.website}</td>
                                <td>{`${ele.address.city},${ele.address.street}`}</td> 
                                <td>{ele.address.zipcode}</td>                         
                            </tr>
                        
                    )
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default TableRender