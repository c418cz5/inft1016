// Ship image data
const ships = [
  { name: "USS Enterprise", image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg", caption: "USS Enterprise" },
  { name: "Bismarck", image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E4%BF%BE%E6%96%AF%E9%BA%A6.jpg", caption: "Bismarck" },
  { name: "San Diego", image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5.jpg", caption: "San Diego" },
  { name: "Yamato", image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E5%A4%A7%E5%92%8C.jpg", caption: "Yamato" },
  { name: "New Jersey", image: "https://raw.githubusercontent.com/c418cz5/inft1016/main/%E6%96%B0%E6%B3%BD%E8%A5%BF.jpg", caption: "New Jersey" },
];

// Function to show the selected ship's image and caption
function showShip(index) {
  const ship = ships[index];
  document.getElementById("ship-image").src = ship.image;
  document.getElementById("caption").innerText = ship.caption;
}

// Theme toggle function
document.getElementById('toggle-theme').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save the theme preference
});

// Load saved theme from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Load saved username from localStorage
  const savedName = localStorage.getItem('user_name');
  if (savedName) {
    document.getElementById('greeting').innerText = `Hello, ${savedName}!`;
    document.getElementById('user_name').value = savedName;
  }
};

// Save username to localStorage and update greeting
document.getElementById('name-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('user_name').value;
  localStorage.setItem('user_name', userName);
  document.getElementById('greeting').innerText = `Hello, ${userName}!`;
});
