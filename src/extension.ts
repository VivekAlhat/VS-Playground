import * as vscode from "vscode";
import SidebarProvider from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vs-playground.helloWorld",
    () => {
      const selection = vscode.window.activeTextEditor?.selection;
      if (!selection) {
        return;
      }
      const selectedText =
        vscode.window.activeTextEditor?.document.getText(selection);
      vscode.window.showInformationMessage(selectedText as string);
    }
  );

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  const sidebarDisposable = vscode.window.registerWebviewViewProvider(
    "playground-sidebar",
    sidebarProvider
  );

  context.subscriptions.push(disposable, sidebarDisposable);
}

export function deactivate() {}
