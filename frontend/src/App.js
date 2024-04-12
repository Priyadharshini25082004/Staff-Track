import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home';


axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function EmployeeForm() {
    const [formData, setFormData] = useState({
        employee_name: '',
        employee_id: '',
        department: '',
        dob: '',
        gender: '',
        designation: '',
        salary: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const { employee_name, employee_id, department, dob, gender, designation, salary } = formData; 
        const res = await axios.post('/submit', {
            employee_name, employee_id, department, dob, gender, designation, salary
        });


        // console.log("formData: ", formData)
    };

    return (
        <div>
            
            <h1>Employee Management Application</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="employee_name">Employee name</label>
                    <input type="text" id="employee_name" name="employee_name" placeholder="Enter your name" value={formData.employee_name} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="employee_id">Employee ID</label>
                    <input type="text" id="employee_id" name="employee_id" placeholder="Enter your ID" value={formData.employee_id} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" value={formData.department} onChange={handleChange}>
                        <option value="">Select Department</option>
                        <option value="Marketing">Marketing & Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="Production">Production</option>
                        <option value="HR">Human Resource</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label>Gender</label>
                    <label htmlFor="male">
                        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />Female
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" id="designation" name="designation" placeholder="Enter your job role" value={formData.designation} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" id="salary" name="salary" placeholder="Enter your Salary" value={formData.salary} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EmployeeForm;

