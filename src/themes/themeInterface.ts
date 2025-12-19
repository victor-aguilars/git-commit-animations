export interface DeathScreenTheme {
    name: string;
    getHTML(customText?: string): string;
    getCSS(): string;
}
