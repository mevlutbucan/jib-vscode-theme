import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Notification toasts slide up from the bottom-right of the workbench.
 * Once opened in the Notification Center, they are displayed in a list with a header.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    // "notificationCenter.border": // Notification Center border color.
    'notificationCenterHeader.background': UI.background.notification, // Notification Center header background color.
    'notificationCenterHeader.foreground': UI.foreground.notification, // Notification Center header foreground color.
    // "notificationToast.border": // Notification toast border color.
    'notifications.background': UI.background.notification, // Notification background color.
    'notifications.foreground': UI.foreground.notification, // Notification foreground color.
    'notifications.border': UI.border, // Notification border color separating from other notifications in the Notification Center.
    'notificationLink.foreground': UI.foreground.workbench.additional?.link?.default, // Notification links foreground color.
    'notificationsErrorIcon.foreground': UI.background.error, // The color used for the notification error icon.
    'notificationsWarningIcon.foreground': UI.background.warning, // The color used for the notification warning icon.
    'notificationsInfoIcon.foreground': UI.background.notification, // The color used for the notification info icon.
});
