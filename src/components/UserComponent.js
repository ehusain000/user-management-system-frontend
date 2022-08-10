import { useState } from "react";
import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

export default function UserComponent(){

    const [users, setUsers] = useState([])

    axios.get(USERS_REST_API_URL)
    .then(res =>{
        setUsers(res.data);
    });
    

    return(
        <div>
            <h1 className = "text-center"> Users List</h1>
            <table className = "table table-striped">
                <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                        </tr>
                </thead>

                <tbody>
                        {
                            users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.firstName}</td>   
                                     <td> {user.lastName}</td>   
                                     <td> {user.email}</td>   
                                </tr>
                            )
                        }

                </tbody>

            </table>
        
        
        
        
        </div>

    )

}

