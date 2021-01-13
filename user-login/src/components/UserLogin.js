import React, { useState } from 'react'

export const UserContext = React.createContext()

const UserLogin =(props) =>{
    console.log(props)

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    console.log('username and password',userName, password)

    function checkValidUser () {
        if(userName==='hruday@gmail.com' && password==='hruday123'){
            console.log('login success')
            props.settingLoggedIn(true)
        }
        else{
            console.log('invalid credentials')
        }
      
    }
    return (
        <div>
          <div> <label>User name</label> <input type='text' onChange={e => setUserName(e.target.value)}></input> </div>
          <div>  <label>Password:</label> <input type='password' onChange={e => setPassword(e.target.value)}></input></div>
           <button onClick={checkValidUser}>Submit</button>
           {/* <button onClick={props.onClick(userName,password)}>Submit</button> */}
        </div>
    )
}

export default UserLogin
