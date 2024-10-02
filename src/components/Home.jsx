import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../backend/url'

function Home() {
    const [students,setstudents]=useState([])
    const navigate=useNavigate()

    const getstudent=async()=>{
        const result=await axios.get(`${url}/getstudents`)
        console.log(result);
        setstudents(result.data)
    }

    const deletefunction=async(id)=>{
        const result=await axios.delete(`${url}/deletestudent/${id}`)
        console.log(result);
        getstudent()
    }

    const editfunction=async(id)=>{
        navigate(`/editstudent/${id}`)
    }

    useEffect(()=>
    {
        getstudent()
    },[])
  return (
    <>
    {/* navbar */}

    <div className="flex flex-col md:flex-row md:justify-between items-center p-5 space-y-5 md:p-4 ">
    <h1 className="text-3xl text-pink-700">Student Management System</h1>
    <div className="flex items-center">
        <input className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm w-full md:w-auto"
        type="search" placeholder="Search students"
        />
        <button className="bg-yellow-500 border-0 py-2 px-2 rounded-md">Search</button>
    </div>
    </div>

    {/* view students */}
    

<div className="overflow-x-auto mt-10">
    <table className="w-full text-sm text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-400">
            <tr>
            
                <th className="px-6 py-3">
                    Student name
                </th>
                <th className="px-6 py-3">
                    Email ID
                </th>
                <th className="px-6 py-3">
                    Date Of Birth
                </th>
                <th className="px-6 py-3">
                    Phone Number
                </th>
                <th className="px-6 py-3">
                    Address
                </th>
                <th className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {students.length>=0?
            students.map((student)=>(<tr className="bg-white border-b-2 text-black text-center">
                <td className="px-6 py-4">
                    {student.studentname}
                </td>
                <td className="px-6 py-4">
                    {student.emailid}
                </td>
                <td className="px-6 py-4">
                    {student.dob}
                </td>
                <td className="px-6 py-4">
                    {student.phnum}
                </td>
                <td className="px-6 py-4">
                    {student.address}
                </td>
                <td className='flex items-center px-6 py-4 justify-center'>
                <button className="bg-blue-500 border-0 py-1 px-5 rounded-md text-white" onClick={()=>editfunction(student._id)}>Edit</button>
                <button className="bg-red-500 border-0 py-1 px-5  text-white rounded-md ms-3" onClick={()=>deletefunction(student._id)}>Delete</button>
                </td>
            </tr>))
            
            :<p>No data available</p>}
        </tbody>
    </table>
</div>

<div className='text-center mt-9'>
    <Link to={'/addstudent'}><button className="bg-green-700 border-0 py-1 px-5 rounded-md text-white">Add student</button></Link>
</div>

    </>
  )
}

export default Home
