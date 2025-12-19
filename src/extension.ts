import * as vscode from 'vscode';
import { AnimationManager } from './animationManager';
import { CommitDetector } from './commitDetector';
import { DarkSoulsTheme } from './themes/darkSouls';
import { DeathScreenTheme } from './themes/themeInterface';

let animationManager: AnimationManager;
let commitDetector: CommitDetector;

export function activate(context: vscode.ExtensionContext) {
    console.log('Git Commit Themes extension is now active!');

    // Initialize animation manager
    animationManager = new AnimationManager(context);

    // Get the current theme
    const theme = getTheme();

    // Initialize commit detector
    commitDetector = new CommitDetector(() => {
        // This callback is triggered when a commit is detected
        animationManager.showDeathScreen(theme);
    });

    // Start watching for commits
    commitDetector.initialize();

    // Register test command for manual testing
    const testCommand = vscode.commands.registerCommand('gitCommitThemes.testAnimation', () => {
        animationManager.showDeathScreen(theme);
    });

    context.subscriptions.push(testCommand);
}

export function deactivate() {
    if (commitDetector) {
        commitDetector.dispose();
    }
    if (animationManager) {
        animationManager.dispose();
    }
}

function getTheme(): DeathScreenTheme {
    const config = vscode.workspace.getConfiguration('gitCommitThemes');
    const themeName = config.get<string>('theme', 'darksouls');

    // For now, we only have Dark Souls theme
    // Future: Add more themes here
    switch (themeName) {
        case 'darksouls':
        default:
            return new DarkSoulsTheme();
    }
}
