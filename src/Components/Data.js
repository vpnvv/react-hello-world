import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { FaMapMarkerAlt,FaTelegramPlane,FaPhoneAlt,FaUserAlt } from "react-icons/fa";
function Data() {

    const [data, setData] = useState([]);

    // let cancelToken;

    // cancelToken = axios.cancelToken.source()

    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //     setData(response.data);
    //     console.log('loadinggg',response.data);
    //   });

     


   
    

  return (
    <div className='container'>
         <div className="row">
        {data.map((obj, index) => {
          // console.log(obj,'userr dataaa')
          return (
            <div className="col-lg-4">
              <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                <FaUserAlt/>&nbsp;&nbsp;{obj.name}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FaMapMarkerAlt />
                  &nbsp;&nbsp;{obj.address.city}
                </ListGroup.Item>
                <ListGroup.Item as="li"><FaTelegramPlane/>&nbsp;&nbsp;{obj.email}</ListGroup.Item>
                <ListGroup.Item as="li"><FaPhoneAlt/>&nbsp;&nbsp;{obj.address.zipcode}</ListGroup.Item>
              </ListGroup>{" "}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Data