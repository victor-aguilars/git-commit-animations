import { DeathScreenTheme } from './themeInterface';

export class BonfireTheme implements DeathScreenTheme {
    name = 'bonfire';

    getHTML(): string {
        return `
            <div class="death-screen-overlay" id="deathScreen">
                <div class="death-text">BONFIRE LIT</div>
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
                color: #FF8C00;
                letter-spacing: 0.05em;
                text-align: center;
                opacity: 0;
                text-shadow:
                    0 0 10px rgba(255, 165, 0, 0.9),
                    0 0 20px rgba(255, 140, 0, 0.7),
                    0 0 30px rgba(255, 120, 0, 0.5);
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
