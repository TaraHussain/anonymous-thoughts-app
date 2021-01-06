const form = document.querySelector("#new-post-form");
const btn = document.querySelector("#msg-btn");
const newPosts = document.querySelector("show-posts");

form.addEventListener("submit", submitPost);
btn.addEventListener("click", getMessage);

function getAllPosts() {
  fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then(appendPosts)
    .catch(console.warn);
}

function submitPost(e) {
  e.preventDefault();

  const postData = {
    title: e.target.title.value,
    pseudonym: e.target.pseudonym.value,
    body: e.target.body.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:3000", options)
    .then((r) => r.json())
    .then(appendPost)
    .then(() => e.target.reset())
    .catch(console.warn);

  console.log(e.target.title.value);
}

// helpers
function appendPosts(data) {
  data.posts.forEach(appendPost);
}

function appendPost(postData) {
  const title = document.createElement("h1");
  const pseudonym = document.createElement("h2");
  const body = document.createElement("p");
  newPosts.append(title);
  newPosts.append(pseudonym);
  newPosts.append(body);

  title.textContent = e.target.title.value;
  // pseudonym.textContent = post.pseudonym;
  // body.textContent = post.body;
}

function getMessage() {
  fetch("http://localhost:3000")
    .then((r) => r.text())
    .then(renderMessage)
    .catch(console.warn);
}

function renderMessage(msgText) {
  document.querySelector("#msg-btn").textContent = msgText;
}

function showPost() {}
