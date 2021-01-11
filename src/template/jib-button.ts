/**
 * A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'button.background': UI.background.workbench.additional?.button?.default, // Button background color.
    'button.foreground': UI.foreground.workbench.additional?.button?.default, // Button foreground color.
    'button.hoverBackground': UI.background.workbench.additional?.button?.hover, // Button background color when hovering.
    // "button.secondaryForeground": // Secondary button foreground color.
    // "button.secondaryBackground": // Secondary button background color.
    // "button.secondaryHoverBackground": // Secondary button background color when hovering.
    'checkbox.background': UI.background.workbench.additional?.checkbox?.active, // Background color of checkbox widget.
    'checkbox.foreground': UI.foreground.workbench.additional?.checkbox?.active, // Foreground color of checkbox widget.
    'checkbox.border': UI.border, // Border color of checkbox widget.
});
