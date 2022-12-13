const fs = require("fs-extra");
const concat = require("concat");

(async () => {
  try {
    const files = [
      "./dist/runtime.js",
      "./dist/polyfills.js",
      "./dist/main.js",
    ];
    const exist = fs.existsSync("elements");
    if (exist) {
      fs.removeSync("elements");
    }
    await fs.ensureDir("elements");
    await concat(
      files,
      "../angularjs-webpack-boilerplate/public/elements/elements.js"
    );
    await concat(files, "elements/elements.js");
    await fs.copyFile(
      "./dist/styles.css",
      "../angularjs-webpack-boilerplate/public/form-builder-styles.css"
    );

    await fs.copy("./dist/main.js.map", "../angularjs-webpack-boilerplate/public/elements/main.js.map");
    await fs.copy("./dist/polyfills.js.map", "../angularjs-webpack-boilerplate/public/elements/polyfills.js.map");
    await fs.copy("./dist/runtime.js.map", "../angularjs-webpack-boilerplate/public/elements/runtime.js.map");

  } catch (error) {
    console.error(error);
  }
})();
