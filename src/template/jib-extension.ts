import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Notification toasts slide up from the bottom-right of the workbench.
 * Once opened in the Notification Center, they are displayed in a list with a header.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    // "extensionButton.prominentForeground": // Extension view button foreground color (for example Install button).
    // "extensionButton.prominentBackground": // Extension view button background color.
    // "extensionButton.prominentHoverBackground": // Extension view button background hover color.
    // 'extensionBadge.remoteBackground': UI.background.notification, // Background color for the remote badge in the extensions view.
    // 'extensionBadge.remoteForeground': UI.foreground.notification, // Foreground color for the remote badge in the extensions view.
});
