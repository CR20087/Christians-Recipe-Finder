const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
require('@electron/remote/main').initialize() 

function createWindow() {
    const win = new BrowserWindow({
        icon: __dirname + "/Christians_Recipe_finder_PNG_144x144.png",
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: false,
        }
    })

    win.maximize()

    win.loadURL(
        isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`
        )
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {

if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
