import React, { useEffect, useState, createContext  } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./Pages/About";
import CardBox from "./Components/Card";
import Counter from "./Components/Counter";
import Demo from "./Components/Demo";
import List from "./Components/List";
import Profile from "./Components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Style.css";
import messi from "./images/messi.jpg";
import Ui from "./Components/Ui";
import Data from "./Components/Data";
import Goal from "./Components/Goal";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Alert, message } from 'antd';
import UserDetails from "./Pages/UserDetails";



function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState(false);
  const [btnColor, setBtnColor] = useState("dark");
  const[render, setRender] = useState(false);
  const[decBtn, setDecBtn] = useState('dark')

  let counter = () => {
    setCount(count + 1);
    setColor("blue");
    setMessage(true);
    setBtnColor("success");

  };

  const decrement=()=>{
    setCount(count - 1);
    setDecBtn('danger')
    setMessage(false)


  }

  const[name, setValue]=useState("Abhi");

  let obj = {
    count,
    color,
    message,
  };

  let info = [
    {
      no: 1,
      name: "messi",
      club: "psg",
      age: "34",
    },
    {
      no: 2,
      name: "ronaldo",
      club: "united",
      age: "36",
    },
    {
      no: 3,
      name: "haland",
      club: "bvb",
      age: "20",
    },
    {
      no: 4,
      name: "abhi",
      age: "20",
      club: "any",
    },
  ];

  // let name = "messi";
  let age = 25;

  let colorName = "red";

  // const action=()=>{
  //   alert('hloooo')

  // }

  let Submit = ()=>{
    setRender(true)

  }

  const [page, setPage] = useState('about')

  

  let component
  if(page==='about'){
    component = <About></About>
  }else{
    component = <Contact/>
  }

  let Click = ()=>{
    setPage('contact')
  }

  const Change=()=>{
    setValue('sunjith');
    
    
  }



//  useEffect(() => {
//    console.log('mounting');
//    alert('mount') //return all rendering while single function
//                                   //mount -(component rendering)
//    return () => {
//      console.log('clean up',); 
//      alert('cleaned')
//      //cleanup function (clean above fn)
//      //cleanup fn calling when component unmount
//    }
//  }, [count]) // dependemcy - 2nd argument //UPDATING
 




  return (

    <BrowserRouter>
    
    <div className="Main">
      <Ui />

    


      {/* <button onClick={()=>setPage('about')}>About</button> &nbsp;&nbsp;
    <button onClick={()=>setPage('contact')}>Contact</button> */}

   

    {/* <h1>{name}</h1>
<br />
    <button onClick={Change}>change</button> */}

    {/* {component}
    <button onClick={Click}>page</button> */}

      {/* <Data/> */}


       
        {/* <button onClick={Submit}>submit</button>
      <Goal  render={render}/> */}
     

      {/* <List  {...profile} /> */}
      {/* <Home {...info}/> */}

      {/* <Profile {...profile}/> */}
      

      {/* <Demo name={name} age={age} color={colorName}/> */}

      {/* <About num={count} name={name}/> */}
      {/* <br /><br /><br /><br />
      <Card /> */}
      {/* <Counter {...obj} />
      <div className="row">
        <div className="col-md-6">
        <Button variant={btnColor} onClick={counter}>Counter</Button>
        </div>
        <div className="col-md-6">
        <Button variant={decBtn} onClick={decrement}>Counter</Button>
        </div>
      </div> */}
      

      {/* <img src={messi} className='image rounded img-fluid"' alt="" /> */}
      {/* {
        profile.map((obj, index)=>{
          return(
            <p  key={index}>name: {obj.name}, age: {obj.age}, club: {obj.club}</p>

          )


        })
      } */}




      


    </div>

    <Routes>
      
        <Route path="/" element={<Home {...info}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/details/:id" element={<UserDetails/>}/>
      

    </Routes>

    </BrowserRouter>
    
  );
}

export default App;


