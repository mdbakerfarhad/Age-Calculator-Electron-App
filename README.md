
# 🧮 AgeCalcPro - Age Calculator (Electron App)

**AgeCalcPro** is a simple yet powerful desktop application built using [Electron](https://www.electronjs.org/) that allows users to calculate the age difference between two dates with full detail.

---

## 🚀 Features

- Select Date of Birth and comparison date
- Clean, modern, responsive UI
- Dark mode toggle
- Built using HTML, CSS, JavaScript, and Electron
- Cross-platform support (Windows, macOS, Linux)

---

## 🖼 Preview

![App Screenshot](./preview.png) <!-- Replace with your screenshot file name -->

---

## 📁 Project Structure

```

AgeCalcPro/
│
├── index.html          # Main UI
├── main.js             # Electron Main Process
├── preload.js          # Preload script (optional)
├── icon.ico            # App & taskbar icon
├── style.css           # Custom styling
├── renderer.js         # Frontend logic
├── package.json        # Project metadata & dependencies

````

---

## 🛠 Installation & Run (Dev Mode)

> Prerequisites: [Node.js](https://nodejs.org/) must be installed.

```bash
# Install dependencies
npm install

# Run the app
npm start
````

---

## 🧪 Build for Production (Windows)

```bash
npx electron-packager . AgeCalcPro --platform=win32 --arch=x64 --icon=icon.ico
```

> Output: `AgeCalcPro-win32-x64/` directory with the packaged app.

---

## 🔧 Customization

### 🖼 Change App Icon

* Replace `icon.ico` in the root folder with your own `.ico` file.
* Update the `icon` path in `main.js`:

  ```js
  icon: path.join(__dirname, 'icon.ico')
  ```

### 📝 Change App Title

* Update `title` in `main.js`:

  ```js
  title: "AgeCalcPro"
  ```
* Update `<title>` in `index.html`.

---

## 👨‍💻 Author

**Md. Baker**
🔗 [LinkedIn](#) | 🌐 [Portfolio](#)

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

```

---


