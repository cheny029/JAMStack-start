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