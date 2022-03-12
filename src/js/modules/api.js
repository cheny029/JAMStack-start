var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=pb3WbIQux4hi9ZGGD38jXNA1K5gjBt6j";

export async function getStories() {
    const json = await fetch(API);
    return json;
}

export function showData(stories) {
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
  }