
import React, { useState } from 'react'
import './App.css';
import UserLogin from '../src/components/UserLogin'
import EmployeeData from '../src/components/EmployeeData'
import employeejson from '../src/json/employeeList.json'

const employeeList = {   user:[{"id":1,"name":"test1",
"age" : "11",
"gender":"male",
"email" : "test1@gmail.com",
"phoneNo" : "9415346313"
},{
  "id" : 2,
  "name":"test2",
  "age" : "12",
  "gender":"male",
  "email" : "test2@gmail.com",
  "phoneNo" : "9415346314"
},{
  "id":3,
  "name":"test3", 
"age" : "13",
"gender":"male",
"email" : "test3@gmail.com",
"phoneNo" : "9415346315"
},      {
  "id":4,
  "name":"test4",
  "age" : "14",
  "gender":"male",
  "email" : "test4@gmail.com",
  "phoneNo" : "9415346316"
},{
  "id":5,
  "name":"test5",
  "age" : "15",
  "gender":"male",
  "email" : "test5@gmail.com",
  "phoneNo" : "9415346317"
},{
  "id":6,
  "name":"test6",
  "age" : "16",
  "gender":"male",
  "email" : "test6@gmail.com",
  "phoneNo" : "9415346318"}   ] } 



function App() {
  const employeeList = {   user:[{"id":1,"name":"test1",
"age" : "11",
"gender":"male",
"email" : "test1@gmail.com",
"phoneNo" : "9415346313"
},{
  "id" : 2,
  "name":"test2",
  "age" : "12",
  "gender":"male",
  "email" : "test2@gmail.com",
  "phoneNo" : "9415346314"
},{
  "id":3,
  "name":"test3", 
"age" : "13",
"gender":"male",
"email" : "test3@gmail.com",
"phoneNo" : "9415346315"
},      {
  "id":4,
  "name":"test4",
  "age" : "14",
  "gender":"male",
  "email" : "test4@gmail.com",
  "phoneNo" : "9415346316"
},{
  "id":5,
  "name":"test5",
  "age" : "15",
  "gender":"male",
  "email" : "test5@gmail.com",
  "phoneNo" : "9415346317"
},{
  "id":6,
  "name":"test6",
  "age" : "16",
  "gender":"male",
  "email" : "test6@gmail.com",
  "phoneNo" : "9415346318"}   ] } 

const [employeeData, setEmployeeData] = useState(employeeList.user)
  const [loggedIn, setLoggedIn] = useState(false);
//   function checkValidUser (userName,password) {
//     if(userName==='hruday@gmail.com' && password==='hruday123'){
//         console.log('login success')
//         setLoggedIn(true)
//     }
//     else{
//         console.log('invalid credentials',userName,password)
//     }
  
// }
console.log('dvfdrf',employeeList.user[1])


const items = employeeData
    ? employeeData.map((item, index) => {

      return (
        // <Factory
        //   logo={item.logo}
        //   key={index}
        //   banner={item.banner}
        //   description={item.description}
        //   links={item.links}
        //   url={item.url}
        //   link_redirect_url={item.link_redirect_url}
        //   use_redirect_url={item.use_redirect_url}
        //   activateProduct={item.activateProduct}
        //   learnMore={item.learnMore}
        //   learn_more_url={item.learn_more_url ? item.learn_more_url:""}
        // />
        <p>item.name</p>
      );

    })
    : null;


console.log('employeeData',employeeData)
function settingLoggedIn(loggedInValue){
 setLoggedIn(loggedInValue);
}
  return (
    <div className="App">
      {!loggedIn && <UserLogin settingLoggedIn={settingLoggedIn}/>}
      {loggedIn && <div>
       {/* {employeejson} */} 
       <EmployeeData />
        </div>}
    </div>
  );
}

export default App;
