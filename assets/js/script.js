
const names1 = Array.from(document.querySelectorAll(".a"));

const names2 = Array.from(document.querySelectorAll(".b"));

const List1 = names1.filter((n) => n.textContent.toLowerCase());

const List2 = names2.filter((n) => n.textContent.toLowerCase());

let ul = document.createElement("ul");

if (List1.values != List2.values) {
  ul.innerHTML += `<li class="list-group-item">${element.innerHTML}</li>`;
  document.querySelector(".filtered-name-list").appendChild(ul);
}
