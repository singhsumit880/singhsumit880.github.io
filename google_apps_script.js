/**
 * Google Apps Script to receive POST requests from the Portfolio Contact Form
 * 1. Go to sheets.google.com and create a new sheet.
 * 2. Name the first three columns: Name, Email, Message
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code, replacing everything.
 * 5. Replace "YOUR_EMAIL@gmail.com" with your actual email address.
 * 6. Click Deploy > New Deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Copy the Web app URL and provide it to the AI.
 */

const TO_EMAIL = "sumitsingh98896@gmail.com"; // Your email address where you want to receive notifications

function doPost(e) {
  try {
    // 1. Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // 2. Parse the incoming data robustly
    let body = {};
    
    // Try to get data from postData contents (JSON or raw string)
    if (e.postData && e.postData.contents) {
      try {
        body = JSON.parse(e.postData.contents);
      } catch (f) {
        // If not valid JSON, it might be raw or text/plain
      }
    }
    
    // Extract variables, falling back to e.parameter if body is empty or missing fields
    // e.parameter captures URL-encoded data automatically
    const name = body.name || e.parameter.name || "Unknown";
    const email = body.email || e.parameter.email || "Unknown";
    const message = body.message || e.parameter.message || "Unknown";
    const timestamp = new Date();

    // 3. Append to Google Sheet
    sheet.appendRow([timestamp, name, email, message]);

    // 4. Send Email Notification
    const subject = `New Portfolio Contact: ${name}`;
    const emailBody = `
      You have received a new message from your portfolio contact form!
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
      
      --
      This email was sent from your Google Apps Script.
    `;

    MailApp.sendEmail(TO_EMAIL, subject, emailBody);

    // 5. Return success response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "message": "Row added and email sent" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error if something fails
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
