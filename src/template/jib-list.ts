import constants = require('../constants');

const { OPACITY } = constants;

/**
 * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'list.activeSelectionBackground': UI.background.editor.default, // List/Tree background color for the selected item when the list/tree is active.
    'list.activeSelectionForeground': UI.foreground.editor.default, // List/Tree foreground color for the selected item when the list/tree is active.
    'list.inactiveSelectionBackground': UI.background.editor.default, // List/Tree background color for the selected item when the list/tree is inactive.
    'list.inactiveSelectionForeground': UI.foreground.editor.default, // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
    'list.focusBackground': UI.background.workbench.hover + OPACITY['%80'], // List/Tree background color for the focused item when the list/tree is active.
    // 'list.focusForeground': UI.foreground.workbench.active, // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    'list.inactiveFocusBackground': UI.background.workbench.hover + OPACITY['%80'], // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
    'list.hoverBackground': UI.background.workbench.hover + OPACITY['%90'], // List/Tree background when hovering over items using the mouse.
    // 'list.hoverForeground': UI.foreground.workbench.hover, // List/Tree foreground when hovering over items using the mouse.
    'list.dropBackground': UI.background.workbench.hover + OPACITY['%90'], // List/Tree drag and drop background when moving items around using the mouse.
    'list.highlightForeground': UI.background.notification, // List/Tree foreground color of the match highlights when searching inside the list/tree.
    'list.invalidItemForeground': UI.background.error, // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
    'list.errorForeground': UI.background.error, // Foreground color of list items containing errors.
    'list.warningForeground': UI.background.warning, // Foreground color of list items containing warnings.
    'listFilterWidget.background': UI.background.notification + OPACITY['%80'], // List/Tree Filter background color of typed text when searching inside the list/tree.
    'listFilterWidget.outline': UI.none, // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
    'listFilterWidget.noMatchesOutline': UI.background.error, // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
    'list.filterMatchBackground': UI.background.notification + OPACITY['%80'], // Background color of the filtered matches in lists and trees.
    'list.filterMatchBorder': UI.background.notification, // Border color of the filtered matches in lists and trees.
    'tree.indentGuidesStroke': UI.foreground.workbench.default + OPACITY['%40'], // Tree Widget's stroke color for indent guides.
    // 'list.deemphasizedForeground': UI.foreground.workbench.default + OPACITY['%80'], // List/Tree foreground color for items that are deemphasized.
});
