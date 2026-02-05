# Brinta's Portfolio Website 🌟

A modern, interactive personal portfolio website built with React, featuring a unique desktop window-style interface and a clean mobile-responsive design.

## ✨ Features

### Desktop Experience
- **Interactive Window System**: Click on buttons to open draggable, resizable modal windows
- **Multi-Window Support**: Open multiple sections simultaneously and manage them like desktop windows
- **Drag & Drop**: Reposition windows anywhere on the screen
- **Z-Index Management**: Click on any window to bring it to the front

### Mobile Experience
- **Responsive Design**: Automatically adapts to mobile devices (screens ≤768px)
- **Vertical Navigation**: Clean, scrollable button layout
- **Fullscreen Sections**: Each section opens in a dedicated fullscreen view
- **Touch-Friendly**: Optimized for mobile interaction

### General Features
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Animations**: Polished transitions using Framer Motion
- **Professional Sections**:
  - About - Introduction and background
  - Experience - Work history and skills
  - Projects - Portfolio of work
  - Contact - Get in touch information
  - Links - Social media and professional profiles
  - CV - Downloadable resume

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Hooks** - State management and side effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── IconButton.jsx       # Reusable button component
│   │   ├── Modal.jsx            # Draggable modal window component
│   │   ├── ThemeToggle.jsx      # Dark/light mode toggle
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       ├── Contact.jsx
│   │       └── Links.jsx
│   ├── App.jsx                  # Main application component
│   └── index.js                 # Application entry point
├── public/
│   └── Brinta_Kundu_CV.pdf     # CV PDF
└── README.md
```

## 🎨 Customization

### Changing Theme Colors
Edit the Tailwind classes in `App.jsx` and component files. The primary accent color is orange (`text-orange-400`).

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import it in `App.jsx`
3. Add it to the `sectionComponents` object
4. Add a new button in both desktop and mobile layouts

### Updating Content
- Modify individual section components in `src/components/sections/`
- Update personal information in the main heading
- Replace the CV file in the `public` folder

## 📱 Responsive Breakpoints

- **Desktop**: > 768px width
  - Grid button layout
  - Draggable modal windows
  - Multi-window support

- **Mobile**: ≤ 768px width
  - Vertical button stack
  - Fullscreen section views
  - Single section focus

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Brinta Kundu**

## 🙏 Acknowledgments

- Design inspired by https://www.sharyap.com/ 

---

© 2025 Brinta Kundu. All rights reserved.
