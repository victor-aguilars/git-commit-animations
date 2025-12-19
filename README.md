# Git Commit Themes

A VS Code extension that displays dramatic, themed animations whenever you commit changes to your Git repository.

## Features

- **Automatic Detection**: Triggers automatically when you make a Git commit
- **Multiple Themes**: Choose from handpicked selection of themes
- **Custom Text**: Override the default text with your own message (e.g., "CHANGES COMMITTED")
- **Fully Customizable**: Configure theme, text, animation duration, and enable/disable
- **Test Command**: Manually trigger the animation for testing

## Screenshots

### Dark Souls - YOU DIED
![Dark Souls Theme](media/screenshot-darksouls.png)

### Bonfire - BONFIRE LIT
![Bonfire Theme](media/screenshot-bonfire.png)

### Custom Text Example
![Custom Text](media/screenshot-custom.png)

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
  - Select the animation theme:
    - `"darksouls"` - YOU DIED (red text)
    - `"bonfire"` - BONFIRE LIT (orange text)

- **gitCommitThemes.customText** (string, default: `""`)
  - Custom text to display (leave empty to use the theme's default text)
  - Examples: "CHANGES COMMITTED", "SAVED", "NICE WORK"

- **gitCommitThemes.animationDuration** (number, default: `4300`)
  - Total duration of the animation in milliseconds

## Themes

### Dark Souls - YOU DIED
The classic death screen featuring:
- Dark red crimson text (`#8B0000`)
- Dramatic red glow shadow effect
- Horizontal dark band overlay (non-intrusive)
- Smooth fade-in and fade-out animations
- ~4 second total duration

### Dark Souls - BONFIRE LIT
A celebration screen inspired by Dark Souls bonfires:
- Warm orange text (`#FF8C00`)
- Fire-like amber glow effect
- Same elegant horizontal band overlay
- Perfect for successful commits!

### Custom Text
All themes support custom text via the `gitCommitThemes.customText` setting. Simply enter your desired text, and it will appear in the selected theme's style.

### Coming Soon
- More themes
- More customization options

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
│       ├── darkSouls.ts       # Dark Souls "YOU DIED" theme
│       └── bonfire.ts         # Dark Souls "BONFIRE LIT" theme
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
2. Implement the `DeathScreenTheme` interface:
   - `getHTML(customText?: string): string` - Return HTML with text support
   - `getCSS(): string` - Return theme-specific CSS
3. Handle custom text: Use `customText || 'DEFAULT TEXT'` in your implementation
4. Add the theme to the switch statement in `extension.ts`
5. Update `package.json` configuration enum and descriptions

## License

MIT

## Credits

- Built for fun and developer entertainment
