import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link ,useParams} from 'react-router-dom'

const ViewUser=()=>{
    const {id} = useParams();
    const [user,setUsers] = useState([])

    useEffect(()=>{
        console.log('ViewUser Component is called');
        loadUser();
    },[])

    const loadUser = async()=>{
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUsers(res.data.data);
    }
 

    return (
        <div className='container'>
            <h1>ViewUser</h1>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
            {
                <tr>
                    <td >{user._id}</td>
                    <td >{user.name}</td>
                    <td >{user.age}</td>
                </tr>
            }
            
            </tbody>
            </table>
        </div>
    )}
export default ViewUser