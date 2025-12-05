# Memory-Card-Game-


# 🃏 Memory Card Game

An interactive and engaging memory card matching game built with vanilla HTML, CSS, and JavaScript. Test your memory by flipping cards and finding matching pairs!

## 🎮 Features

- **Multiple Difficulty Levels**: Easy (4x4), Medium (6x6), and Hard (8x8)
- **Themed Card Sets**: 
  - Fruits 🍎
  - Animals 🐶
  - Flags 🌍
- **Game Modes**:
  - Normal mode: Play at your own pace
  - Timed mode: Complete the game in 60 seconds
- **Sound Effects**: Toggle sound on/off for flips, matches, and wins
- **Hints System**: Use up to 3 hints per game
- **Leaderboard**: Track top 5 scores based on moves and time
- **Visual Effects**: Confetti animation on winning
- **Score Tracking**: Moves counter and timer

## 📁 Project Structure

```
memory-card-game/
├── index.html      # Game HTML structure
├── style.css       # Game styling and animations
├── script.js       # Game logic and functionality
└── README.md       # This file
```

## 🚀 How to Play

1. **Start the Game**: Open `index.html` in your browser
2. **Select Options**: Choose difficulty, theme, and mode from the dropdown menus
3. **Flip Cards**: Click on cards to reveal them
4. **Match Pairs**: Find matching pairs by remembering card positions
5. **Win**: Complete the game by matching all pairs
6. **Submit Score**: Enter your name to save your score to the leaderboard

## 🎯 Game Statistics

- **Moves**: Tracks each pair of cards you flip
- **Time**: Records elapsed time (or remaining time in timed mode)
- **Hints**: Limited to 3 per game
- **Leaderboard**: Top 5 scores sorted by moves (then by time)

## 🎨 Customization

### Add New Themes

Edit the `cardsList` object in `script.js`:

```javascript
let cardsList = {
  fruits: ['🍎', '🍌', ...],
  animals: ['🐶', '🐱', ...],
  flags: ['🇺🇸', '🇬🇧', ...],
  yourTheme: ['🎨', '🎭', ...] // Add your theme here
};
```

Then add the option to `index.html`:

```html
<option value="yourTheme">Your Theme</option>
```

### Adjust Card Size

Modify the `.card` width and height in `style.css`:

```css
.card {
  width: 100px;  /* Change this */
  height: 100px; /* Change this */
}
```

### Change Colors

Edit the color values in `style.css`:

```css
.card {
  background: #007bff; /* Card color */
}
.card.flipped {
  background: #fff; /* Flipped card color */
  color: #007bff;
}
```

## 🔊 Audio Files

The game references three audio files (currently placeholder paths):

- `flip.mp3` - Sound when flipping a card
- `match.mp3` - Sound when finding a match
- `win.mp3` - Sound when winning the game

Replace these paths in `index.html` with your own audio files or CDN links.

## 💾 Data Storage

Scores are stored in the browser's `localStorage`:

- Key: `leaderboard`
- Value: JSON array of score objects containing player name, moves, and time
- Clears only when browser data is cleared manually

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Requires JavaScript enabled

## 📚 Dependencies

- **canvas-confetti**: Used for confetti animation on win
  - CDN: `https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js`

## 🛠️ Development

To modify or enhance the game:

1. Open the files in your text editor
2. Make changes to HTML structure, CSS styles, or JavaScript logic
3. Test in your browser by opening `index.html`
4. Use browser DevTools for debugging

## 🐛 Known Limitations

- Audio files need to be added/configured
- Leaderboard data is local to each browser (not cloud-based)
- Hint functionality is referenced but not fully implemented in the provided code

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements such as:

- Additional themes
- New game modes
- Enhanced animations
- Mobile responsiveness improvements
- Backend leaderboard integration

## 👨‍💻 Author

Created as an interactive memory card game project.

---

**Enjoy the game and challenge yourself to beat the leaderboard! 🎉**
