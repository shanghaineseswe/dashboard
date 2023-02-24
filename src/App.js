import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios"
export default App

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")


  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);

    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name:name,
      age: age,
      username: username,
    }).then((response) => {
      alert("USER CREATED");
      // setListOfUsers([...listOfUsers, {name:name, age:age, username:username},])
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <tbody>
              
              <tr>
                <th>Name: {user.name}</th>
                <th>CDSID: {user.age}</th>
                <th>Email: {user.username}</th>
              </tr>
            </tbody>
          );
        })}
      </div>
      {/* <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>GANG</h1>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div> */}

      <div>
        <input type = "text" placeholder = "Name..." onChange = { ( event ) => {setName(event.target.value)}}/>
        <input type = "number" placeholder = "Age..." onChange = { ( event ) => {setAge(event.target.value)}}/>
        <input type = "text" placeholder = "Username..." onChange = { ( event ) => {setUsername(event.target.value)}}/>
        <button onClick = {createUser}> Create User</button>
      </div>



    </div>
  );
      }
