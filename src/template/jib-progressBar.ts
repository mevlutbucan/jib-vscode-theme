export = (UI: UIType): { [key: string]: string | undefined } => ({
    'progressBar.background': UI.background.workbench.additional?.progress?.default, // Background color of the progress bar shown for long running operations.
});
