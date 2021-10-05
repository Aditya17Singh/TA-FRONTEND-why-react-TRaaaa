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

// function elme(type, attri = {}, ...children) {
//   let element = document.createElement(type);
//   for (key in attri) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attri[key]);
//     } else if (key.startsWith("on")) {
//       let eventType = key.replace("on", "").toLowerCase();
//       element.addEventListener(eventType, attri[key]);
//     } else {
//       element[key] = attri[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     }
//     if (typeof child === "string") {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

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
  // root.innerHTML = "";
  let ui = allMovies.map((elm, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement("label", { for: i }, elm.name),
      React.createElement(
        "button",
        { className: "watch", "data-id": i, onclick: handleChange },
        elm.watched ? "watched" : "To watch"
      ),
      React.createElement(
        "button",
        { "data-id": i, onclick: handleDelete },
        "Remove"
      )
    );
    return li;
  });
  ReactDOM.render(ui, root);
}
