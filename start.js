#!/usr/bin/env node


/**
 * Copyright (c) 2019, Ramki A.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const process = require('process');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const color = {
    FgWhite: "\x1b[37m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgCyan: "\x1b[36m"
}

const packageJson = require('../package.json');

const folderName = process.argv[2] || packageJson.name;

const spinners = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

let index = 0;

function intervalFunc() {
    index++;

    let line = spinners[index];

    if (line === undefined) {
        index = 0;
        line = spinners[index]
    }

    process.stdout.write("\r" + line);
}

// process.stdout.write("\x1B[?25l");

/**
 * we pass the object key dependency || devdependency to this function
 * @param {object} deps object key that we want to extract
 * @returns {string} a string of 'dependencies@version'
 * that we can attach to an `npm i {value}` to install
 * every dep the exact version speficied in package.json
 */

const getDeps = deps =>
    Object.entries(deps)
        .map(dep => `${dep[0]}@${dep[1]}`)
        .toString()
        .replace(/,/g, ' ')
        .replace(/^/g, '')
        // exclude the plugin only used in this file, nor relevant to the boilerplate
        .replace(/fs-extra[^\s]+/g, '');

// console.log(color.FgYellow, '\nInitializing project..');

console.log();
console.log(`Creating a new React app in ${folderName}.`);
console.log();

exec(`mkdir ${folderName} && cd ${folderName} && npm init -f`, (initErr, initStdout, initStderr) => {

    if (initErr) {
        console.log(`Everything was fine, then it wasn't: ${initStderr}`);
        console.log();
        return;
    }

    const packageJSONFile = `${folderName}/package.json`;

    delete packageJson['bin'];

    let data = JSON.stringify(packageJson, null, 2);

    fs.writeFile(packageJSONFile, data, err2 => err2 || true);

    const filesToCopy = ['.gitignore', 'jsconfig.json', 'LICENSE', 'postcss.config.js', 'README.md', 'tailwind.config.js'];

    for (let i = 0; i < filesToCopy.length; i += 1) {
        fs
            .createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
            .pipe(fs.createWriteStream(`${folderName}/${filesToCopy[i]}`));
    }

    // installing dependencies
    console.log('Installing deps -- it might take a few minutes..');
    console.log();

    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);

    const loadSpinner = setInterval(intervalFunc, 100);

    exec(`cd ${folderName} && npm i -D ${devDeps} && npm i -S ${deps}`, (npmErr, npmStdout, npmStderr) => {

        if (npmErr) {
            console.error(`it's always npm, ain't it? ${npmStderr}`);
            return;
        }

        clearInterval(loadSpinner);
        console.log('Dependencies installed');
        console.log();

        // copy additional source files

        fs
            .copy(path.join(__dirname, '../src'), `${folderName}/src`)
            .then(() => {
                console.log(`Your project is now started into ${folderName} folder, refer to the README for the project structure.`);
                console.log();
            })
            .catch(err => {
                console.error(err);
                console.log();
            });

    });

});