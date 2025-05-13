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
  const imgElement = document.getElementById("ship-image");
  const wikiLink = document.getElementById("wiki-link");
  
  // 更新图片（第二次尝试）
  imgElement.src = ship.image;
  
  // 更新舰船名称(我感觉没必要,算了还是试试吧）
  document.getElementById("caption").textContent = ship.name;
  
  // 更新维基链接（关键了修改部分）
  wikiLink.href = ship.wiki;
  wikiLink.textContent = `${ship.name} Wikipedia Page`;  // 优化后的文字显示
  wikiLink.style.display = "block";  // 确保链接可见
}
