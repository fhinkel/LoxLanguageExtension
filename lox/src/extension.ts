import * as vscode from 'vscode';
import { LoxDocumentFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "lox-language" is now active!');
	context.subscriptions.push(
		vscode.languages.registerDocumentFormattingEditProvider(
			{ scheme: 'file', language: 'lox' },
			new LoxDocumentFormatter()
		)
	);
}

export function deactivate() {}