let label = document.createElement("p");
label.setAttribute("id", "label")
label.innerHTML = "Drag the image to set a as background.";
document.body.appendChild(label);

let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

let mainDiv1 = document.createElement("div");
mainDiv1.setAttribute("class", "mainDiv1");
container.appendChild(mainDiv1);

let mainDiv2 = document.createElement("div");
mainDiv2.setAttribute("class", "mainDiv2");
container.appendChild(mainDiv2);

let imges = ["1.jpg", "2.jpg", "3.jpg"];
for (let i = 0; i < 3; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "imgDiv");
  mainDiv1.appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("draggable", "true");
  img.addEventListener("drag", dragStart);
  img.addEventListener("dragover", dragOver);
  div.appendChild(img);
  img.src = `./${imges[i]}`;
}

for (let i = 0; i < 3; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "backgroundDiv");
  div.addEventListener("dragover", dragOver);
  div.addEventListener("drop", drop);

  mainDiv2.appendChild(div);
}

let elem;
let link;
function dragStart(event) {
  elem = event.target;
  link = elem.src;
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  console.log(event.target);
  event.target.style.backgroundImage = `url(${link})`;
  event.target.style.backgroundSize = "cover";
  event.target.style.boxShadow = "rgba(0, 0, 0, 0.7) 0px 25px 20px 0px";

}
