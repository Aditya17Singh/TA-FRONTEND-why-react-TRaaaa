let input = document.querySelector(`input[type="text"]`);
let root = document.querySelector(".movies-list");
let li = document.querySelector("li");

let allMovies = [];

input.addEventListener("keyup", (event) => {
  //Adding a Movie
  if (event.keyCode === 13 && event.target.value) {
    allMovies.push({
      name: event.target.value,
      watched: "To watch",
    });
    event.target.value = "";
    createUI();
  }
});

function createUI(data = allMovies) {
  root.innerHTML = "";
  data.forEach((elm, i) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("watch");
    button.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      if (allMovies[id].watched === "To watch") {
        allMovies[id].watched = "watched";
        button.innerText = elm.watched;
      } else if (allMovies[id].watched === "watched") {
        allMovies[id].watched = "To watch";
        button.innerText = elm.watched;
      }
    });
    button.setAttribute("data-id", i);
    button.innerText = elm.watched;
    let label = document.createElement("label");
    label.for = i;
    label.innerText = elm.name;
    li.append(label, button);
    root.append(li);
  });
}
createUI();
