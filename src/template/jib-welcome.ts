import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Notification toasts slide up from the bottom-right of the workbench.
 * Once opened in the Notification Center, they are displayed in a list with a header.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'welcomePage.background': UI.background.workbench.default, // Background color for the Welcome page.
    'welcomePage.buttonBackground': UI.background.workbench.hover + OPACITY['%90'], // Background color for the buttons on the Welcome page.
    'welcomePage.buttonHoverBackground': UI.background.workbench.hover + OPACITY['%80'], // Hover background color for the buttons on the Welcome page.
    'walkThrough.embeddedEditorBackground': UI.background.warning, // Background color for the embedded editors on the Interactive Playground.
});
