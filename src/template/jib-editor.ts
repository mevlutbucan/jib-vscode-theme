import constants = require('../constants');

const { OPACITY } = constants;

/**
 * The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed. These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting. See Customizing a Color Theme for details on updating a Color Theme and the available token types.
 */
export = (UI: UIType): { [key: string]: string | undefined } => ({
    'editor.background': UI.background.editor.default, // Editor background color.
    'editor.foreground': UI.foreground.editor.default, // Editor default foreground color.
    // 'editorLineNumber.foreground': UI.font.main + OPACITY['%90'], // Color of editor line numbers.
    // 'editorLineNumber.activeForeground': UI.font.main + OPACITY['%40'], // Color of the active editor line number.
    // "editorCursor.background": // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
    // 'editorCursor.foreground': UI.icon.default, // Color of the editor cursor.

    /**
     * ======================================== SELECTION COLORS ========================================
     * Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.
     */
    // 'editor.selectionBackground': UI.selection.editor.default, // Color of the editor selection.
    // 'editor.selectionForeground': UI.font.contrast, // Color of the selected text for high contrast.
    // "editor.inactiveSelectionBackground": // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.selectionHighlightBackground': UI.selection.editor.regions, // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
    // "editor.selectionHighlightBorder": // Border color for regions with the same content as the selection.

    /**
     * ======================================== WORD HIGHLIGHT COLORS ========================================
     * Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.
     */
    // 'editor.wordHighlightBackground': UI.selection.editor.regions, // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.wordHighlightStrongBackground': UI.selection.editor.default, // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
    // "editor.wordHighlightBorder": // Border color of a symbol during read-access, for example when reading a variable.
    // "editor.wordHighlightStrongBorder": // Border color of a symbol during write-access, for example when writing to a variable.

    /**
     * ======================================== FIND COLORS ========================================
     * Find colors depend on the current find string in the Find/Replace dialog.
     */
    // 'editor.findMatchBackground': UI.selection.editor.default, // Color of the current search match.
    // 'editor.findMatchHighlightBackground': UI.selection.editor.regions, // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.findRangeHighlightBackground': UI.selection.editor.line, // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
    // "editor.findMatchBorder": // Border color of the current search match.
    // "editor.findMatchHighlightBorder": // Border color of the other search matches.
    // "editor.findRangeHighlightBorder": // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

    /**
     * ======================================== SEARCH EDITOR COLORS ========================================
     * Search Editor colors highlight results in a Search Editor. This can be configured separately from other find matches in order to better differentiate between different classes of match in the same editor.
     */
    // "searchEditor.findMatchBackground": // Color of the editor's results.
    // "searchEditor.findMatchBorder": // Border color of the editor's results.
    // "searchEditor.textInputBorder": // Search editor text input box border.

    /**
     * ======================================== HOVER HIGHLIGHT COLORS ========================================
     * The hover highlight is shown behind the symbol for which a hover is shown.
     */
    // 'editor.hoverHighlightBackground': // Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.

    /**
     * ======================================== LINE HIGHLIGHT COLORS ========================================
     * The current line is typically shown as either background highlight or a border (not both).
     */
    // 'editor.lineHighlightBackground': UI.selection.editor.line, // Background color for the highlight of line at the cursor position.
    // "editor.lineHighlightBorder": // Background color for the border around the line at the cursor position.

    /**
     * ======================================== LINK COLORS ========================================
     * The link color is visible when clicking on a link.
     */
    // "editorLink.activeForeground": // Color of active links.

    /**
     * ======================================== RANGE HIGHLIGHT COLORS ========================================
     * The range highlight is visible when selecting a search result.
     */
    // 'editor.rangeHighlightBackground': // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
    // "editor.rangeHighlightBorder": // Background color of the border around highlighted ranges.

    /**
     * ======================================== SYMBOL HIGHLIGHT COLORS ========================================
     * The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.
     */
    // "editor.symbolHighlightBackground": // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
    // "editor.symbolHighlightBorder": // Background color of the border around highlighted symbols.

    /**
     * ======================================== WHITE SPACE COLORS ========================================
     * To see the editor white spaces, enable Toggle Render Whitespace.
     */
    // "editorWhitespace.foreground": // Color of whitespace characters in the editor.

    /**
     * ======================================== INDENT GUIDE COLORS ========================================
     * To see the editor indent guides, set "editor.renderIndentGuides": true.
     */
    // "editorIndentGuide.background": // Color of the editor indentation guides.
    // "editorIndentGuide.activeBackground": // Color of the active editor indentation guide.

    /**
     * ======================================== RULER COLORS ========================================
     * To see editor rulers, define their location with "editor.rulers" .
     */
    // "editorRuler.foreground": // Color of the editor rulers.
    // "editor.linkedEditingBackground": // Background color when the editor is in linked editing mode.

    /**
     * ======================================== CODELENS COLORS ========================================
     */
    // "editorCodeLens.foreground": // Foreground color of an editor CodeLens.

    /**
     * ======================================== LIGHTBULB COLORS ========================================
     */
    // "editorLightBulb.foreground": // The color used for the lightbulb actions icon.
    // "editorLightBulbAutoFix.foreground": // The color used for the lightbulb auto fix actions icon.

    /**
     * ======================================== BRACKET MATCH COLORS ========================================
     */
    // "editorBracketMatch.background": // Background color behind matching brackets.
    // "editorBracketMatch.border": // Color for matching brackets boxes.

    /**
     * ======================================== FOLDING COLORS ========================================
     */
    // "editor.foldBackground": // Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.

    /**
     * ======================================== OVERVIEW RULER COLORS ========================================
     * This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
     */

    /**
     * ======================================== ERROR & WARNING COLORS ========================================
     */

    /**
     * ======================================== UNNECESSARY CODE COLORS ========================================
     */

    /**
     * ======================================== GUTTER COLORS ========================================
     */
});
