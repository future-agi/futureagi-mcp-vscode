import * as vscode from 'vscode';

const MCP_SERVER_URL = 'https://api.futureagi.com/mcp';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.lm.registerMcpServerDefinitionProvider('futureagi', {
    provideMcpServerDefinitions: async () => [
      new vscode.McpHttpServerDefinition({
        label: 'Future AGI',
        uri: vscode.Uri.parse(MCP_SERVER_URL),
        version: '1.0.0',
      }),
    ],
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
