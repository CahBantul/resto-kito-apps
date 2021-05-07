import data from "../DATA.json";

const section = document.querySelector("section");
const latest = section.querySelector(".latest");
const post = latest.querySelector(".posts");

let getData = "";

data.restaurants.forEach((resto) => {
  getData += `
  <article class="post-item">
<img class="post-item__thumbnail" src="${resto.pictureId}" alt="${resto.name}">
<div class="post-item__content">
    <p class="post-item__date"> Rating ${resto.rating} <a href="#" class="post-item__date__author">kota ${resto.city}</a>
    </p>
    <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
    <p class="post-item__description">${resto.description}</p>
</div>
</article>
`;
});

post.innerHTML = getData;
