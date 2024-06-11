import { peopleData } from "./data.js";
// import { nextpage } from "./player.js";

const container = document.querySelector(".container");
const playerContainer = document.querySelector(".playerprofile");
const cardContainer = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Search Here";
const header = document.createElement("div");

const headerGen = () => {
  header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.innerText = "The Faces Behind the Jerseys";
  input.classList.add("input");
  container.appendChild(h1);
  header.appendChild(input);
  container.appendChild(header);
};

const crad = (e) => {
  container.style.display = "none";
  const background = document.createElement("div");
  background.classList.add("background");
  const playerProfile = document.createElement("div");
  playerProfile.classList.add("playerprofile");
  const playerDetails = document.createElement("div");
  playerDetails.classList.add("playerdetails");

  const playerName = document.createElement("h1");
  playerName.innerText = e.name;
  const shirtNo = document.createElement("h1");
  shirtNo.innerText = e.jerseyNumber;
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btndiv");
  const btn3 = document.createElement("button");
  btn3.innerText = "Buy Shirt";
  btn3.classList.add("btn3");

  const playerPic = document.createElement("div");
  playerPic.classList.add("playerpic");
  const h3 = document.createElement("blockquote");
  h3.innerText = '"' + e.quote + '"';
  playerPic.appendChild(h3);
  const bgPic = document.createElement("img");
  bgPic.src = e.bgpic;
  const stats = document.createElement("div");
  stats.classList.add("stats");

  const ul = document.createElement("ul");
  const statsItems = [
    "AGE",
    e.age,
    "APPEARANCES",
    e.appearances,
    e.cleansheets ? "CLEAN SHEETS" : "GOALS",
    e.goals,
  ];

  statsItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    stats.appendChild(li);
  });

  const personalDetails = document.createElement("div");
  personalDetails.classList.add("personaldetails");
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttondiv");
  const personalDetails2 = document.createElement("div");
  personalDetails2.classList.add("personaldetails2");
  const personalDetailsName = document.createElement("div");
  personalDetailsName.classList.add("personaldetailsname");
  const crossBtnLink = document.createElement("a");
  crossBtnLink.classList.add("crossbtnlink");
  const crossBtn = document.createElement("button");
  crossBtn.innerHTML = `<i class="ri-xrp-line"></i>`;
  crossBtnLink.href = "./main.html";
  crossBtnLink.appendChild(crossBtn);
  buttonDiv.appendChild(crossBtnLink);
  personalDetails.appendChild(buttonDiv);
  playerPic.appendChild(bgPic);
  personalDetailsName.appendChild(shirtNo);
  personalDetailsName.appendChild(playerName);
  btnDiv.appendChild(btn3);
  personalDetails2.appendChild(personalDetailsName);
  personalDetails2.appendChild(btnDiv);
  playerProfile.appendChild(playerDetails);
  playerProfile.appendChild(playerPic);
  playerDetails.appendChild(personalDetails);
  playerDetails.appendChild(personalDetails2);
  playerPic.appendChild(stats);
  background.appendChild(playerProfile);
  playerContainer.appendChild(background);

  const biography = document.createElement("div");
  biography.classList.add("biography");
  const h2 = document.createElement("h2");
  const biographyText = document.createElement("p");
  h2.innerText = "Biography";
  biographyText.innerText = e.biography;
  const biographyInfo = document.createElement("div");
  biographyInfo.classList.add("biographyinfo");

  const positionDiv = document.createElement("div");
  positionDiv.classList.add("positiondiv");
  const h33 = document.createElement("h3");
  h33.innerText = "POSITION";
  const positionBio = document.createElement("p");
  positionBio.innerText = e.position;

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("ratingdiv");
  const ratingDivH3 = document.createElement("h3");
  ratingDivH3.innerText = "AVG RATING";
  const ratingBio = document.createElement("p");
  ratingBio.innerText = e.rating;
  ratingDiv.appendChild(ratingDivH3);
  ratingDiv.appendChild(ratingBio);

  positionDiv.appendChild(h33);
  positionDiv.appendChild(positionBio);

  const biographyMain = document.createElement("div");
  biographyMain.classList.add("biographymain");
  biographyMain.appendChild(h2);
  biographyMain.appendChild(biographyText);

  const jerseyDiv = document.createElement("div");
  jerseyDiv.classList.add("jerseydiv");
  const jerseyDivH3 = document.createElement("h3");
  jerseyDivH3.innerText = "JERSEY NUMBER";
  const jerseyDivP = document.createElement("p");
  jerseyDivP.innerText = e.jerseyNumber;
  jerseyDiv.appendChild(jerseyDivH3);
  jerseyDiv.appendChild(jerseyDivP);

  biographyInfo.appendChild(positionDiv);
  biographyInfo.appendChild(ratingDiv);
  biographyInfo.appendChild(jerseyDiv);

  biography.appendChild(biographyInfo);
  playerContainer.appendChild(biographyMain);
  playerContainer.appendChild(biography);
};
const cardsGen = () => {
  cardContainer.classList.add("cardcontainer");
  peopleData.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const insideCard = document.createElement("div");
    const image = document.createElement("img");
    image.src = e.image;
    card.appendChild(image);
    insideCard.classList.add("insidecard");
    const name = document.createElement("h3");
    name.innerText = e.name;
    const age = document.createElement("li");
    age.innerText = "Age: " + e.age;
    const phoneNo = document.createElement("li");
    phoneNo.innerText = e.phoneNo;
    const email = document.createElement("li");
    email.innerText = e.email;
    const jerseyNumber = document.createElement("li");
    jerseyNumber.innerText = e.jerseyNumber;
    const cnicNumber = document.createElement("li");
    cnicNumber.innerText = "CNIC: " + e.cnic;
    const position = document.createElement("li");
    position.innerText = "Favourite Position: " + e.position;
    const rating = document.createElement("li");
    rating.innerText = "Rating out of 10: " + e.rating;
    card.addEventListener("click", () => crad(e));
    card.appendChild(name);
    card.appendChild(jerseyNumber);
    cardContainer.appendChild(card);
  });

  input.addEventListener("input", () => {
    cardContainer.innerHTML = "";
    const inputvalue2 = input.value.toLowerCase().trim();

    peopleData
      .filter((f) => f.name.toLowerCase().includes(inputvalue2))
      .forEach((u) => {
        const card = document.createElement("div"); // Create a new card for each item
        card.classList.add("card"); // Optional: Add a class to the card for styling
        card.innerHTML = `
                  <img src="${u.image}" alt="${u.name}">
                  <h3>${u.name}</h3>
                  <li>${u.jerseyNumber}</li>
                `;
        card.addEventListener("click", () => crad(u)); 
        cardContainer.appendChild(card);
      });
    container.appendChild(cardContainer); 
  });

  container.appendChild(cardContainer);
};

headerGen();
cardsGen();
