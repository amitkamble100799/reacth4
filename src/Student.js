import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
function Student() {
    const [data]=useState([
        {
         name:"Amit",
         age:23,
         course:"MERN",
         batch:"EA23",
         change:"Edit"
        },
        {
            name:"Ankit",
            age:22,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Nikhil",
            age:24,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Ajay",
            age:23,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Amogh",
            age:24,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Basavaraj",
            age:22,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Yash",
            age:24,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           },
           {
            name:"Naveen",
            age:25,
            course:"MERN",
            batch:"EA23",
            change:"Edit"
           }

    ]);
  return (
    <div >
     <div> <h1 id='h2'>Student Details<span className='sp'>Add new student</span></h1></div>

    <table className='l1'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>change</th>
        </tr>
        
            {data.map((item,index)=>{
               return(
            
                <tr key={index}>

                <td>{item.name}</td>
             
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link>{item.change}</Link></td>
                </tr>
            
               )
            })
            }
        
    </table>
    
    </div>
  )
}

export default Student