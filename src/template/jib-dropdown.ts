/**
 * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'dropdown.background': UI.background.workbench.additional?.dropdown?.default, // Dropdown background.
    'dropdown.listBackground': UI.background.workbench.additional?.dropdown?.default, // Dropdown list background.
    'dropdown.border': UI.none, // Dropdown border.
    'dropdown.foreground': UI.foreground.workbench.additional?.dropdown?.default, // Dropdown foreground.
});
