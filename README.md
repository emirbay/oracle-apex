# Oracle APEX Scripts

A collection of reusable JavaScript utilities and fixes for Oracle APEX applications.

## Available scripts

| Script | Description | Target APEX versions |
|---|---|---|
| [apex-popup-lov-fix.js](apex-popup-lov-fix.js) | Fixes Popup LOV lists not appearing after reopening a modal dialog. Removes leftover LOV dialogs from the DOM when the modal is closed or cancelled. | 20.2, 24 |

## Usage

1. Download the JavaScript file you want to use.
2. In your APEX application, open **Shared Components → Static Application Files** and upload it.
3. Copy the uploaded file's reference.
4. Open **Shared Components → User Interface Attributes → JavaScript → File URLs**.
5. Paste the reference on a new line.
6. Apply changes and reload the application.

Example references for `apex-popup-lov-fix.js`:

- APEX 20.2: `#APP_IMAGES#apex-popup-lov-fix.js`
- APEX 24: `#APP_FILES#apex-popup-lov-fix.js`

Include only the scripts your application needs.
