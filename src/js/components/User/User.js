import * as React from "react";
import { useState, useEffect } from "react";
import "./user.css";

export function User() {
  // hooks for random user data
  const [user, setUser] = useState(null);
  // hooks for button
  const [showData, setShowData] = useState(false);

  // make Api call for random userId and title
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get current date
  const date = new Date();
  const dateString =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  return (
    <div className="user">
      {user && (
        <div className="user-detail">
          <p id="user-id">USER ID: {user.id}</p>
          <p>TITLE: {user.title}</p>
        </div>
      )}
      <div className="user-button">
        <button onClick={() => setShowData(true)}> click me</button>
        {showData && <p>MAP CREATED BY: Nihat Mahser on {dateString}</p>}
      </div>
    </div>
  );
}
