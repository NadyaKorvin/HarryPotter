import { data } from "./hp.js";

let getBlocks = (img, fullName, actor, gender, house, wandCore, alive) => {
  let hpBlockLine = document.querySelector(".hp__bloks_line");
  let hpBlock = document.createElement("div");
  hpBlock.className = "hp__block";
  hpBlockLine.append(hpBlock);
  hpBlock.insertAdjacentHTML("afterbegin", "<p> Alive: " + alive + "</p>");
  hpBlock.insertAdjacentHTML(
    "afterbegin",
    "<p> Wand core: " + wandCore + "</p>"
  );
  hpBlock.insertAdjacentHTML("afterbegin", "<p> House: " + house + "</p>");
  hpBlock.insertAdjacentHTML("afterbegin", "<p> Gender: " + gender + "</p>");
  hpBlock.insertAdjacentHTML("afterbegin", "<p> Actor: " + actor + "</p>");
  hpBlock.insertAdjacentHTML("afterbegin", "<h2>" + fullName + "</h2>");
  hpBlock.insertAdjacentHTML("afterbegin", "<img src=" + img + " />");
};

let getCardsToShow = (arrow) => {
  arrow.forEach((element) => {
    element.alive === true ? (element.alive = "yes") : (element.alive = "no");
    if (element.wand.core.length < 2) {
      element.wand.core = "unknown";
    }
    getBlocks(
      element.image,
      element.name,
      element.actor,
      element.gender,
      element.house,
      element.wand.core,
      element.alive
    );
  });
};
getCardsToShow(data);

let choseSchool = document.querySelector(".choseSchool");
choseSchool.addEventListener("change", (event) => searchForSchool(event));
let searchInput = document.querySelector(".input__for_name");
searchInput.addEventListener("input", (event) => searchForName(event));

let sortName = data;
let sortSchool = data;

const searchForName = (event) => {
  document.querySelector(".hp__bloks_line").innerHTML = "";
  sortName = sortSchool.filter(
    (elem) =>
      elem.actor.toLowerCase().includes(event.target.value.toLowerCase()) ||
      elem.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  getCardsToShow(sortName);
};

const searchForSchool = (event) => {
  document.querySelector(".hp__bloks_line").innerHTML = "";
  sortSchool = sortName.filter((elem) => elem.house == event.target.value);
  if (event.target.value == "Choose one") {
    getCardsToShow(sortName);
  } else {
    getCardsToShow(sortSchool);
  }
};
