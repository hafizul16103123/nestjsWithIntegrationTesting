import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home=()=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        console.log('Home Component is called');
        loadUsers();
    },[])

    const loadUsers = async()=>{
        const res = await axios.get('http://localhost:3001/users');
        setUsers(res.data.data.reverse());
    }
    const handleUserDelete = async(id)=>{
        const res = await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <h1>Home</h1>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Serial</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user,index)=>(
                    <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                        <Link className='btn btn-primary mr-2' to={`/users/${user._id}`} >view</Link>
                        <Link className='btn btn-outline-primary mr-2' to={`/users/edit/${user._id}`}>edit</Link>
                        <Link className='btn btn-danger' onClick={()=>handleUserDelete(user._id)} to=''>Delete</Link>
                    </td>
                </tr>
            ))}
            
            </tbody>
            </table>
        </div>
    )}
export default Home