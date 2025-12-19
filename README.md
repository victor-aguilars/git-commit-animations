# Git Commit Themes

A VS Code extension that displays dramatic, themed animations whenever you commit changes to your Git repository.

## Features

- **Automatic Detection**: Triggers automatically when you make a Git commit
- **Dark Souls Theme**: The iconic "YOU DIED" screen with dramatic red text and fade animations
- **Customizable**: Configure animation duration and enable/disable the extension
- **Test Command**: Manually trigger the animation for testing

## Installation

### From Source

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Press F5 in VS Code to open a new window with the extension loaded

### From VSIX (when available)

1. Download the `.vsix` file
2. In VS Code, go to Extensions view
3. Click the "..." menu and select "Install from VSIX..."
4. Select the downloaded file

## Usage

### Automatic Trigger

Simply make a Git commit using any method:
- VS Code Source Control UI
- Terminal commands (`git commit`)
- Git Graph or other Git extensions

The themed animation will automatically appear after a successful commit!

### Manual Testing

Use the command palette (Ctrl+Shift+P / Cmd+Shift+P):
- Type "Git Commit Themes: Test Animation"
- Press Enter to see the animation

## Configuration

Access settings via File > Preferences > Settings, then search for "Git Commit Themes":

- **gitCommitThemes.enabled** (boolean, default: `true`)
  - Enable or disable the themed animations

- **gitCommitThemes.theme** (string, default: `"darksouls"`)
  - Select the theme (currently only Dark Souls available)

- **gitCommitThemes.animationDuration** (number, default: `4300`)
  - Total duration of the animation in milliseconds

## Themes

### Dark Souls
The classic "YOU DIED" screen featuring:
- Dark atmospheric overlay
- Red serif text with glowing shadow effect
- Smooth fade-in and fade-out animations
- ~4 second total duration

### Coming Soon
- Skyrim
- Minecraft
- Undertale
- Custom themes

## Development

### Project Structure

```
git-commit-themes/
├── src/
│   ├── extension.ts           # Main entry point
│   ├── commitDetector.ts      # Git commit detection
│   ├── animationManager.ts    # Webview animation controller
│   └── themes/
│       ├── themeInterface.ts  # Theme interface
│       └── darkSouls.ts       # Dark Souls theme
├── package.json
├── tsconfig.json
└── README.md
```

### Build Commands

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode (auto-compile on changes)
npm run watch

# Package extension
vsce package
```

### Adding New Themes

1. Create a new file in `src/themes/` (e.g., `skyrim.ts`)
2. Implement the `DeathScreenTheme` interface
3. Define `getHTML()` and `getCSS()` methods
4. Add the theme to the switch statement in `extension.ts`
5. Update `package.json` configuration enum

## License

MIT

## Credits

- Inspired by FromSoftware's Dark Souls
- Built for fun and developer entertainment
