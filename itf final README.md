<h1 align="center">WWII Battleships Gallery</h1>
<p align="center">
    ![image](https://github.com/c418cz5/inft1016/blob/main/%E4%BC%81%E4%B8%9A%E5%8F%B7.jpg))
    ![image](https://github.com/c418cz5/inft1016/blob/main/%E4%BC%81%E4%B8%9A%E7%AB%8B%E7%BB%98.jpg)
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/github/last-commit/c418cz5/inft1016" alt="Last Commit">
</p>

## Project Overview
Interactive gallery showcasing 5 iconic WWII battleships with dual theme support. Key features include:

- 🖼️ Dynamic image/text switching
- 🌓 Light/Dark theme toggle
- 💾 Persistent user preferences via LocalStorage
- 📱 Responsive design

## Core Features
1. ​**Ship Gallery**​  
   Display high-quality images with technical specifications:
   - Yamato-class Battleships (72,800 tons displacement)
   - Iowa-class Battleships (33 knots max speed)
   - Bismarck-class Battleships (50,300 tons displacement)

2. ​**Theme System**​  
   Custom CSS variables implementation:
   ```css
   :root {
       --primary-color: #f8f9fa;
       --bg-color: #ffffff;
   }
   [data-theme="dark"] {
       --primary-color: #2d3436;
       --bg-color: #2c3e50;
   }
