import constants = require('../constants');

const { OPACITY } = constants;
/**
 * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'editorGroup.emptyBackground': UI.background.workbench.default, // Background color of an empty editor group.
    'editorGroupHeader.tabsBackground': UI.background.workbench.default, // Background color of the Tabs container.
    // "editorGroupHeader.noTabsBackground": , // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
    'editorGroup.dropBackground': UI.background.workbench.hover + OPACITY['%80'], //Background color when dragging editors around.
    'editorGroup.border': UI.none, // Color to separate multiple editor groups from each other.
    // "editorGroupHeader.border": // Border color between editor group header and editor (below breadrcumbs if enabled).
    // "editorGroup.focusedEmptyBorder": // Border color of an empty editor group that is focused.
    // "editorGroupHeader.tabsBorder": // Border color below the editor tabs control when tabs are enabled.
    'tab.activeBackground': UI.background.editor.default, // Active Tab background color in an active group.
    'tab.unfocusedActiveBackground': UI.background.workbench.default, // Active Tab background color in an inactive editor group.
    'tab.inactiveBackground': UI.background.workbench.default, // Inactive Tab background color.
    // "tab.unfocusedInactiveBackground": // Inactive Tab background color in an unfocused group.
    'tab.activeForeground': UI.foreground.editor.default, // Active Tab foreground color in an active group.
    'tab.unfocusedActiveForeground': UI.foreground.workbench.default, // Active tab foreground color in an inactive editor group.
    'tab.inactiveForeground': UI.foreground.workbench.default + OPACITY['%30'], // Inactive Tab foreground color in an active group.
    // "tab.unfocusedInactiveForeground": // Inactive tab foreground color in an inactive editor group.
    // 'tab.hoverBackground': UI.background.workbench.hover + OPACITY['%80'], // Tab background color when hovering.
    // 'tab.unfocusedHoverBackground': UI.background.workbench.hover + OPACITY['%90'], // Tab background color in an unfocused group when hovering.
    'tab.hoverForeground': UI.foreground.workbench.default, // Tab foreground color when hovering.
    'tab.unfocusedHoverForeground': UI.foreground.workbench.default, // Tab foreground color in an unfocused group when hovering.
    'tab.border': UI.none, // Border to separate Tabs from each other.
    // "tab.activeBorder": , // Bottom border for the active tab.
    'tab.unfocusedActiveBorder': UI.foreground.workbench.default, // Bottom border for the active tab in an inactive editor group.
    // "tab.activeBorderTop": // Top border for the active tab.
    // "tab.unfocusedActiveBorderTop": // Top border for the active tab in an inactive editor group.
    // 'tab.activeModifiedBorder': UI.background.workbench.inactive, // Border on the top of modified (dirty) active tabs in an active group.
    // 'tab.inactiveModifiedBorder': UI.background.workbench.inactive, // Border on the top of modified (dirty) inactive tabs in an active group.
    // 'tab.unfocusedActiveModifiedBorder': UI.background.workbench.inactive, // Border on the top of modified (dirty) active tabs in an unfocused group.
    // 'tab.unfocusedInactiveModifiedBorder': UI.background.workbench.inactive, // Border on the top of modified (dirty) inactive tabs in an unfocused group.
    // 'tab.hoverBorder': UI.foreground.workbench.default, // Border to highlight tabs when hovering.
    // "tab.unfocusedHoverBorder": // Border to highlight tabs in an unfocused group when hovering.
    // "tab.lastPinnedBorder": // Border on the right of the last pinned editor to separate from unpinned editors.
    'editorPane.background': UI.background.workbench.default, // Background color of the editor pane visible on the left and right side of the centered editor layout.
});
