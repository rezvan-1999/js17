function listOfColours(colours) {
  // Write your code here...
  const div = document.querySelector("#content");
  const h3 = document.createElement("h3");
  h3.innerText = "List of colors";
  const ul = document.createElement("ul");
  for (let i = 0; i < colours.length; i++) {
    const li = document.createElement("li");
    li.innerText = colours[i];
    ul.append(li);
  }

  div.append(h3, ul);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
