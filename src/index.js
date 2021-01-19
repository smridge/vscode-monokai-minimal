const fs = require("fs").promises;
const getTheme = require("./theme");

const darkTheme = getTheme({
  style: "dark",
  name: "Monokai Minimal"
});

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
