import { Fragment } from "react";
import HelloClass from "./components/HelloClass";
import Card from "./components/Card";
import './App.css';

function App() {



  const name = "Himanhsu rana"
  return (
    <>

      <h1>This is our rreact app</h1>
      <p>This is some para</p>
      <HelloClass name={name}>
        <h1>Thi is ssome random H1</h1>
      </HelloClass>

      <Card></Card>
    </>

  );
}

export default App;
