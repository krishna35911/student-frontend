import axios from 'axios';
import React, { useState } from 'react'
import { url } from '../backend/url';
import { Link } from 'react-router-dom';

function Add() {
    const[student,setstudent]=useState({
        emailid:"",
        studentname:"",
        dob:"",
        phnum:"",
        address:""
    })
    console.log(student);

    const submit=async(e)=>{
        e.preventDefault()
        const{emailid,studentname,dob,phnum,address}=student;
        try {
            const result=await axios.post(`${url}/addstudent`,{emailid,studentname,dob,phnum,address})
            console.log(result);
            if(result.status===200)
            {
                alert("Student added successfully") 
                setstudent({
                    emailid:"",
                    studentname:"",
                    dob:"",
                    phnum:"",
                    address:""
                })
            }
            else
            {
                alert("Failed to add")
            }
        } catch (error) {
            alert(error.response.data)
            setstudent({
                emailid:"",
                studentname:"",
                dob:"",
                phnum:"",
                address:""
            })
        }
    }
  return (
    <form className="max-w-sm mx-auto mt-10">
    <h2 className='font-bold text-3xl text-center mb-4'>Add Student</h2>

    <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Id</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={student.emailid} onChange={(e)=>setstudent({...student,emailid:e.target.value})} />
  </div>

  <div className="mb-5">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Student Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={student.studentname} onChange={(e)=>setstudent({...student,studentname:e.target.value})} />
  </div>

  <div className="mb-5">
    <label for="dob" className="block mb-2 text-sm font-medium text-gray-900">Date Of Birth</label>
    <input type="date" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={student.dob} onChange={(e)=>setstudent({...student,dob:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="phnum" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
    <input type="number" id="phnum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 "  required value={student.phnum} onChange={(e)=>setstudent({...student,phnum:e.target.value})}/>
  </div>

  <div className="mb-5">
    <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
    <textarea type="number" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " required value={student.address} onChange={(e)=>setstudent({...student,address:e.target.value})}/>
  </div>

  <div className='flex items-center justify-between'>
      <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5" onClick={submit}>Submit</button>
    
      <Link to={'/'}><button className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">Back</button></Link>
  </div>
</form>
  )
}

export default Add
