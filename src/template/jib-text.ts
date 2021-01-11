/**
 * Colors inside a text document, such as the welcome page.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'textBlockQuote.background': UI.background.workbench.additional?.text?.inactive, // Background color for block quotes in text.
    'textLink.foreground': UI.foreground.workbench.additional?.link?.default, // Foreground color for links in text.
    'textLink.activeForeground': UI.foreground.workbench.additional?.link?.active, // Foreground color for links in text when clicked on and on mouse hover.
    'textCodeBlock.background': UI.background.workbench.additional?.text?.active, // Background color for code blocks in text.
    'textPreformat.foreground': UI.foreground.workbench.additional?.text?.active, // Foreground color for preformatted text segments.
    // 'textSeparator.foreground': UI.foreground.workbench.additional?.text?.default, // Color for text separators.
    'textBlockQuote.border': UI.none, // Border color for block quotes in text.
});
