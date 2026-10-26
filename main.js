const { app, BrowserWindow, shell, Menu } = require('electron');
function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1100, height: 800, icon: __dirname + '/icon.ico', title: 'SLP Keyboard Trainer' });
  w.loadFile('index.html');
  // open email links (mailto:) in the computer's email program
  w.webContents.on('will-navigate', (e, url) => { if (url.startsWith('mailto:')) { e.preventDefault(); shell.openExternal(url); } });
  w.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith('mailto:')) shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
