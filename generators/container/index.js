const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    if (opts.options && opts.options.name) {
      this.options.name = opts.options.name;
      this.options.path = opts.options.path;
    } else {
      this.argument('name', { type: String, required: true });
      this.argument('path', { type: String, required: false });
    }
  }

  writing() {
    const { name, path } = this.options;

    let destination = path ? path : '.'
    if(path && path.substring(path.length-1) === '/'){
      destination = path.slice(0, -1);
    }

    const destinationPath = destination + '/' + name;
    this.fs.copyTpl(
      this.templatePath('Container.js'),
      this.destinationPath(destinationPath + '/' + name +'.js'),
      { name: name }
    );

    this.fs.copyTpl(
      this.templatePath('Container.css'),
      this.destinationPath(destinationPath + '/' + name + '.css'),
      { name: name }
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(destinationPath + '/index.js'),
      { name: name }
    );
  }
};
