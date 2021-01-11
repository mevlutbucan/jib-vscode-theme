export = (UI: UIType): { [key: string]: string | undefined } => ({
    'activityBar.background': UI.background.workbench.default, // Activity Bar background color.
    'activityBar.foreground': UI.foreground.workbench.additional?.icon?.active, // Activity Bar foreground color (for example used for the icons).
    'activityBar.inactiveForeground': UI.foreground.workbench.additional?.icon?.inactive, // Activity Bar item foreground color when it is inactive.
    'activityBar.border': UI.none, // Activity Bar border color with the Side Bar.
    'activityBarBadge.background': UI.background.notification, // Activity notification badge background color.
    'activityBarBadge.foreground': UI.foreground.notification, // Activity notification badge foreground color.
    // 'activityBar.activeBorder': UI.foreground.workbench.additional?.icon?.active, // Activity Bar active indicator border color.
    'activityBar.dropBorder': UI.foreground.workbench.additional?.icon?.active, // Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
    'activityBar.activeBackground': UI.background.workbench.additional?.icon?.default, // Activity Bar optional background color for the active element.
    'activityBar.activeFocusBorder': UI.foreground.workbench.additional?.icon?.active, // Activity bar focus border color for the active item.
});
