const ships = [
  {
    name: "Enterprise",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg?raw=true"
  },
  {
    name: "Bismarck",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BF%BE%E6%96%AF%E9%BA%A6.jpg?raw=true"
  },
  {
    name: "San Diego",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5.jpg?raw=true"
  },
  {
    name: "Yamato",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E5%A4%A7%E5%92%8C.jpg?raw=true"
  },
  {
    name: "New Jersey",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E6%96%B0%E6%B3%BD%E8%A5%BF.jpg?raw=true"
  }
];

function showShip(index) {
  const image = document.getElementById("ship-image");
  const caption = document.getElementById("caption");
  image.src = ships[index].img;
  caption.textContent = ships[index].name;
}

document.getElementById("name-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("user_name").value;
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
  localStorage.setItem("username", name);
});

document.getElementById("toggle-theme").addEventListener("click", function () {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

window.addEventListener("load", function () {
  const savedName = localStorage.getItem("username");
  const savedTheme = localStorage.getItem("theme");
  if (savedName) {
    document.getElementById("greeting").textContent = `Hello, ${savedName}!`;
  }
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});
