import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://20gefk5dd7.execute-api.us-east-1.amazonaws.com/dev/query");
      setUsers(response.data)
    }
    fetchData();
  },[])

  return (
    <div>
      <h1>List of Users</h1>
      {users.map(item=>(
        <ul>
          <li>{item.name}</li>
          <li>{item.activity}</li>
          </ul>
      ))}
    </div>
  );
}

export default App;