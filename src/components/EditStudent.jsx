import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { url } from '../backend/url'

function EditStudent() {
  const {id}=useParams()
  // console.log(id);
  
  const [students,setstudents]=useState([])
  const [updatestud,setupdatestud]=useState({
    emailid:"",
    studentname:"",
    dob:"",
    phnum:"",
    address:""
  })
  console.log(updatestud);
  
  const allstudentsbyid=async()=>
  {
    const result=await axios.get(`${url}/getstudentsbyid/${id}`)
    console.log(result);
    setstudents(result.data)
    setupdatestud(result.data);
  }

  const handleedit=async(e)=>
  {
    e.preventDefault()
    const{emailid,studentname,dob,phnum,address}=updatestud
    const result=await axios.put(`${url}/editstudent/${id}`,{emailid,studentname,dob,phnum,address})
    console.log(result);
    if(result.status===200)
    {
      alert("Student updated successfully")
    }
    else
    {
      alert("Failed to update")
    }
  }

  useEffect(()=>
  {
    allstudentsbyid()
  },[])

  return (
    <form className="max-w-sm mx-auto mt-10">
    <h2 className='font-bold text-3xl text-center mb-4'>Edit Details</h2>
    
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email ID</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={updatestud.emailid} onChange={(e)=>setupdatestud({...updatestud,emailid:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Student Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={updatestud.studentname} onChange={(e)=>setupdatestud({...updatestud,studentname:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="dob" className="block mb-2 text-sm font-medium text-gray-900">Date Of Birth</label>
    <input type="date" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={updatestud.dob} onChange={(e)=>setupdatestud({...updatestud,dob:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="phnum" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
    <input type="number" id="phnum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 "  required value={updatestud.phnum} onChange={(e)=>setupdatestud({...updatestud,phnum:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
    <textarea type="number" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={updatestud.address} onChange={(e)=>setupdatestud({...updatestud,address:e.target.value})}/>
  </div>

  <div className='flex items-center justify-between'>
      <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5" onClick={handleedit}>Update</button>
    
      <Link to={'/'}><button className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Back</button></Link>
  </div>
</form>

  )
}

export default EditStudent
