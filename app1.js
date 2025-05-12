// 战舰图片数据
const ships = {
    enterprise: {
        img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg",
        desc: "USS Enterprise (CV-6) - Most decorated US Navy ship of WWII"
    },
    bismarck: {
        img: "https://github.com/c418cz5/inft1016/blob/main/%E4%BF%BE%E6%96%AF%E9%BA%A6.jpg",
        desc: "German Battleship Bismarck - Sank HMS Hood in 1941"
    },
    san_diego: {
        img: "https://github.com/c418cz5/inft1016/blob/main/%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5.jpg", 
        desc: "USS San Diego (CL-53) - Earned 18 Battle Stars in WWII"
    },
    musashi: {
        img: "https://github.com/c418cz5/inft1016/blob/main/%E6%AD%A6%E8%97%8F%E7%AB%8B%E7%BB%98.jpg",
        desc: "Japanese Battleship Musashi - Sunk in Leyte Gulf 1944"
    },
    new_jersey: {
        img: "https://github.com/c418cz5/inft1016/blob/main/%E6%96%B0%E6%B3%BD%E8%A5%BF.jpg",
        desc: "USS New Jersey (BB-62) - Served in four wars"
    }
};

// 主题切换
function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
}

// 更新用户名
function updateUsername(event) {
    event.preventDefault();
    const username = new URLSearchParams(window.location.search).get('user_name');
    if(username) {
        document.querySelector('h1').textContent = `Hello, ${username}`;
        localStorage.setItem('username', username);
    }
}

// 初始化加载
window.addEventListener('load', () => {
    // 加载主题设置
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.dataset.theme = savedTheme;
    
    // 加载用户名
    const username = localStorage.getItem('username');
    if(username) {
        document.querySelector('h1').textContent = `Hello, ${username}`;
    }
});
