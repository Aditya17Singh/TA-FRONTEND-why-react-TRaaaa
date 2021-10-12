import Button from "../components/Button";

function App() {
  return (
    <div>
      <Button lable="Click me" />
      <Button lable="Click me" type="secondary" size="large" />
      <Button lable="Click me" type="tertiary" size="medium" />
      <Button onClickHandler={() => alert("hi")} lable="Click me" />
      <Button />
    </div>
  );
}

export default App;
