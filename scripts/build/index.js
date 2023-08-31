const path = require("path");
const globby = require("globby");
const fs = require("fs");
const fse = require("node-fs-extra");
const babelCore = require("@babel/core");

const transformDir = (src, dest, options) => {
  src = path.resolve(src);
  dest = path.resolve(dest);

  function t(file) {
    return transform(file, src, dest, {
      filename: file,
      ...options
    });
  }

  return globby
    .sync(["**/*.js","**/*.jsx"], {
      cwd: src
    })
    .map(file => {
      return t(file);
    });
};

  const babelOptions = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  };

function transform(file, src, dest, opts) {
  const filepath = path.join(src, file);
  const content = fs.readFileSync(filepath);
  const destpath = path.join(dest, file);

  const { code } = babelCore.transform(content.toString(), babelOptions);

  return fse.outputFileSync(destpath, code);
}

const buildJustOnePackage = packagePath => {
  console.log(`Building ${packagePath}...`);
  return new Promise((resolve, reject) => {
    transformDir(packagePath, path.resolve(packagePath, "../build"));
    resolve(packagePath);
  });
};

const buildPackages = (currentProcess = process.cwd(), srcFolder = process.argv[2]) => {
  return new Promise((resolve, reject) => {
    const packages = path.resolve(currentProcess, srcFolder);

    const packagePaths = fs
      .readdirSync(packages)
      .map(dir => {
        return path.resolve(packages, dir);
      })
      .filter(src => {
        return fs.lstatSync(src).isDirectory();
      });

    const packageSrcPaths = packagePaths.map(packagePath => {
      return path.resolve(packagePath, "src");
    });

    packageSrcPaths.map(src => {
      return buildJustOnePackage(src);
    });

    resolve(`Finished ${srcFolder}`);
  });
};

buildPackages().then(data => console.log(data));

module.exports = {
  buildJustOnePackage,
  buildPackages,
};
