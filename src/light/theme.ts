import setThemeUI = require('../template');
import colors = require('./colors');

const themeUI = setThemeUI(colors);

const THEME = {
    name: 'JIB Light',
    type: 'light',
    colors: themeUI,
    tokenColors: [],
};

export = JSON.stringify(THEME);
