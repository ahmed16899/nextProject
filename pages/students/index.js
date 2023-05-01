import React, { useEffect } from 'react';
import Link from 'next/link'
import { useState } from "react";
import Navbar from "@/components/Navbar";


const home = () => {

    let [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const res = await fetch("/api/students");
        const data = await res.json();
        console.log(data);
        setStudents(data);
    };

    useEffect(() => {
        // This will be called when the component mounts
        fetchStudents();
      }, []);

    const deleteStudent = async (studentId) => {
        const res = await fetch(`/api/students/${studentId}`, {
            method: 'DELETE'
        })
        fetchStudents()
    }




    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        phone: '',
        salary: '',
        address: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can submit the form data to your backend or API here
        console.log(formData);
        //postStudent();
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    const postStudent =async ()=>{
        const res = await fetch("/api/students",{
          method:'POST',
          body:JSON.stringify(formData),
          headers:{
              "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data);
        setStudents((oldData)=>{
            return[...oldData , formData] 
        })

        setFormData({
            name: '',
            email: '',
            age: '',
            phone: '',
            salary: '',
            address: '',
        })
  // <button className="btn btn-primary" onClick={fetchStudents}>Get All Students</button>
    }

    return (
        <>
        <Navbar />
            
            <table className="table w-50 mx-auto my-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Address</th>
                        <th scope="col"></th>
                        <th scope="col"></th>


                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.salary}</td>
                                    <td>{student.address}</td>
                                    <td><Link className="btn btn-primary" href={`/students/${student.id}`}>Details</Link></td>
                                    <td><button className="btn btn-danger" onClick={deleteStudent} >Delete</button></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>


            <form className="w-50 mx-auto" onSubmit={handleSubmit}>

                <label className="mt-2">Name</label>
                <input className="form-control" type="text" name="name"
                    value={formData.name}
                    onChange={handleChange} />


                <label className="mt-2">Age</label>
                <input className="form-control" type="number" name="age"
                    value={formData.age}
                    onChange={handleChange} />


                <label className="mt-2">Email</label>
                <input className="form-control" type="text" name="email"
                    value={formData.email}
                    onChange={handleChange} />


                <label className="mt-2">salary</label>
                <input className="form-control" type="text" name="salary"
                    value={formData.salary}
                    onChange={handleChange} />


                <label className="mt-2">address</label>
                <input className="form-control" type="text" name="address"
                    value={formData.address}
                    onChange={handleChange} />


                <label className="mt-2">phone</label>
                <input className="form-control" type="text" name="phone"
                    value={formData.phone}
                    onChange={handleChange} />

                <button className="btn btn-success mt-3" onClick={postStudent}>Add</button>
            </form>

        </>

    );
};

export default home;
