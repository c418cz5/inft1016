<h1 align="center">WWII Battleships Gallery</h1>
<p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
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
