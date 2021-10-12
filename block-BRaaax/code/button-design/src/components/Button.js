function Button(props) {
  function getStyles() {
    return `button--${props.type} button--${props.size}`;
  }
  return (
    <button onClick={props.onClickHandler} className={getStyles()}>
      {props.lable || "button"}
    </button>
  );
}
export default Button;
