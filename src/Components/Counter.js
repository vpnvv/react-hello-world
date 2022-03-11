import React from "react";
import Card from "react-bootstrap/Card";
import { Alert } from 'antd';

import "./Card.css";

function Counter({ ...obj }) {
    console.log(obj.message);
  //Destructuring
  //   const { counting, color, message } = props;
  console.log(obj);
  return (
    <div className="Main Counter">
      <p>
        {obj.message
          ? <Alert message="Counter Successfully Incremented" style={{ width: "18rem" }} type="success" showIcon />
          : null
          }
      </p>
      <Card border="primary" className="card text-center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="display">Counter</Card.Title>
          <Card.Text>
            <h1 className="display"  style={{ color: obj.color }}>{obj.count}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h1 className="display-1" style={{ color: obj.color }}>
        Counter = {obj.count}
      </h1> */}
      
    </div>
  );
}

export default Counter;
