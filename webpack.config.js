var path = require("path");
module.exports = {
  mode: "production",
  entry: [path.join("C:/Users/user1/Documents/GitHub/translateNtextract2023", "browser.js")],
  output: {
    path: "C:/Users/user1/Documents/GitHub/translateNtextract2023/bundle",
    filename: 'main.js',
    library:"myLibrary"
  },
  resolve:{
    fallback: { path: require.resolve("path-browserify")}
  }
};