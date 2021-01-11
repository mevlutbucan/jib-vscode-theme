/**
 * Badges are small information labels, for example, search results count.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'badge.background': UI.background.notification, // Badge background color.
    'badge.foreground': UI.foreground.notification, // Badge foreground color.
});
