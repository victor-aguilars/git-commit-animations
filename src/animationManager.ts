import * as vscode from 'vscode';
import { DeathScreenTheme } from './themes/themeInterface';

export class AnimationManager {
    private panel: vscode.WebviewPanel | undefined;
    private isAnimating = false;

    constructor(private context: vscode.ExtensionContext) {}

    async showDeathScreen(theme: DeathScreenTheme): Promise<void> {
        // Prevent multiple animations at once
        if (this.isAnimating) {
            return;
        }

        // Check if extension is enabled
        const config = vscode.workspace.getConfiguration('gitCommitThemes');
        const enabled = config.get<boolean>('enabled', true);

        if (!enabled) {
            return;
        }

        this.isAnimating = true;

        // Create webview panel
        this.panel = vscode.window.createWebviewPanel(
            'gitCommitThemes',
            'Commit Animation',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: false
            }
        );

        // Set webview HTML
        this.panel.webview.html = this.getWebviewContent(theme);

        // Get animation duration from settings
        const animationDuration = config.get<number>('animationDuration', 4300);

        // Auto-close after animation completes
        setTimeout(() => {
            this.dispose();
        }, animationDuration);
    }

    private getWebviewContent(theme: DeathScreenTheme): string {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';">
    <title>Commit Animation</title>
    <style>
        ${theme.getCSS()}
    </style>
</head>
<body>
    ${theme.getHTML()}
    <script>
        // Start fade-out animation before webview closes
        setTimeout(() => {
            const deathScreen = document.getElementById('deathScreen');
            if (deathScreen) {
                deathScreen.classList.add('fade-out');
            }
        }, 3500);
    </script>
</body>
</html>`;
    }

    dispose(): void {
        if (this.panel) {
            this.panel.dispose();
            this.panel = undefined;
        }
        this.isAnimating = false;
    }
}
