const colors = {
  "black_dark": "#121212",
  "black_medium": "#1a1a1a",
  "blue": "#62d8f1",
  "cyan": "#62f1a2",
  "green": "#a4e400",
  "gray": "#959da5",
  "gray_blue": "#424d66",
  "magenta": "#f92672",
  "orange_dark": "#ff9700",
  "orange_medium": "#ffb140",
  "orange_light": "#ffb957",
  "purple": "#af87ff",
  "white": "#ebebe4",
  "white_light": "#b3b3b3",
  "yellow": "#ffff87",
  "yellow_dark": "#ffe100"
}

function getTheme({ style, name }) {
  return {
    name: name,
    type: style,
    colors: {
      focusBorder: colors.blue,
      foreground: colors.purple,

      "activityBar.background": colors.black_dark,
      "activityBar.border": colors.gray_blue,
      "activityBar.foreground": colors.magenta,
  
      "breadcrumb.foreground": colors.orange_medium,
      "breadcrumb.focusForeground": colors.magenta,
  
      "diffEditor.insertedTextBackground": "#28a74530",
      "diffEditor.removedTextBackground": "#d73a4930",
      "diffEditor.diagonalFill": "#d73a4930",
  
      "editorCursor.foreground": colors.magenta,
  
      "editor.background": colors.black_medium,
      "editor.findMatchBackground": "#641313",
      "editor.findMatchHighlightBackground": "#5e2c3e",
      "editor.selectionBackground": "#590f29",
      "editor.selectionHighlightBackground": "#463763",
  
      "editorGroupHeader.tabsBackground": colors.black_dark,
  
      "gitDecoration.addedResourceForeground": colors.green,
      "gitDecoration.modifiedResourceForeground": colors.blue,
      "gitDecoration.deletedResourceForeground": colors.magenta,
      "gitDecoration.untrackedResourceForeground": colors.green,
      "gitDecoration.ignoredResourceForeground": colors.gray,
      "gitDecoration.conflictingResourceForeground": colors.orange_dark,
      "gitDecoration.submoduleResourceForeground": colors.gray,
  
      "input.background": colors.black_medium,
      "input.border": colors.blue,
      "input.foreground": colors.green,
      "inputOption.activeBorder": colors.magenta,
  
      "list.activeSelectionBackground": "#323334",
      "list.activeSelectionForeground": colors.purple,
      "list.highlightForeground": colors.magenta,
      "list.hoverBackground": colors.gray_blue,
      "list.hoverForeground": colors.green,
      "list.inactiveSelectionBackground": colors.black_medium,
      "list.inactiveSelectionForeground": colors.purple,
  
      "scrollbarSlider.background": colors.gray_blue,
  
      "sideBar.background": colors.black_dark,
      "sideBar.border": colors.gray_blue,
      "sideBar.foreground": colors.purple,
      "sideBarSectionHeader.background": "#262626",
      "sideBarSectionHeader.border": colors.gray_blue,
      "sideBarSectionHeader.foreground": colors.gray,
      "sideBarTitle.foreground": colors.magenta,
  
      "statusBar.foreground": colors.gray,
      "statusBar.background": colors.black_dark,
      "statusBar.border": colors.gray_blue,
      "statusBarItem.hoverBackground": colors.gray_blue,
  
      "tab.activeBackground": colors.black_medium,
      "tab.activeForeground": colors.purple,
      "tab.inactiveBackground": colors.black_dark,
  
      "terminal.background": colors.black_medium,
      "terminal.foreground": colors.purple,
      "terminalCursor.background": colors.orange_dark,
      "terminalCursor.foreground": colors.orange_dark,
  
      "titleBar.activeBackground": colors.black_dark
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        settings: {
          foreground: "#5f5f5f"
        },
      },


      {
        scope: "constant",
        settings: {
          foreground: colors.purple
        },
      },


      {
        scope: "entity",
        settings: {
          foreground: colors.blue
        },
      },
      {
        scope: [
          "entity.name.function",
          "entity.other.attribute-name"
        ],
        settings: {
          foreground: colors.green
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: colors.magenta,
        },
      },
      {
        scope: "entity.name.section",
        settings: {
          fontStyle: "bold"
        },
      },
      {
        scope: [
          "entity.name.type",
          "entity.other.ainherited-class"
        ],
        settings: {
          fontStyle: "italic"
        },
      },


      {
        scope: "invalid",
        settings: {
          foreground: "#5f5f5f",
          fontStyle: "italic"
        },
      },


      {
        scope: "keyword",
        settings: {
          foreground: colors.magenta
        },
      },


      {
        scope: "markup",
        settings: {
          foreground: colors.white
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold"
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic"
        },
      },
      {
        scope: [
          "markup.fenced_code.block",
          "markup.inline.raw.string"
        ],
        settings: {
          foreground: colors.white_light
        },
      },
      {
        scope: "markup.underline.link",
        settings: {
          foreground: colors.blue
        },
      },
      {
        scope: "fenced_code.block.language.markdown",
        settings: {
          foreground: colors.purple
        },
      },
      {
        scope: [
          "meta",
          "meta.function"
        ],
        settings: {
          foreground: colors.green
        },
      },
      {
        scope: [
          "meta.class",
          "meta.line"
        ],
        settings: {
          foreground: colors.blue
        },
      },
      {
        scope: "meta.objectliteral",
        settings: {
          foreground: colors.magenta
        },
      },
      {
        scope: "meta.object-literal.key",
        settings: {
          foreground: colors.purple
        },
      },
      {
        scope: "meta.paragraph",
        settings: {
          foreground: colors.white
        },
      },


      {
        scope: "storage",
        settings: {
          foreground: colors.magenta
        },
      },


      {
        scope: "string",
        settings: {
          foreground: colors.yellow
        },
      },


      {
        scope: [
          "support.function",
          "support.variable",
          "support.other"
        ],
        settings: {
          foreground: colors.cyan,
          fontStyle: "italic"
        },
      },
      {
        scope: [
          "support.class",
          "support.type",
          "support.function.kernel"
        ],
        settings: {
          foreground: colors.blue,
          fontStyle: "italic"
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: colors.purple,
          fontStyle: "italic"
        },
      },


      {
        scope: "variable",
        settings: {
          foreground: colors.orange_light
        },
      },
      {
        scope: [
          "variable.parameter",
          "variable.language"
        ],
        settings: {
          foreground: colors.orange_dark,
          fontStyle: "italic"
        },
      },
      {
        scope: "variable.other.constant",
        settings: {
          foreground: colors.blue
        },
      },
      {
        scope: "variable.other.readwrite.instance",
        settings: {
          foreground: colors.orange_medium
        },
      },


      {
        scope: "punctuation",
        settings: {
          foreground: colors.yellow
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: colors.yellow_dark
        },
      },
      {
        scope: [
          "punctuation.definition.constant.hashkey",
          "punctuation.definition.heading",
          "punctuation.definition.keyword",
          "punctuation.definition.list",
          "punctuation.definition.raw",
          "punctuation.definition.markdown",
          "punctuation.section.embedded",
          "punctuation.separator.dictionary.key-value",
          "punctuation.separator.key-value",
          "punctuation.separator.namespace"
        ],
        settings: {
          foreground: colors.magenta
        },
      },
      {
        scope: "punctuation",
        settings: {
          fontStyle: "bold"
        },
      },
      {
        scope: [
          "punctuation.definition.variable",
          "punctuation.definition.bold",
          "punctuation.definition.italic"
        ],
        settings: {
          foreground: colors.orange_dark,
          fontStyle: "italic"
        },
      },
      {
        scope: [
          "punctuation.definition.constant",
          "punctuation.separator.method",
          "punctuation.accessor"
        ],
        settings: {
          foreground: colors.purple,
          fontStyle: "bold"
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: colors.white_light
        },
      },
      {
        scope: "punctuation.separator.inheritance",
        settings: {
          foreground: colors.green
        },
      },
      {
        scope: [
          "punctuation.support",
          "punctuation.definition.entity",
          "punctuation.definition.metadata"
        ],
        settings: {
          foreground: colors.blue
        },
      },
    ],
  };
}

module.exports = getTheme;
