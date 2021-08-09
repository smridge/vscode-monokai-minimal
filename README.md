# Monokai Minimal Syntax Theme for Visual Studio Code
[![Published Version to VS Code](https://img.shields.io/visual-studio-marketplace/v/SarahRidge.vscode-monokai-minimal)](https://marketplace.visualstudio.com/items?itemName=SarahRidge.vscode-monokai-minimal)
[![VS Code Downloads](https://img.shields.io/visual-studio-marketplace/d/SarahRidge.vscode-monokai-minimal)](https://marketplace.visualstudio.com/items?itemName=SarahRidge.vscode-monokai-minimal)
[![VS Code Installs](https://img.shields.io/visual-studio-marketplace/i/SarahRidge.vscode-monokai-minimal)](https://marketplace.visualstudio.com/items?itemName=SarahRidge.vscode-monokai-minimal)
[![GitHub License](https://img.shields.io/github/license/smridge/vscode-monokai-minimal.svg)](https://github.com/smridge/vscode-monokai-minimal/blob/master/LICENSE)

## Install
1. Run: `code --install-extension SarahRidge.vscode-monokai-minimal`
    - Alternatively, extension can be installed via  [marketplace](https://marketplace.visualstudio.com/items?itemName=SarahRidge.vscode-monokai-minimal).
2. In VS Code, set theme:
    - Press <kbd>command</kbd> <kbd>K</kbd> <kbd>T</kbd>
    - Select **Monokai Minimal**

## Colors
| Name          | Code      | Sample
|---------------|-----------|------------------------------------------------------------
| Black Dark    | `#121212` |![#121212](https://via.placeholder.com/100x40/121212/000000?text=+)
| Black Medium  | `#1a1a1a` |![#1a1a1a](https://via.placeholder.com/100x40/1a1a1a/000000?text=+)
| Blue          | `#62d8f1` |![#62d8f1](https://via.placeholder.com/100x40/62d8f1/000000?text=+)
| Cyan          | `#62f1a2` |![#62f1a2](https://via.placeholder.com/100x40/62f1a2/000000?text=+)
| Green         | `#a4e400` |![#a4e400](https://via.placeholder.com/100x40/a4e400/000000?text=+)
| Gray          | `#959da5` |![#959da5](https://via.placeholder.com/100x40/959da5/000000?text=+)
| Gray Blue     | `#424d66` |![#424d66](https://via.placeholder.com/100x40/424d66/000000?text=+)
| Magenta       | `#f92672` |![#f92672](https://via.placeholder.com/100x40/f92672/000000?text=+)
| Orange Dark   | `#ff9700` |![#ff9700](https://via.placeholder.com/100x40/ff9700/000000?text=+)
| Orange Medium | `#ffb140` |![#ffb140](https://via.placeholder.com/100x40/ffb140/000000?text=+)
| Orange Light  | `#ffb957` |![#ffb957](https://via.placeholder.com/100x40/ffb957/000000?text=+)
| Purple        | `#af87ff` |![#af87ff](https://via.placeholder.com/100x40/af87ff/000000?text=+)
| White         | `#ebebe4` |![#ebebe4](https://via.placeholder.com/100x40/ebebe4/000000?text=+)
| White Light   | `#b3b3b3` |![#b3b3b3](https://via.placeholder.com/100x40/b3b3b3/000000?text=+)
| Yellow        | `#ffff87` |![#ffff87](https://via.placeholder.com/100x40/ffff87/111111?text=+)
| Yellow Dark   | `#ffe100` |![#ffe100](https://via.placeholder.com/100x40/ffe100/111111?text=+)

## Contribute
- `git clone git@github.com:smridge/vscode-monokai-minimal.git`
- Make changes to the `/src/theme.js` file.
    - **UI**: For changes to the "outer UI", like (status bar, file navigation etc.), see [Theme Color](https://code.visualstudio.com/api/references/theme-color).
    - **Syntax**: For changes to the "code highlighting", examine syntax scopes by invoking [Scope Inspector](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette
        - <kbd>command</kbd> <kbd>shift</kbd> <kbd>P</kbd>
        - Type and select: `Developer: Inspect Editor Tokens and Scopes`
- Press <kbd>F5</kbd> to open a new window with extension loaded.
    - This will run build script and auto generate new `/theme/dark.json` file.

## Publish (internal)
> Note: Publishing a new version of this theme is only meant for maintainers.
- `vsce package`
- `vsce publish`
