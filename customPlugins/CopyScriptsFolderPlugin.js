const fs = require('fs');

// TODO: 1. Add support for more than just scrollTo.js
//       2. Take advantage of the webpack plugin architecture: https://webpack.js.org/contribute/writing-a-plugin
module.exports = class CopyScriptsFolderPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        var srcPath = path.resolve(__dirname, "src/Scripts/scrollTo.js");
        var dstPath = path.resolve(__dirname, "public/assets/") + '\\scrollTo.js';

        // logging
        console.log(`resolve scrollto: ${srcPath}`);
        console.log(`copy to: ${dstPath}`);
        fs.access(dstPath, fs.constants.F_OK, (err) => {
            // if file does not exist, copy
            if(err) {
                fs.copyFile(srcPath, dstPath, (err) => {
                    if(err) {
                        console.log(`CopyScriptsPlugin ERR: ${err}`);
                        throw err;
                    } else {
                        console.log(`Successfully copied ${srcPath.slice(-24)} to ${dstPath.slice(-26)}`);
                    }
                });
            } else {
                console.log(`File ${dstPath.slice(-26)} already exists. Skipping copy.`);
            }
        });
    }
}