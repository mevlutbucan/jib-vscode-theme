export = (UI: UIType): { [key: string]: string | undefined } => ({
    'scrollbar.shadow': UI.shadow.editor, // Scrollbar slider shadow to indicate that the view is scrolled.
    'scrollbarSlider.background': UI.background.workbench.additional?.scrollbar?.default, // Scrollbar slider background color.
    'scrollbarSlider.hoverBackground': UI.background.workbench.additional?.scrollbar?.hover, // Scrollbar slider background color when hovering.
    'scrollbarSlider.activeBackground': UI.background.workbench.additional?.scrollbar?.active, // Scrollbar slider background color when clicked on.
});
