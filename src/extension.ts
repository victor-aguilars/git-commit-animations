import * as vscode from 'vscode';
import { AnimationManager } from './animationManager';
import { CommitDetector } from './commitDetector';
import { DarkSoulsTheme } from './themes/darkSouls';
import { BonfireTheme } from './themes/bonfire';
import { DeathScreenTheme } from './themes/themeInterface';

let animationManager: AnimationManager;
let commitDetector: CommitDetector;

export function activate(context: vscode.ExtensionContext) {
    console.log('Git Commit Animations extension is now active!');

    // Initialize animation manager
    animationManager = new AnimationManager(context);

    // Initialize commit detector
    commitDetector = new CommitDetector(() => {
        // This callback is triggered when a commit is detected
        // Get theme dynamically so users can change it without reloading
        animationManager.showDeathScreen(getTheme());
    });

    // Start watching for commits
    commitDetector.initialize();

    // Register test command for manual testing
    const testCommand = vscode.commands.registerCommand('gitCommitAnimations.testAnimation', () => {
        // Get theme dynamically for testing
        animationManager.showDeathScreen(getTheme());
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
    const config = vscode.workspace.getConfiguration('gitCommitAnimations');
    const themeName = config.get<string>('theme', 'darksouls');

    switch (themeName) {
        case 'darksouls':
            return new DarkSoulsTheme();
        case 'bonfire':
            return new BonfireTheme();
        default:
            return new DarkSoulsTheme();
    }
}
