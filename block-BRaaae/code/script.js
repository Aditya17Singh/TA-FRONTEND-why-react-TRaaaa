let root = document.querySelector(".movies-list");
let input = document.querySelector("input");

allMovies = [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI(allMovies);
  }
});

function handleChange(event) {
  let id = event.target.dataset.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createUI(allMovies);
}

function createUI(allMovies) {
  let ui = allMovies.map((elm, i) => {
    return React.createElement(
      "li",
      { key: i },
      React.createElement("label", { htmlFor: i }, elm.name),
      React.createElement(
        "button",
        {
          className: "watch",
          "data-id": i,
          onClick: handleChange,
        },
        elm.watched ? "watched" : "To watch"
      ),
      React.createElement(
        "button",
        { "data-id": i, onClick: handleDelete },
        "Remove"
      )
    );
  });
  ReactDOM.render(ui, root);
}

// function createUI(allMovies) {
//   let ui = allMovies.map((elm, i) => {
//     return React.createElement(
//       "li",
//       { key: i },
//       React.createElement("label", { htmlFor: i }, elm.name),
//       React.createElement(
//         "button",
//         { className: "watch", "data-id": i, onClick: handleChange },
//         elm.watched ? "watched" : "To watch"
//       ),
//       React.createElement(
//         "button",
//         { "data-id": i, onClick: handleDelete },
//         "Remove"
//       )
//     );
//   });
//   ReactDOM.render(ui, root);
// }
