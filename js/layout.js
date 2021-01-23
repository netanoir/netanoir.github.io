// const netasColors = [
//   "mediumseagreen",
//   "indianred",
//   "palevioletred",
//   "sienna",
//   "slategrey",
//   "mediumaquamarine",
//   "lightsalmon",
//   "greenyellow",
// ];

// let aColorPerformsASolo = netasColors[Math.floor(Math.random() * netasColors.length)];

// window.onload = (event) => {
//   document.body.style.backgroundColor = aColorPerformsASolo;
// };

let coll = document.getElementsByClassName("collapse");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i += 1) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}