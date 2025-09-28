# Chrome Extension Quick Guide

## 1. Create Project Folder
Make a folder for your extension, e.g., `my-extension`.

Example structure:

my-extension/
├─ manifest.json
├─ popup.html
├─ popup.js
├─ popup.css (optional)
├─ bg.png (optional)

---

## 2. Create `manifest.json`
This JSON file describes the features and configuration of the extension.

Example:

```json
{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0",
  "description": "Simple Chrome extension example",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_popup": "popup.html"
  }
}

## 3. Add UI (optional
Create `popup.html` for the popup interface when the extension icon is clicked.

## 4. Add Functionality
`popup.js` contains the logic.

## 5. Load Extension in Chrome
Open chrome:`//extensions/`.

Enable Developer mode (top right).

Click Load unpacked and select your project folder.

The extension icon appears next to the address bar.


## 6. Test and Debug
Click the icon to test popup buttons.

Open DevTools for debugging (Right-click → Inspect).

Do not test on chrome:// pages; use normal websites like `https://www.google.com`
Reload the extension after changes.