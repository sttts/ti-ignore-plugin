console.log("Running ti-ignore-plugin...");

exports.cliVersion = '>=3.X';

String.prototype.endsWith = function (s) {
  return this.length >= s.length && this.substr(this.length - s.length) == s;
}

String.prototype.beginsWith = function (s) {
  return this.substr(0, s.length) == s;
}

String.prototype.withoutPrefix = function (s) {
  return this.substr(s.length);
}

var gitignore = undefined;
var projectDir = null;

exports.init = function (logger, config, cli, appc) {
	var ignore = require('ignore'),
		fs = require('fs');
	var ti_ignore_passing = ignore().addIgnoreFile(
			ignore.select([
				'.titaniumignore',
				'.tiignore',
				'.ti-ignore'
			])
		).createFilter();

	cli.on("build.pre.compile", function (build, finished) {
		projectDir = build.projectDir;
		finished();
	});
	cli.on("build.ios.copyResource", {
		pre: function (build, finished) {
	    	var source_file = build.args[0];
	    	var target_file = build.args[1];
	    	var relative_source_file = source_file.withoutPrefix(projectDir + '/');

			process.nextTick(function() {
				if (!ti_ignore_passing(source_file)) {
					logger.info('Ignoring ' + relative_source_file.cyan + ' due to .tiignore');
					build.fn = null;
					finished(null, build);
				} else {
					finished();
				}
			});
		}
	});
};
