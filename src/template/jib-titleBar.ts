import constants = require('../constants');

const { OPACITY } = constants;

export = (UI: UIType): { [key: string]: string | undefined } => ({
    'titleBar.activeBackground': UI.background.editor.default, // Title Bar background when the window is inactive.
    'titleBar.activeForeground': UI.foreground.editor.default, // Title Bar foreground when the window is inactive.
    'titleBar.inactiveBackground': UI.background.workbench.default, // Title Bar background when the window is active.
    'titleBar.inactiveForeground': UI.foreground.workbench.default + OPACITY['%30'], // Title Bar foreground when the window is active.
    // 'titleBar.border': UI.none, // Title bar border color.
});
