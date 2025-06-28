import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // se usar preload
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Carregue o HTML gerado pelo Vite/React
  win.loadURL("http://localhost:5173"); // durante o dev
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("ping", () => {
  return "pong";
});
