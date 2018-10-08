// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
// Electron Dependencies
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Global reference to window object
let win;

function createWindow() {
    // Create the Browser Window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/assets/imgs/icon.png'});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'assets/index.html'),
        protocol:'file:',
        slashes:true
    }));

    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Run createWindow function
app.on('ready', createWindow);

// Quite when all windows are closed
app.on('window-all-closed', () => {
    // Check if the app is running on Mac
    if(process.platform !== 'darwin') {
        app.quit();
    }
})