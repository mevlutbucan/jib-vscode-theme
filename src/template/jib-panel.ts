import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Panels are shown below the editor area and contain views like Output and Integrated Terminal.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'panel.background': UI.background.workbench.default, // Panel background color.
    'panel.border': UI.none, // Panel border color to separate the panel from the editor.
    'panel.dropBorder': UI.foreground.workbench.default, // Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
    // 'panelTitle.activeBorder': UI.foreground.workbench.default, // Border color for the active panel title.
    'panelTitle.activeForeground': UI.foreground.workbench.default, // Title color for the active panel.
    'panelTitle.inactiveForeground': UI.foreground.workbench.default + OPACITY['%30'], // Title color for the inactive panel.
    // "panelInput.border": // Input box border for inputs in the panel.
    'panelSection.border': UI.border, // Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
    'panelSection.dropBackground': UI.background.workbench.hover + OPACITY['%90'], // Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
    'panelSectionHeader.background': UI.background.editor.default, // Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
    'panelSectionHeader.foreground': UI.foreground.editor.default, // Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
    // panelSectionHeader.border: Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
});
