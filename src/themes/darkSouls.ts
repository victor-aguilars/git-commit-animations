import { DeathScreenTheme } from './themeInterface';

export class DarkSoulsTheme implements DeathScreenTheme {
    name = 'darksouls';

    getHTML(customText?: string): string {
        const displayText = customText || 'YOU DIED';
        return `
            <div class="death-screen-overlay" id="deathScreen">
                <div class="death-text">${displayText}</div>
            </div>
        `;
    }

    getCSS(): string {
        return `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                overflow: hidden;
                background: transparent;
            }

            .death-screen-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeInBackground 500ms ease-in forwards;
            }

            .death-text {
                font-family: Georgia, 'Times New Roman', serif;
                font-size: clamp(48px, 8vw, 96px);
                font-weight: 400;
                color: #8B0000;
                letter-spacing: 0.05em;
                text-align: center;
                opacity: 0;
                text-shadow:
                    0 0 10px rgba(220, 20, 60, 0.8),
                    0 0 20px rgba(220, 20, 60, 0.6),
                    0 0 30px rgba(220, 20, 60, 0.4);
                animation: fadeInText 1000ms ease-in 500ms forwards;
            }

            @keyframes fadeInBackground {
                from {
                    background: transparent;
                }
                to {
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.3) 0%,
                        rgba(0, 0, 0, 0.3) 35%,
                        rgba(0, 0, 0, 0.95) 45%,
                        rgba(0, 0, 0, 0.95) 55%,
                        rgba(0, 0, 0, 0.3) 65%,
                        rgba(0, 0, 0, 0.3) 100%
                    );
                }
            }

            @keyframes fadeInText {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @keyframes fadeOutAll {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            .death-screen-overlay.fade-out {
                animation: fadeOutAll 800ms ease-out forwards;
            }
        `;
    }
}
