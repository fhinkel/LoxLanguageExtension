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
        let indentLevel = 0;
        const indentSize = 4; // You can adjust the indent size as needed

        return text.split('\n').map(line => {
            let trimmedLine = line.trim();

            if (trimmedLine.endsWith(')')) {
                indentLevel--;
            }

            const indentedLine = ' '.repeat(indentLevel * indentSize) + trimmedLine;

            if (trimmedLine.endsWith('(')) {
                indentLevel++;
            }

            return indentedLine;
        }).join('\n');
    }
}
