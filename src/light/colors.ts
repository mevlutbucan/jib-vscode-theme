import constants = require('../constants');

const { COLORS, OPACITY } = constants;
const LIGHT_COLORS = {
    mistyRose: '#FFE6E7',
    babyPink: '#FFD2D2',
    salmonPink: '#FF9097',
    lightCoral: '#FF7983',
    sizzlingRed: '#F24D5E',

    deepChampagne: '#EBCEA2',
    ORANGE: '#E7A967',
};

const THEME_COLORS: UIType = {
    none: '#00000000',
    border: COLORS.RED + OPACITY['%70'],
    shadow: {
        workbench: COLORS.WHITE + OPACITY['%70'],
        editor: COLORS.BLACK + OPACITY['%70'],
    },
    background: {
        workbench: {
            default: COLORS.BLACK,
            hover: LIGHT_COLORS.salmonPink,
            active: LIGHT_COLORS.sizzlingRed,
            inactive: LIGHT_COLORS.lightCoral,
            additional: {
                text: {
                    active: COLORS.WHITE, // Code Block
                    inactive: LIGHT_COLORS.mistyRose, // Blockquote
                },
                input: {
                    default: LIGHT_COLORS.mistyRose,
                },
                checkbox: {
                    active: LIGHT_COLORS.sizzlingRed,
                },
                button: {
                    default: LIGHT_COLORS.sizzlingRed,
                    hover: COLORS.RED,
                },
                selection: {
                    default: LIGHT_COLORS.sizzlingRed,
                },
                scrollbar: {
                    default: LIGHT_COLORS.lightCoral + OPACITY['%80'],
                    hover: LIGHT_COLORS.lightCoral + OPACITY['%60'],
                    active: LIGHT_COLORS.lightCoral + OPACITY['%20'],
                },
                dropdown: {
                    default: LIGHT_COLORS.mistyRose,
                    hover: COLORS.WHITE,
                },
                progress: {
                    default: COLORS.RED,
                },
            },
        },
        editor: {
            default: COLORS.WHITE,
            hover: LIGHT_COLORS.babyPink,
            active: LIGHT_COLORS.sizzlingRed,
            inactive: LIGHT_COLORS.mistyRose,
        },
        notification: LIGHT_COLORS.deepChampagne,
        warning: COLORS.WARNING,
        error: COLORS.RED,
    },
    foreground: {
        workbench: {
            default: LIGHT_COLORS.salmonPink,
            hover: LIGHT_COLORS.salmonPink,
            active: COLORS.WHITE,
            inactive: COLORS.BLACK,
            additional: {
                text: {
                    default: COLORS.WHITE,
                    hover: COLORS.RED, // Menu Bar Items
                    active: COLORS.BLACK, // Code Block
                    inactive: COLORS.WHITE + OPACITY['%30'], // Blockquote
                },
                link: {
                    default: LIGHT_COLORS.sizzlingRed,
                    active: COLORS.RED,
                },
                input: {
                    default: COLORS.WHITE,
                },
                checkbox: {
                    active: COLORS.BLACK,
                },
                button: {
                    default: COLORS.BLACK,
                },
                icon: {
                    default: LIGHT_COLORS.salmonPink,
                    active: LIGHT_COLORS.lightCoral,
                    inactive: LIGHT_COLORS.lightCoral + OPACITY['%40'],
                },
                selection: {
                    default: COLORS.WHITE,
                },
                dropdown: {
                    default: COLORS.BLACK,
                },
            },
        },
        editor: {
            default: COLORS.BLACK,
            hover: LIGHT_COLORS.babyPink,
            active: LIGHT_COLORS.sizzlingRed,
            inactive: LIGHT_COLORS.mistyRose,
        },
        notification: COLORS.BLACK,
        warning: COLORS.BLACK,
        error: COLORS.BLACK,
    },
};

// const THEME_COLORS: COLOR_TYPES = {
//     none: '#00000000',
//     background: {
//         main: COLORS.WHITE,
//         contrast: COLORS.BLACK,
//     },
//     border: LIGHT_COLORS.babyPink, // Border color.
//     font: {
//         main: COLORS.BLACK,
//         contrast: LIGHT_COLORS.salmonPink,
//     },
//     link: {
//         default: LIGHT_COLORS.sizzlingRed,
//         active: COLORS.RED,
//     },
//     input: LIGHT_COLORS.mistyRose, // Input background color.
//     checkbox: LIGHT_COLORS.sizzlingRed, // Checkbox background color.
//     button: {
//         default: LIGHT_COLORS.sizzlingRed,
//         active: COLORS.RED,
//     },
//     icon: {
//         default: COLORS.RED,
//         inactive: LIGHT_COLORS.lightCoral,
//     },
//     dropdown: {
//         default: LIGHT_COLORS.mistyRose,
//         active: LIGHT_COLORS.babyPink,
//     },
//     badge: LIGHT_COLORS.deepChampagne,
//     selection: {
//         workbench: LIGHT_COLORS.sizzlingRed,
//         editor: {
//             default: LIGHT_COLORS.lightCoral,
//             regions: LIGHT_COLORS.babyPink,
//             line: LIGHT_COLORS.mistyRose,
//         },
//     },
//     sash: {
//         default: COLORS.WHITE,
//         hover: LIGHT_COLORS.babyPink,
//     },
//     scrollbar: {
//         default: LIGHT_COLORS.lightCoral + OPACITY['%60'],
//         active: LIGHT_COLORS.lightCoral + OPACITY['%20'],
//         inactive: LIGHT_COLORS.lightCoral + OPACITY['%80'],
//     },
//     shadow: COLORS.BLACK + OPACITY['%70'],
//     invalid: LIGHT_COLORS.sizzlingRed, // Invalid input background color.
//     warning: COLORS.WARNING, // Warning text color.
//     error: COLORS.ERROR, // Error text color.
// };

export = THEME_COLORS;
