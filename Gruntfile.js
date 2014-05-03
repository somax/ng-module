'use strict';


module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify')

	grunt.initConfig({

		uglify: {
			build: {
				files: {
					'ng-module.min.js': [
						'src/ng-module.js'
					]
				}
			}
		}
	});

	grunt.registerTask('build', [
		'uglify'
	]);
};
