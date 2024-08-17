import React from "react";
import Input from "./Input";

export default () => (
  <form className="form">
    {/* {Input.map()} */}
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
);
