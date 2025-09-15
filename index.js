// Write your code here!
const userInfo = {
  username: "Khorne Champion",
  description: "Hi, welcome to my webpage! Just a new user of this website!",
  theme: "blue",
};

function displayUser(userInfo) {
  const header = document.querySelector("#main");
  header.textContent = userInfo.username + "'s Personal Webpage";
  header.className = userInfo.theme;
  const descripton = document.createElement("p");
  const body = document.querySelector("body");
  descripton.textContent = userInfo.description;
  descripton.classname = userInfo.theme;
  body.append(descripton);
}

displayUser(userInfo);
