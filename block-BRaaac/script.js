let root = document.querySelector(".movies-list");
let input = document.querySelector("input");

let allMovies = [];

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

function elme(type, attri = {}, ...children) {
  let element = document.createElement(type);
  for (key in attri) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attri[key]);
    } else if (key.startsWith("on")) {
      var fun = key.replace("on", "").toLowerCase();
      element.addEventListener(fun, attri[key]);
    } else {
      element[key] = attri[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  console.log(element);
  return element;
}

/* <li>
  <label for=""></label>
  <button class="watch" data-id="0">watched</button>
  <button>Remove</button>
</li> */

function createUI(allMovies) {
  root.innerHTML = "";
  allMovies.forEach((elm, i) => {
    let li = elme(
      "li",
      {},
      elme("label", {}, elm.name),
      elme(
        "button",
        { className: "watch", "data-id": i, onclick: handleChange },
        elm.watched ? "watched" : "Towatch"
      ),
      elme("button", { "data-id": i, onclick: handleDelete }, "Remove")
    );
    root.append(li);
  });
}
createUI(allMovies);
