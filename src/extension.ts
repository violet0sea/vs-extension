// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const axios = require('axios');
const schedule = require('node-schedule');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	vscode.commands.executeCommand('du.schedule').then(() => {
		vscode.window.showInformationMessage('定时任务启动.');
	});

	const scheduleSub = vscode.commands.registerCommand('du.schedule', () => {
		schedule.scheduleJob('0 25 10 * * 1-5', function() {
			vscode.window.showInformationMessage('更新日报');
		});
		schedule.scheduleJob('0 40 11 * * 1-5', function() {
			vscode.window.showInformationMessage('吃饭');
		});
		schedule.scheduleJob('0 22 16 * * 1-5', function() {
			vscode.window.showInformationMessage('更新ones。。。');
		});
		schedule.scheduleJob('0 0 17 * * 1-5', function() {
			vscode.window.showInformationMessage('更新ones');
		});
		schedule.scheduleJob('0 0 17 * * 5', function() {
			vscode.window.showInformationMessage('更新周报');
		});
		schedule.scheduleJob('0 30 17 * * 1-5', function() {
			vscode.window.showInformationMessage('吃饭');
		});
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const testSub = vscode.commands.registerCommand('du.run', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello VS Code from dudulu.');
	});
	const timeSub = vscode.commands.registerCommand('du.showTime', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const time = new Date();
		vscode.window.showInformationMessage(time.toLocaleString());
	});
	const weatherSub = vscode.commands.registerCommand('du.showWeather', () => {
		const opts = {
			ignoreFocusOut: true,
			password: false,
			prompt: "Please type your city (eg.beijing or 北京)",
		};
		vscode.window.showInputBox(opts).then((value) => {
			if (value === undefined || value.trim() === '') {
				vscode.window.showInformationMessage('Please type your city.');
			} else {
				const cityName = value.trim();

			}
		})
		const time = new Date();
		// vscode.window.showInformationMessage(time.toLocaleString());
	});

	context.subscriptions.push(testSub, timeSub);
}

// this method is called when your extension is deactivated
export function deactivate() {}
