import { peopleData } from "./data.js";
const container = document.querySelector(".container");
const cardContainer = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");
const headergen = () => {
  const heaader = document.createElement("div");
  heaader.classList.add("header");
  input.classList.add("input");
  btn.innerHTML = `<i class="ri-search-line"></i>`;
  heaader.appendChild(input);
  heaader.appendChild(btn);
  container.appendChild(heaader);
};
const cardsgen = () => {
  cardContainer.classList.add("cardcontainer");
  peopleData.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const imgdiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = e.image;
    imgdiv.appendChild(image);
    const insidecard = document.createElement("div");
    insidecard.classList.add("insidecard");
    const name = document.createElement("h3");
    name.innerText = e.name;
    const ulist=document.createElement("ul");
    const age = document.createElement("li");
    age.innerText = "Age: " + e.age;
    const phoneNo = document.createElement("li");
    phoneNo.innerText = e.phoneNo;
    const email = document.createElement("li");
    email.innerText = e.email;
    const jerseyNumber = document.createElement("li");
    jerseyNumber.innerText = "SHIRT Number: "+ e.jerseyNumber;
    const cnicNumber = document.createElement("li");
    cnicNumber.innerText = "CNIC: "+ e.cnic;
    const position = document.createElement("li");
    position.innerText = "Favourite Position: "+ e.position;
    const rating = document.createElement("li");
    rating.innerText ="Rating out of 10: "+ e.rating;
    card.appendChild(image);
    insidecard.appendChild(name);
    insidecard.appendChild(age);
    insidecard.appendChild(phoneNo);
    insidecard.appendChild(email);
    insidecard.appendChild(jerseyNumber);
    insidecard.appendChild(cnicNumber);
    insidecard.appendChild(position);
    insidecard.appendChild(rating);
    card.appendChild(imgdiv);
    card.appendChild(insidecard);
    cardContainer.appendChild(card);
  });
  container.appendChild(cardContainer);
};
const searchworking = () => {
  btn.addEventListener('click',()=>{
    let inputvalue2 = input.value.toLowerCase().trim();
    if (inputvalue2===peopleData.name) {
      cardContainer.innerHTML = "   ";
    }
    console.log(inputvalue2);
  });
    };
headergen();
cardsgen();
searchworking();
