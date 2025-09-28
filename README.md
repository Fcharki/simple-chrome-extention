# Chrome Extension Quick Guide

## 1. Create Project Folder
Make a folder for your extension, e.g., `my-extension`.

Example structure:
```
my-extension/
├── manifest.json
├── popup.html
├── popup.js
├── popup.css (optional)
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── content.js (optional)
```

---

## 2. Create `manifest.json`
This JSON file describes the features and configuration of the extension.

Example:
```json
{
  "name": "Change BG Extensions",
 "description": "Change background color with one click",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "popup.html",
    "default_icon": "bg.png"
  }
  ,
  "permissions": ["activeTab", "scripting"]
}
```

### Common Permissions:
- `"activeTab"` - Access to the currently active tab
- `"storage"` - Use Chrome's storage API
- `"tabs"` - Access tab information
- `"scripting"` - Inject scripts into pages

---

## 3. Add UI (optional)
Create `popup.html` for the popup interface when the extension icon is clicked.

---

## 4. Add Functionality
`popup.js` contains the logic for your extension.

---

## 5. Load Extension in Chrome
1. Open `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked** and select your project folder
4. The extension icon appears in the browser toolbar

---

## 6. Test and Debug
- Click the extension icon to test popup functionality
- Open DevTools for debugging (Right-click on popup → **Inspect**)
- **Important:** Do not test on `chrome://` pages; use normal websites like `https://www.google.com`
- Reload the extension after making changes (click refresh icon on the extension card)