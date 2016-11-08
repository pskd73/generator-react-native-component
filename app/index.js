var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
		this.option('inside');
	},
	_copyFile: function(args, filename) {
		var componentName = args[0];
		var insidePath = this.options.inside ? this.options.inside+'/' : '';
		this.fs.copyTpl(
			this.templatePath(filename),
			this.destinationPath(insidePath+componentName+'/'+filename),
			{ name: componentName }
		);
	},
	copyIndexFile: function () {
		this._copyFile(arguments, 'index.js');
	},
	copyAndroidFile: function() {
		this._copyFile(arguments, 'index.android.js');
	},
	copyIosFile: function() {
		this._copyFile(arguments, 'index.ios.js');
	},
	copyStylesFile: function() {
		this._copyFile(arguments, 'styles.js');
	},
	successMessage: function() {
		var componentName = arguments[0];
		var insidePath = this.options.inside ? this.options.inside+'/' : '';
		console.log('Created component under ', this.destinationPath(insidePath+componentName+'/'));
	}
});