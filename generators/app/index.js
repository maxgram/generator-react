const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('com');
    this.option('component');
    this.option('con');
    this.option('container');
    this.argument('name', { type: String, required: true });
    this.argument('path', { type: String, required: false });
  }

  generating() {
    const { name, path, con, com, container, component } = this.options;
    const isComponent = component || com;
    const isContainer = container || con;

    let subtask;
    if(!isComponent && !isContainer) {
      subtask = 'component';
    } else if(isComponent && !isContainer) {
      subtask = 'component';
    } else if(!isComponent && isContainer) {
      subtask = 'container';
    } else if(isComponent && isContainer) {
      this.log.error("Can't generate Component and Container at the same time");
      process.exit(1);
    }

    this.composeWith('react:' + subtask, { options: { name, path } });
  }
};
