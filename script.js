var ships = [
  {
    name: "Enterprise",
    image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg",
    wiki: "https://en.wikipedia.org/wiki/USS_Enterprise_(CV-6)"
  },
  {
    name: "Bismarck",
    image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E4%BF%BE%E6%96%AF%E9%BA%A6.jpg",
    wiki: "https://en.wikipedia.org/wiki/German_battleship_Bismarck"
  },
  {
    name: "San Diego",
    image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5.jpg",
    wiki: "https://en.wikipedia.org/wiki/USS_San_Diego_(CL-53)"
  },
  {
    name: "Yamato",
    image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E5%A4%A7%E5%92%8C.jpg",
    wiki: "https://en.wikipedia.org/wiki/Japanese_battleship_Yamato"
  },
  {
    name: "New Jersey",
    image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E6%96%B0%E6%B3%BD%E8%A5%BF.jpg",
    wiki: "https://en.wikipedia.org/wiki/USS_New_Jersey_(BB-62)"
  }
];

function initializePage() {
  loadTheme();
  loadUsername();
}

function loadTheme() {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

function toggleTheme() {
  var html = document.documentElement;
  var currentTheme = html.getAttribute("data-theme");
  var newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function updateUsername(event) {
  event.preventDefault();
  var nameInput = document.getElementById("user_name");
  var name = nameInput.value;
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
    localStorage.setItem("username", name);
    window.location.search = "?user_name=" + encodeURIComponent(name);
  }
  nameInput.value = "";
}

function loadUsername() {
  var params = new URLSearchParams(window.location.search);
  var urlName = params.get("user_name");
  var storedName = localStorage.getItem("username");
  
  if (urlName) {
    document.getElementById("greeting").textContent = "Hello, " + urlName + "!";
    localStorage.setItem("username", urlName);
  } else if (storedName) {
    document.getElementById("greeting").textContent = "Hello, " + storedName + "!";
  }
}

function showShip(index) {
  var ship = ships[index];
  document.getElementById("ship-image").src = ship.image;
  document.getElementById("caption").textContent = ship.name;
  var wikiLink = document.getElementById("wiki-link");
  wikiLink.href = ship.wiki;
  wikiLink.textContent = "About " + ship.name + " on Wikipedia";
}
