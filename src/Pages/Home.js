import React, { useEffect, useState } from "react";
import List from "../Components/List";

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
      </table>
    </div>
  );
}

export default Home;
