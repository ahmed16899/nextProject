import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { useState } from "react";

const studenId = () => {
    const router = useRouter();
    const  studenId  = router.query.studenId
    //console.log(studenId);


    const handleClick = ()=>{
        router.push("/students")
      }
      let [student, setStudent] = useState({});
 
    const fetchStudent = async (id) => {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        //console.log(data);
        setStudent(data);
        setFormData(data);

    };

    useEffect(() => {
        fetchStudent(studenId);
      }, [studenId]);




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
        //console.log(formData);
        //postStudent();
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    const updateStudent =async ()=>{
        const res = await fetch(`/api/students/${studenId}`,{
          method:'PUT',
          body:JSON.stringify(formData),
          headers:{
              "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data); 
        router.push("/students")

  
    }
    return (
        <>
        <div>
            <div className="card w-50 mx-auto shadow my-5">
                <div className="card-body text-center">
                    <h5 className="card-title">{student.name}</h5>
                    <h5 className="card-title">{student.age}</h5>
                    <h5 className="card-title">{student.email}</h5>
                    <h5 className="card-title">{student.phone}</h5>
                    <h5 className="card-title">{student.salary}</h5>
                    <p className="card-text">
                        {student.body}
                    </p>
                    <p className="card-text">
                        {student.address}
                    </p>
                    <button onClick={handleClick} className="btn btn-primary">
                        Back
                    </button>
                </div>
            </div>
        </div>


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

                <button className="btn btn-success mt-3" onClick={updateStudent}>Update</button>
            </form>
            </>
    );
};

export default studenId;
