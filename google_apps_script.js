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

/* eslint-disable no-unused-vars */
/* global ContentService, DriveApp, HtmlService, MailApp, SpreadsheetApp */

const TO_EMAIL = "devxsumit@gmail.com"; // Your email address where you want to receive notifications
const RESUME_FOLDER_ID = "1pjD7wiqXQmCnXiD-Yw1P8X2iRXCu3bHP";
const RESUME_FILE_NAMES = ["Sumit_Singh_CV.pdf", "sumit_cv.pdf", "Sumit_SDET.pdf"];
const FALLBACK_RESUME_URL = "https://singhsumit880.github.io/Sumit_Singh_CV.pdf";

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};

  if (params.action === "health") {
    return jsonResponse_({
      result: "success",
      message: "Portfolio Apps Script is running"
    });
  }

  if (params.action === "resume") {
    return openLatestResume_(params.mode);
  }

  if (params.action === "resume-jsonp") {
    return resumeJsonp_(params.callback);
  }

  if (params.action === "resume-json") {
    return jsonResponse_(getResumePayload_());
  }

  return jsonResponse_({
    result: "success",
    message: "Portfolio Apps Script is running"
  });
}

function openLatestResume_(mode) {
  const resume = getResumePayload_();
  const resumeUrl = mode === "embed" ? resume.embedUrl : resume.viewUrl;

  if (mode === "embed") {
    return renderResumeEmbed_(resumeUrl)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  const safeUrl = JSON.stringify(resumeUrl);
  const safeMetaUrl = escapeHtml_(resumeUrl);

  return HtmlService.createHtmlOutput(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="refresh" content="0; url=${safeMetaUrl}">
        <title>Opening resume...</title>
      </head>
      <body>
        <script>window.location.replace(${safeUrl});</script>
        <p>Opening resume...</p>
      </body>
    </html>
  `);
}

function resumeJsonp_(callback) {
  const callbackName = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(callback || "")
    ? callback
    : "callback";
  const payload = JSON.stringify(getResumePayload_());

  return ContentService.createTextOutput(`${callbackName}(${payload});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function getResumePayload_() {
  try {
    const resumeFile = getResumeFile_();

    if (resumeFile) {
      const fileId = resumeFile.getId();

      return {
        result: "success",
        source: "drive",
        fileName: resumeFile.getName(),
        fileId,
        embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
        viewUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`
      };
    }
  } catch (error) {
    return {
      result: "fallback",
      source: "local",
      error: error.toString(),
      embedUrl: FALLBACK_RESUME_URL,
      viewUrl: FALLBACK_RESUME_URL,
      downloadUrl: FALLBACK_RESUME_URL
    };
  }

  return {
    result: "fallback",
    source: "local",
    error: "No usable PDF found in the configured Drive folder",
    embedUrl: FALLBACK_RESUME_URL,
    viewUrl: FALLBACK_RESUME_URL,
    downloadUrl: FALLBACK_RESUME_URL
  };
}

function renderResumeEmbed_(resumeUrl) {
  const safeUrl = JSON.stringify(resumeUrl);
  const safeAttributeUrl = escapeHtml_(resumeUrl);

  return HtmlService.createHtmlOutput(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          html, body { margin: 0; width: 100%; height: 100%; background: #f5f1ea; overflow: hidden; }
          iframe { width: 100%; height: 100%; border: 0; background: #fff; }
          .fallback { position: fixed; inset: auto 16px 16px 16px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,.92); font: 14px Arial, sans-serif; color: #1a1a2e; box-shadow: 0 8px 28px rgba(26,26,46,.12); }
          .fallback a { color: #c1502e; font-weight: 700; }
        </style>
      </head>
      <body>
        <iframe src="${safeAttributeUrl}" title="Sumit Singh Resume"></iframe>
        <noscript><p class="fallback">Open resume: <a href="${safeAttributeUrl}" target="_blank" rel="noopener">Resume PDF</a></p></noscript>
        <script>
          window.__resumeUrl = ${safeUrl};
        </script>
      </body>
    </html>
  `);
}

function getResumeFile_() {
  const folder = DriveApp.getFolderById(RESUME_FOLDER_ID);
  return findPreferredResumeFile_(folder) || findSinglePdfResumeFile_(folder);
}

function findPreferredResumeFile_(folder) {
  for (const fileName of RESUME_FILE_NAMES) {
    const files = folder.getFilesByName(fileName);

    while (files.hasNext()) {
      const file = files.next();
      if (isUsablePdf_(file)) {
        return file;
      }
    }
  }

  return null;
}

function findSinglePdfResumeFile_(folder) {
  const files = folder.getFiles();
  let pdfFile = null;

  while (files.hasNext()) {
    const file = files.next();

    if (isUsablePdf_(file)) {
      if (pdfFile) {
        return getLatestPdfFile_(folder);
      }
      pdfFile = file;
    }
  }

  return pdfFile;
}

function getLatestPdfFile_(folder) {
  const files = folder.getFiles();
  let latestFile = null;

  while (files.hasNext()) {
    const file = files.next();

    if (isUsablePdf_(file) && (!latestFile || file.getLastUpdated() > latestFile.getLastUpdated())) {
      latestFile = file;
    }
  }

  return latestFile;
}

function isUsablePdf_(file) {
  return !file.isTrashed()
    && (file.getMimeType() === MimeType.PDF || file.getName().toLowerCase().endsWith(".pdf"));
}

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
      } catch {
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
function doOptions() {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
