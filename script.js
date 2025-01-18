function todoList(todos) {
  // Write your code here...
  const div = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = "Todo List";
  const ul = document.createElement("ul");

  for (const item of todos) {
    const li = document.createElement("li");
    li.innerText = item.todo;
    ul.append(li);
  }

  div.append(h1, ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
