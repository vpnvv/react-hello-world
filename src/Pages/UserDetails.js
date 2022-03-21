import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { Button } from "react-bootstrap";

function UserDetails() {
  const { userId } = useParams();
  console.log("USER-DETAILS-ID", userId);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  var final = users.filter((item) => {
    console.log("itemmm", item);
    return item.id == userId;
  });

  console.log("****USERrrr*****", final);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="">
            <Button variant="primary" style={{ width: "3rem" }}>
              <Link to="/about">
                <MdOutlineArrowBack
                  className="text-center"
                  style={{ fontSize: "30px", color: "white" }}
                />
              </Link>
            </Button>
          </div>
        </div>
          <br />
        <div className="row">
        {final.map((obj, index) => {
          console.log("objjj", obj);
          return (
            <>
              <h1>name: {obj.name}</h1>
              <h1>username: {obj.username}</h1>
            </>
          );
        })}
        </div>

       
      </div>
    </div>
  );
}

export default UserDetails;
