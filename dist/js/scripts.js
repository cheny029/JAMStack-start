import { getStories, showData } from "./modules/api.js"

getStories()
    .then((res) => res.json())
    .then((data) => showData(data.results));
    
/* var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=3gcikugfbEaUToGoEDCWMXp6cljPO9Tw";

getStories();
 function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
} 

function showData(stories) {
    var looped = stories
      .map(
        (story) => `
        <div class="item">
        <picture>
        <img src="${story.multimedia[2].url}" alt="" />
        <figcaption>${story.multimedia[2].caption}</figcaption>
        </picture>
            <h3><a href="${story.url}">${story.title}</a></h3>
            <p>${story.abstract}</p>
        </div>
        `
      )
      .join("");
  
    document.querySelector(".stories").innerHTML = looped;
  } */
  
  if (document.querySelector(".home")) {
    getStories();
  }