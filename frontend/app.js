const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow
const indexPath = path.join(__dirname, "dist", "frontend", "browser", "index.html")

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(
    url.format({
      pathname: indexPath,
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})