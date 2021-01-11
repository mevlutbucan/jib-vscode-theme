import fs = require('fs');
import path = require('path');
import lightTheme = require('./light/theme');
// import darkTheme = require('./dark/theme');

(function buildLightTheme() {
    const lightThemePath = path.resolve('themes/jib-light.json');
    fs.writeFileSync(lightThemePath, lightTheme);
})();

// (function buildDarkTheme() {
//     const darkThemePath = path.resolve('themes/jib-dark.json');
//     fs.writeFileSync(darkThemePath, darkTheme);
// })();
