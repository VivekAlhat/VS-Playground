// @ts-ignore

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
  const vscode = acquireVsCodeApi();

  const oldState = vscode.getState() || { prompt: "" };

  /** @type string */
  let prompt = oldState.prompt;

  updateViewPrompt(prompt);

  document.querySelector("#gpt-input").addEventListener("change", (e) => {
    updateViewPrompt(e.target.value);
  });

  // Handle messages sent from the extension to the webview
  window.addEventListener("message", (event) => {
    const message = event.data; // The json data that the extension sent
  });

  /**
   * @param string prompt
   */
  function updateViewPrompt(prompt) {
    const p = document.querySelector("#user-input");
    p.textContent = prompt;
  }

  // Update the saved state
  vscode.setState({ prompt: prompt });
})();
