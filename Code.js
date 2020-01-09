/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is usually used to add custom
 * menu items to the spreadsheet.
 */
function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('custom menu')
        .addItem('fill with name', 'getName')
        .addToUi();
}

/**
 * get some name from an api and put them in the spreadsheet
 */
function getName() {
    Logger.log("the function got called");
}
