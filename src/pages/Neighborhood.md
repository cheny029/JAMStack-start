---
pageTitle: My Neighborhood
navTitle: Neighborhood
singleImage: /img/apples.png
pageClass: My Neighborhood
images:
  - Spread 1 Final.jpg
  - Spread 2 Final.jpg
  - Spread 3.jpg
---

## Financial District Local Map
FiDi Local Map is about the first-hand collected info gathering by myself.

All the data were collected in Financial District, Lower Manhattan. 

{% for filename in images %}
<img src="/img/{{ filename }}" alt="A nice picture of apples." />
{% endfor %}

[Home](/)
