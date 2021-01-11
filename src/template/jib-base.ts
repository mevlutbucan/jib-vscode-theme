import constants = require('../constants');

const { OPACITY } = constants;

export = (UI: UIType): { [key: string]: string | undefined } => ({
    'foreground': UI.foreground.workbench.default + OPACITY['%30'], // Overall foreground color. This color is only used if not overridden by a component.
    'icon.foreground': UI.foreground.workbench.additional?.icon?.default, // The default color for icons in the workbench.
    'selection.background': UI.background.workbench.additional?.selection?.default, // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    'descriptionForeground': UI.foreground.workbench.additional?.text?.default + OPACITY['%30'], // Foreground color for description text providing additional information, for example for a label.
    'errorForeground': UI.foreground.error, // Overall foreground color for error messages (this color is only used if not overridden by a component).
    'focusBorder': UI.none, // Overall border color for focused elements. This color is only used if not overridden by a component.
    // 'sash.hoverBorder': UI.border, // The hover border color for draggable sashes.
    'widget.shadow': UI.shadow.editor, // Shadow color of widgets such as Find/Replace inside the editor.
});
