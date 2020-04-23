function doGet() {
  var html = HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Batch Processing & Validation Tool')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return html;
}

/* function LogErrors()
 * To catch client-side errors in the browser,
 * there must be a try/catch in the HTML file
 * that calls the function in the catch clause:
 *   google.script.run.logErrors(e.toString());
 */

function logErrors(e) {
  var errorSheet = SpreadsheetApp.openById('13YRK2HGuxNyiMg5C_6wi-6dEkl9dPiXXHgMjTx2dI9I')
    .getSheetByName('appErrors');
  var cell = errorSheet.getRange('A1').offset(errorSheet.getLastRow(), 0)
  cell.setValue(new Date() + " : " + e);
}

/* To catch server-side errors, wrap the code
 * in a try/catch block like this:
 *   { try
 *       ...
 *   } catch(error) {
 *       var errorSheet = SpreadsheetApp.openById('<Your Spreadsheet ID>')
 *         .getSheetByName('<Name of error sheet>');
 *       var cell = errorSheet.getRange('A1').offset(errorSheet.getLastRow(), 0);
 *       cell.setValue(new Date() + " function doGet: " + error);
 *   }
 */
 
 