#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const {
  publishedComponents,
  publishedTSComponents,
  publishedStorybookComponents
} = require("../webpack/published-components");

function createFoldersIfNotExist() {
  // if dist does not exist let's create it
  const distDir = path.join(__dirname, `../dist/`);

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // if dist/icons does not exist let's create it
  const iconsDir = path.join(distDir, `/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  // if dist/storybook does not exist let's create it
  const storybookDir = path.join(distDir, `/storybook`);
  if (!fs.existsSync(storybookDir)) {
    fs.mkdirSync(storybookDir);
  }
}

function buildComponentExport(name, path) {
  return `export { default as ${name} } from "${path}";`;
}

function writeToFile(content, fileName) {
  fs.writeFileSync(path.join(__dirname, fileName), content, "utf8");
}

function convertExportsToFile(exportsArray, fileName) {
  const content = exportsArray.join("\n");
  writeToFile(content, `../dist/${fileName}`);
}

// eslint-disable-next-line no-unused-vars
function buildComponentsTypesIndexFile() {
  const exports = Object.entries(publishedTSComponents).map(([name, path]) =>
    buildComponentExport(name, `./types/${path}`)
  );
  convertExportsToFile(exports, "types.d.ts");
}

module.exports = {
  createFoldersIfNotExist,
  buildComponentsTypesIndexFile
};
