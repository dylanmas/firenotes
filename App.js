import React from "react";
import { Home, Login, Signup } from "./pages";

const x = true;
export default function App() {
  if (x === true) {
    return <Signup />;
  } else {
    return <Login />;
  }
}