import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser=()=>{
    let navigate = useNavigate()
    const [user,setUser] =useState({
        name:'',
        age:''
    })
    const {name,age} =user;
    const onChangeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3001/users',user);
        navigate('/');
    }
    return (
        <div className='container'>
            <h1>AddUser</h1>
            <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" name='name' value={name} onChange={(e)=>{onChangeHandler(e)}}/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter age" name='age' value={age} onChange={(e)=>{onChangeHandler(e)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AddUser