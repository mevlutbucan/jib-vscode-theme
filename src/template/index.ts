// import themeContrast = require('./jib-contrast');
import themeBase = require('./jib-base');
import themeWindowBorder = require('./jib-windowBorder');
import themeText = require('./jib-text');
import themeButton = require('./jib-button');
import themeDropdown = require('./jib-dropdown');
import themeInput = require('./jib-input');
import themeScrollbar = require('./jib-scrollbar');
import themeBadge = require('./jib-badge');
import themeProgressBar = require('./jib-progressBar');
import themeList = require('./jib-list');
import themeActivityBar = require('./jib-activityBar');
import themeSideBar = require('./jib-sideBar');
// // import themeMinimap = require("./jib-minimap");
import themeEditorGroup = require('./jib-editorGroup');
import themeEditor = require('./jib-editor');

import themePanel = require('./jib-panel');
import themePreviewImage = require('./jib-previewImage');
import themeStatusBar = require('./jib-statusBar');
import themeTitleBar = require('./jib-titleBar');
import themeMenuBar = require('./jib-menuBar');
import themeNotification = require('./jib-notification');
import themeExtension = require('./jib-extension');
import themeQuickPicker = require('./jib-quickPicker');
// ...terminal,
// ...debug,
import themeWelcome = require('./jib-welcome');
// ...scm,
// ...git,
// ...settings,
// ...breadcrumbs,
// ...snippets,
// ...symbolIcon,
// ...debugIcon,
// ...notebook,
// ...chart

export = (UI: UIType): { [key: string]: string | undefined } => {
    // const contrast = themeContrast(UI);
    const base = themeBase(UI);
    const windowBorder = themeWindowBorder(UI);
    const text = themeText(UI);
    const button = themeButton(UI);
    const dropdown = themeDropdown(UI);
    const input = themeInput(UI);
    const scrollbar = themeScrollbar(UI);
    const badge = themeBadge(UI);
    const progressBar = themeProgressBar(UI);
    const list = themeList(UI);
    const activityBar = themeActivityBar(UI);
    const sideBar = themeSideBar(UI);
    // // const minimap = themeMinimap(UI);
    const editorGroup = themeEditorGroup(UI);
    const editor = themeEditor(UI);

    const panel = themePanel(UI);
    const previewImage = themePreviewImage(UI);
    const statusBar = themeStatusBar(UI);
    const titleBar = themeTitleBar(UI);
    const menuBar = themeMenuBar(UI);
    const notification = themeNotification(UI);
    const extension = themeExtension(UI);
    const quickPicker = themeQuickPicker(UI);
    // ...terminal,
    // ...debug,
    const welcome = themeWelcome(UI);
    // ...scm,
    // ...git,
    // ...settings,
    // ...breadcrumbs,
    // ...snippets,
    // ...symbolIcon,
    // ...debugIcon,
    // ...notebook,
    // ...chart

    return {
        // ...contrast,
        ...base,
        ...windowBorder,
        ...text,
        ...button,
        ...dropdown,
        ...input,
        ...scrollbar,
        ...badge,
        ...progressBar,
        ...list,
        ...activityBar,
        ...sideBar,
        // // // ...minimap,
        ...editorGroup,
        ...editor,

        ...panel,
        ...previewImage,
        ...statusBar,
        ...titleBar,
        ...menuBar,
        ...notification,
        ...extension,
        ...quickPicker,
        // ...terminal,
        // ...debug,
        ...welcome,
        // ...scm,
        // ...git,
        // ...settings,
        // ...breadcrumbs,
        // ...snippets,
        // ...symbolIcon,
        // ...debugIcon,
        // ...notebook,
        // ...chart
    };
};
