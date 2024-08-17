import React from "react";
import Login from "./Login";
import Content from "./Content";

var auth = false;
function page() {
  if (auth) {
    return <Content />;
  } else {
    return <Login />;
  }
}

function App() {
  // return <div className="container">{page()}</div>;
  return <div className="container">{auth ? <Content /> : <Login />}</div>;
}

export default App;
