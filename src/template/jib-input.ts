import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Colors for input controls such as in the Search view or the Find/Replace dialog.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'input.background': UI.background.workbench.additional?.input?.default + OPACITY['%90'], // Input box background.
    'input.foreground': UI.foreground.workbench.additional?.input?.default, // Input box foreground.
    'input.placeholderForeground': UI.foreground.workbench.additional?.input?.default + OPACITY['%60'], // Input box foreground color for placeholder text.
    "input.border": UI.border, // Input box border.
    'inputOption.activeBackground': UI.background.workbench.additional?.checkbox?.active, // Background color of activated options in input fields.
    'inputOption.activeForeground': UI.foreground.workbench.additional?.checkbox?.active, // Foreground color of activated options in input fields.
    'inputOption.activeBorder': UI.none, // Border color of activated options in input fields.
    'inputValidation.errorBackground': UI.background.error, // Input validation background color for error severity.
    'inputValidation.errorForeground': UI.foreground.error, // Input validation foreground color for error severity.
    'inputValidation.errorBorder': UI.background.error, // Input validation border color for error severity.
    "inputValidation.infoBackground": UI.background.notification, // Input validation background color for information severity.
    "inputValidation.infoForeground": UI.foreground.notification, // Input validation foreground color for information severity.
    // "inputValidation.infoBorder": Input validation border color for information severity.
    "inputValidation.warningBackground": UI.background.warning, // Input validation background color for information warning.
    "inputValidation.warningForeground": UI.foreground.warning, // Input validation foreground color for warning severity.
    // "inputValidation.warningBorder": Input validation border color for warning severity.
});
