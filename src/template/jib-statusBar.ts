import constants = require('../constants');

const { OPACITY } = constants;

/**
 * The Status Bar is shown in the bottom of the workbench.
 * Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'statusBar.background': UI.background.workbench.default, // Standard Status Bar background color.
    'statusBar.foreground': UI.foreground.workbench.default + OPACITY['%30'], // Status Bar foreground color.
    // "statusBar.border": // Status Bar border color separating the Status Bar and editor.
    'statusBar.debuggingBackground': UI.background.workbench.active, // Status Bar background color when a program is being debugged.
    'statusBar.debuggingForeground': UI.foreground.workbench.active, // Status Bar foreground color when a program is being debugged.
    // statusBar.debuggingBorder: Status Bar border color separating the Status Bar and editor when a program is being debugged.
    // statusBar.noFolderForeground: Status Bar foreground color when no folder is opened.
    // statusBar.noFolderBackground: Status Bar background color when no folder is opened.
    // statusBar.noFolderBorder: Status Bar border color separating the Status Bar and editor when no folder is opened.
    // "statusBarItem.activeBackground" // Status Bar item background color when clicking.
    'statusBarItem.hoverBackground': UI.background.workbench.hover + OPACITY['%90'], // Status Bar item background color when hovering.
    'statusBarItem.prominentForeground': UI.background.editor.default, // Status Bar prominent items foreground color.
    // statusBarItem.prominentBackground: Status Bar prominent items background color.
    // statusBarItem.prominentHoverBackground: Status Bar prominent items background color when hovering.
    // "statusBarItem.remoteBackground": , // Background color for the remote indicator on the status bar.
    'statusBarItem.remoteForeground': UI.background.editor.default, // Foreground color for the remote indicator on the status bar.
    'statusBarItem.errorBackground': UI.background.error, // Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
    'statusBarItem.errorForeground': UI.foreground.error, // Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
});
