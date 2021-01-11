import constants = require('../constants');

const { OPACITY } = constants;

export = (UI: UIType): { [key: string]: string | undefined } => ({
    'menubar.selectionBackground': UI.none, // Background color of the selected menu item in the menubar.
    'menubar.selectionForeground': UI.foreground.workbench.additional?.text?.hover, // Foreground color of the selected menu item in the menubar.
    // "menubar.selectionBorder": UI.none, // Border color of the selected menu item in the menubar.
    'menu.background': UI.background.workbench.additional?.dropdown?.default, // Background color of menu items.
    'menu.foreground': UI.foreground.workbench.additional?.dropdown?.default, // Foreground color of menu items.
    'menu.selectionBackground': UI.background.workbench.additional?.dropdown?.hover, // Background color of the selected menu item in menus.
    'menu.selectionForeground': UI.foreground.workbench.additional?.dropdown?.default, // Foreground color of the selected menu item in menus.
    'menu.selectionBorder': UI.background.workbench.additional?.dropdown?.hover, // Border color of the selected menu item in menus.
    'menu.separatorBackground': UI.background.workbench.default, // Color of a separator menu item in menus.
    // 'menu.border': UI.none, // Border color of menus.
});
