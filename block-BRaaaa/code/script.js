let input = document.querySelector(`input[type="text"]`);
let root = document.querySelector(".movies-list");
let li = document.querySelector("li");

let allMovies = [];

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
  root.innerHTML = "";
  allMovies.forEach((elm, i) => {
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.for = i;
    label.innerText = elm.name;
    let button = document.createElement("button");
    button.classList.add("watch");
    if (elm.watched === true) {
      button.innerText = "watched";
    } else {
      button.innerText = "To watch";
    }
    button.addEventListener("click", handleChange);
    button.setAttribute("data-id", i);
    let del = document.createElement("button");
    del.innerText = "Remove";
    del.addEventListener("click", handleDelete);
    del.setAttribute("data-id", i);
    li.append(label, button, del);
    root.append(li);
  });
}

input.addEventListener("keyup", (event) => {
  //Adding a Movie
  if (event.keyCode === 13 && event.target.value) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI(allMovies);
  }
});

createUI(allMovies);
