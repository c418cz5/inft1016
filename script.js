const ships = [
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

document.getElementById("name-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("user_name").value;
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
  localStorage.setItem("username", name);
  document.getElementById("user_name").value = ""; // 新增清空输入框
});

document.getElementById("toggle-theme").addEventListener("click", function() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
});

window.onload = function() {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("greeting").textContent = `Hello, ${savedName}!`;
  }
};

function showShip(index) {
  const ship = ships[index];
  const img = document.getElementById("ship-image");
  
  img.onerror = function() { // 添加图片加载失败处理
    img.src = "fallback-image.jpg";
    alert("图片加载失败，请检查网络或图片地址");
  };
  
  img.src = ship.image;
  document.getElementById("caption").textContent = ship.name;
}
