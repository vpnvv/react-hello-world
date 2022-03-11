import React from "react";

function List(props) {

  const data = props; 
  

  console.log('hloooooooooo',data);

  return (
    <div>
      <table class="table table-dark table-hover table-striped ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">PLayer</th>
            <th scope="col">Age</th>
            <th scope="col">Club</th>
          </tr>
        </thead>
        <tbody>

          {/* {data.data.map((obj,index) => {
            console.log("table-data", obj);
            return (
              <tr key={index}>
                <th scope="row">{obj.no}</th>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>{obj.club}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default List;
