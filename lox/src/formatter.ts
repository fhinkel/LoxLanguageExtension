import * as vscode from 'vscode';

export class LoxDocumentFormatter implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        options: vscode.FormattingOptions,
        token: vscode.CancellationToken
    ): vscode.TextEdit[] {
        const edits: vscode.TextEdit[] = [];
        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
        );

        console.log('Formatting document');
        const formattedText = this.formatText(document.getText());
        edits.push(vscode.TextEdit.replace(fullRange, formattedText));

        return edits;
    }

    private formatText(text: string): string {
        // Implement your formatting logic here
        // For simplicity, we'll just trim trailing whitespace in this example
        return text.split('\n').map(line => line.trimEnd()).join('\n');
    }
}