import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Notification toasts slide up from the bottom-right of the workbench.
 * Once opened in the Notification Center, they are displayed in a list with a header.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'pickerGroup.border': UI.border, // Quick picker (Quick Open) color for grouping borders.
    'pickerGroup.foreground': UI.background.notification, // Quick picker (Quick Open) color for grouping labels.
    'quickInput.background': UI.background.workbench.additional?.dropdown?.default, // Quick input background color. The quick input widget is the container for views like the color theme picker.
    'quickInput.foreground': UI.foreground.workbench.additional?.dropdown?.default, // Quick input foreground color. The quick input widget is the container for views like the color theme picker.
    // 'quickInputTitle.background': UI.background.workbench.additional?.dropdown?.default, // Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
});
