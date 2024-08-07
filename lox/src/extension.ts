import * as vscode from 'vscode';
import { LoxDocumentFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerDocumentFormattingEditProvider(
			{ scheme: 'file', language: 'lox' },
			new LoxDocumentFormatter()
		)
	);
}

export function deactivate() {}