
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\shiva\\Desktop\\trd projects\\modball\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\shiva\\Desktop\\trd projects\\modball\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\shiva\\Desktop\\trd projects\\modball\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\shiva\\Desktop\\trd projects\\modball\\src\\pages\\page-2.js"))
}

