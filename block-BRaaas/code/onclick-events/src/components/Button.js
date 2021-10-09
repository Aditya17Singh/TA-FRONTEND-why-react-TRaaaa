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
      <button onClick={() => alert(`${props.value}`)}>{props.value}</button>
    </>
  );
}

function Button() {
  let names = ["Arya", "Bran", "John"];
  return (
    <>
      <button onClick={handleChange}>Click Me</button>
      <button onClick={handleChangeb}>How can I help you?</button>
      {names.map((name) => {
        return (
          <button key={name} onClick={() => alert(`Hello ${name}`)}>
            {name}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;
