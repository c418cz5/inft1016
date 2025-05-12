// List of battleships with their image URLs and captions
const ships = [
  {
    name: "Enterprise",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg?raw=true",
    caption: "USS Enterprise"
  },
  {
    name: "Bismarck",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BF%BE%E6%96%AF%E9%BA%A6.jpg?raw=true",
    caption: "Bismarck Battleship"
  },
  {
    name: "San Diego",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5.jpg?raw=true",
    caption: "USS San Diego"
  },
  {
    name: "Yamato",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E5%A4%A7%E5%92%8C.jpg?raw=true",
    caption: "Yamato Battleship"
  },
  {
    name: "New Jersey",
    img: "https://github.com/c418cz5/inft1016/blob/main/%E6%96%B0%E6%B3%BD%E8%A5%BF.jpg?raw=true",
    caption: "USS New Jersey"
  }
];

// Function to change ship image and caption
function showShip(index) {
  const ship = ships[index];
  document.getElementById("ship-image").src = ship.img;
  document.getElementById("caption").textContent = ship.caption;
}

// Theme toggle logic
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Load theme preference from localStorage
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // Get user name from query string or localStorage
  const params = new URLSearchParams(window.location.search);
  let name = params.get("user_name");
  if (!name) {
    name = localStorage.getItem("user_name") || "";
  } else {
    localStorage.setItem("user_name", name);
  }
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}!`;
  }
});

// Save name to localStorage on form submit
document.getElementById("name-form").addEventListener("submit", (e) => {
  const nameInput = document.getElementById("user_name");
  if (nameInput.value) {
    localStorage.setItem("user_name", nameInput.value);
  }
});
