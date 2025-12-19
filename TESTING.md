# Testing the Git Commit Animations Extension

## Quick Start

### Method 1: Using VS Code (Recommended)

1. **Open the project in VS Code**
   ```bash
   code .
   ```

2. **Press F5** or go to Run > Start Debugging
   - This will open a new VS Code window titled "[Extension Development Host]"
   - The extension is now active in that window

3. **Test the animation manually**
   - In the Extension Development Host window, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: "Git Commit Animations: Test Animation"
   - Press Enter
   - You should see the "YOU DIED" animation!

4. **Test with an actual commit**
   - Open a Git repository in the Extension Development Host window
   - Make some changes to a file
   - Commit the changes using the Source Control panel (Ctrl+Shift+G)
   - The "YOU DIED" animation should appear after the commit!

### Method 2: Terminal Git Commits

In the Extension Development Host window:

1. Open a terminal in a Git repository
2. Make a change to a file
3. Run:
   ```bash
   git add .
   git commit -m "Test commit for themed animation"
   ```
4. The animation should trigger after the commit completes

## Watch Mode for Development

If you want to make changes and see them live:

1. Open a terminal in the extension project directory
2. Run:
   ```bash
   npm run watch
   ```
3. This will automatically recompile when you change TypeScript files
4. After making changes, press `Ctrl+R` (or `Cmd+R`) in the Extension Development Host window to reload

## Configuration Options

Test the different settings:

1. In the Extension Development Host window, go to:
   - File > Preferences > Settings (or Code > Preferences > Settings on Mac)
   - Search for "Git Commit Animations"

2. Try changing:
   - **Enabled**: Turn the extension on/off
   - **Animation Duration**: Change how long the animation lasts (in milliseconds)

## Troubleshooting

### Animation doesn't appear

- Check if the extension is enabled in settings
- Make sure you're in a Git repository
- Check the Debug Console in the main VS Code window for errors

### Extension not loading

- Check the Debug Console for error messages
- Make sure you ran `npm install` and `npm run compile`
- Try closing and reopening the Extension Development Host window (F5 again)

### Git commits not detected

- Make sure the Git extension is enabled in VS Code
- Check that you're in a valid Git repository
- Try the manual test command first to verify the animation works

## Debugging

1. Set breakpoints in the TypeScript files
2. Press F5 to start debugging
3. Trigger a commit or use the test command
4. The debugger will pause at your breakpoints

## Building a VSIX Package

To create an installable extension package:

```bash
# Make sure vsce is installed (we did this earlier)
vsce package
```

This creates a `.vsix` file that you can:
- Share with others
- Install in any VS Code instance
- Publish to the marketplace

## Next Steps

- Try making a commit and watch for the themed animation!
- Modify the animation timing in `src/themes/darkSouls.ts`
- Create your own theme by implementing the `DeathScreenTheme` interface
- Add sound effects (you'll need to add audio file support)
