import React from 'react';
import {Route, Link } from "react-router-dom";

export function Home() {
  return <h2>Home</h2>;
}


export function Menu() {
  return (
    <ul className="nav nav-pills nav-stacked">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
    </ul>
  );
}