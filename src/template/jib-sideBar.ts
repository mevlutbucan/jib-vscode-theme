import constants = require('../constants');

const { OPACITY } = constants;

/**
 * The Side Bar contains views like the Explorer and Search.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'sideBar.background': UI.background.workbench.default, // Side Bar background color.
    'sideBar.foreground': UI.foreground.workbench.default + OPACITY['%40'], // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
    // 'sideBar.border': UI.none, // Side Bar border color on the side separating the editor.
    'sideBar.dropBackground': UI.background.workbench.hover + OPACITY['%80'], // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
    // 'sideBarTitle.foreground': UI.foreground.workbench.default + OPACITY['%30'], // Side Bar title foreground color.
    'sideBarSectionHeader.background': UI.background.workbench.default, // Side Bar section header background color.
    'sideBarSectionHeader.foreground': UI.foreground.workbench.default, // Side Bar section header foreground color.
    // 'sideBarSectionHeader.border': UI.none, // Side bar section header border color.
});
