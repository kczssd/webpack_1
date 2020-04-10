// function HelloWorldPlugin(options) {
// }

// HelloWorldPlugin.prototype.apply = function (compiler) {
//     compiler.plugin('done', function () {

//     });
// };

// module.exports = HelloWorldPlugin;
const path = require('path');
const fs = require('fs');
class FileListPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // 在生成文件中，创建一个头部字符串：
            var filelist = 'In this build:\n\n';
            var file = path.join(__dirname, '../package.json');
            fs.readFile(file, 'utf-8', function (err, data) {
                filelist += 'name:' + data.name + '\n' + 'version:' + data.version;
            });
            compilation.assets['filelist.md'] = {
                source: function () {
                    return filelist;
                },
                size: function () {
                    return filelist.length;
                }
            };

            callback();
        });
    }
}

module.exports = FileListPlugin;