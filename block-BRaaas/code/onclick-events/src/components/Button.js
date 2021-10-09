import React from "react";
import data from "../data";

function handleChange() {
  alert("Hello React Event");
}

function handleChangeb() {
  alert("To learn React use https://reactjs.org");
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
}
function handleChangeButton(name) {
  alert(`Hello ${name}`);
}

// class Button extends React.Component {
//   render() {
//     function handleChangeButton(name) {
//       alert(`Hello ${name}`);
//     }
//     return (
//       <>
//         <button onClick={handleChange}>Click Me</button>
//         <button onClick={handleChangeb}>How can I help you?</button>
//         <button onClick={() => handleChangeButton("Arya")}>Arya</button>
//         <button onClick={() => handleChangeButton("John")}>John</button>
//         <button onClick={() => handleChangeButton("Bran")}>Bran</button>
//       </>
//     );
//   }
// }

function handle(value) {
  alert(`${value}`);
}

function Buttons() {
  return (
    <>
      <Button />
      {data.map((elm) => (
        <Fruits key={elm.id} {...elm} />
      ))}
    </>
  );
}

function Fruits(props) {
  return (
    <>
      <button onClick={() => handle(props.value)}>{props.value}</button>
    </>
  );
}

function Button() {
  return (
    <>
      <button onClick={handleChange}>Click Me</button>
      <button onClick={handleChangeb}>How can I help you?</button>
      <button onClick={() => handleChangeButton("Arya")}>Arya</button>
      <button onClick={() => handleChangeButton("John")}>John</button>
      <button onClick={() => handleChangeButton("Bran")}>Bran</button>
    </>
  );
}

export default Buttons;
