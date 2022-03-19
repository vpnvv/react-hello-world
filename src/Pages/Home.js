import React, { useEffect, useState } from "react";
import List from "../Components/List";
import Usage from "./Usage";

function Home({ ...info }) {
  // const [data, setData] = useState([]);

  let store = { ...info };

  // console.log("storeeee", store);
  // useEffect(() => {
  //   setData(store);
  // }, [store]);

  // console.log("dataaa", data);

  return (
    <div className="container">
      
{/* 
      <table class="table table-primary table-hover table-striped ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">PLayer</th>
            <th scope="col">Age</th>
            <th scope="col">Club</th>
          </tr> 
        </thead>
        <tbody>
          {
          Object.keys(store).map((obj, index) => {
            console.log("table-data", obj);
            return (
              <tr key={index}>
                <th scope="row">{store[index].no}</th>
                <td>{store[index].name}</td>
                <td>{store[index].age}</td>
                <td>{store[index].club}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <div className="row text-center">
        <div className="col-md-6 col-lg-6 bg-primary">
          <div className="title">
            <h1 className="text-white text-center">WELCOME</h1>
          </div>

        </div>
        <div className="col-md-6 col-lg-6 bg-dark">
          <div className="image text-center">
            <h1 className="text-white text-center">DETAILS</h1>
          </div>
        </div>
      </div>

      <br /><br /><br /><br />

      <div className="row">
        <div className="col-md-12 text-center bg-warning">
          <h1>About us</h1>
         
        </div>
      </div>

      <br /><br />
{/* 
      <div className="row">
        <div className="col-md-6 text-center">
          <h1>DETAILS</h1>
        </div>
        <div className="col-md-6 text-center">
          <h1>EDUCATION DETAILS</h1>
        </div>
      </div> */}

      <Usage/>


    </div>
  );
}

export default Home;
