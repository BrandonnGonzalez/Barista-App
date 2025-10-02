# ☕ On My Grind - Barista Training Game

A fun and interactive web application that tests your knowledge of coffee drink ingredients. Challenge yourself to guess the correct temperature, syrup, milk, and blending options for various coffee drinks!

![Barista App Screenshot](https://via.placeholder.com/800x400/E2C393/000000?text=On+My+Grind+Barista+Game)

## 🎯 What is this project?

**On My Grind** is an educational game designed to help coffee enthusiasts and aspiring baristas learn about different coffee drink recipes. The app presents you with a random coffee drink name, and you must guess the correct ingredients including:

- **Temperature** (hot, lukewarm, cold)
- **Syrup** (mocha, vanilla, toffee, maple, caramel, other, none)
- **Milk** (cow, oat, goat, almond, none)
- **Blended** (yes, turbo, no)

## 🚀 How it works

1. **Start the Game**: Click the refresh button (🔄) to get a random coffee drink
2. **Make Your Guesses**: Select your choices for each ingredient category
3. **Check Your Answer**: Click "Check Answer" to see how you did
4. **Learn from Feedback**: 
   - ✅ Green boxes = Correct guesses
   - ❌ Red boxes = Incorrect guesses
5. **Try Again**: Get a new drink and test your knowledge again!

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with modern CSS features

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Poppins Font** - Modern, clean typography from Google Fonts

### Data
- **JSON** - Local data storage for drink recipes
- **React Hooks** - State management with useState

## 📁 Project Structure

```
barista-app/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/
│   │   ├── BaristaForm.jsx      # Main game component
│   │   └── RecipeChoices.jsx     # Ingredient selection component
│   ├── assets/
│   │   └── react.svg            # React logo
│   ├── App.css                  # Main stylesheet
│   ├── App.jsx                  # Root component
│   ├── drinks.json              # Coffee drink database
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🎨 Features

### Visual Design
- **Modern Card Layout** - Clean, organized ingredient cards
- **Responsive Design** - Works on desktop and mobile devices
- **Beige/Tan Color Scheme** - Coffee-themed aesthetic
- **Interactive Feedback** - Visual indicators for correct/incorrect answers
- **Smooth Animations** - Hover effects and transitions

### Game Mechanics
- **Random Drink Selection** - 25+ different coffee drinks
- **Real-time Validation** - Instant feedback on selections
- **Score Tracking** - Visual indicators for each ingredient
- **Reset Functionality** - Start fresh with new drinks

### User Experience
- **Intuitive Interface** - Easy-to-understand layout
- **Accessibility** - Screen reader friendly
- **Fast Performance** - Optimized with Vite
- **Clean Code** - Well-structured React components

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd barista-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎮 How to Play

1. **Launch the App** - Open the application in your browser
2. **Get a Drink** - Click the refresh button to get a random coffee drink
3. **Study the Name** - Look at the drink name (e.g., "almond mocha blended cold brew")
4. **Make Your Guesses** - Select your choices for each category:
   - Temperature: How hot should it be?
   - Syrup: What flavor syrup?
   - Milk: What type of milk?
   - Blended: Should it be blended?
5. **Check Your Answer** - Click "Check Answer" to see results
6. **Learn and Improve** - See which ingredients you got right or wrong
7. **Try Again** - Get a new drink and test your knowledge!

## 📊 Drink Database

The app includes 25+ coffee drinks with authentic recipes:

- **Classic Drinks**: Espresso, Flat White, Hot Chocolate
- **Frappuccinos**: Salted Caramel, Skinny Mocha, Unicorn
- **Specialty Drinks**: Almond Mocha, Toffee Almond Cappuccino
- **Seasonal Drinks**: Eggnog Latte, Pumpkin Spice Latte
- **Cold Brews**: Nitro Cold Brew, Iced Oat Milk

## 🎯 Learning Objectives

This app helps users:
- **Memorize Coffee Recipes** - Learn ingredient combinations
- **Understand Coffee Terminology** - Temperature, milk types, syrups
- **Practice Barista Skills** - Build confidence in drink preparation
- **Expand Coffee Knowledge** - Discover new drink variations

## 🔧 Customization

### Adding New Drinks
Edit `src/drinks.json` to add new coffee drinks:

```json
{
  "name": "your drink name",
  "ingredients": {
    "temperature": "hot",
    "syrup": "vanilla",
    "milk": "oat",
    "blended": "no"
  }
}
```

### Styling Changes
Modify `src/App.css` to customize:
- Colors and themes
- Layout and spacing
- Typography and fonts
- Animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Coffee Community** - For sharing knowledge about coffee drinks
- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Google Fonts** - For the Poppins font family

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Happy Brewing! ☕**

*Test your barista skills and become a coffee expert with On My Grind!*