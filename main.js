'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1000, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools(true);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  
});