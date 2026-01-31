export interface DeathScreenTheme {
    name: string;
    getHTML(customText?: string, cmsg?: string): string;
    getCSS(): string;
}
