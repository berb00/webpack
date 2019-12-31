let shell = require('shelljs');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
// 复制文件到输出目录
shell.rm('-rf', 'out/Release');//删除
shell.cp('-R', 'stuff/', 'out/Release');//复制

// 目录切换
shell.cd('lib');//切到某录
shell.cd('..');//切到上级

//内容替换
// Replace macros in each .js file 
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});


// 异步运行扩展工具
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');//输出内容
  shell.exit(1);//退出
}
