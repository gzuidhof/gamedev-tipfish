module.exports = function (grunt) {
    'use strict';
    // Project configuration
	grunt.initConfig({
			// Metadata
			pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'static/css/application.css': 'source/sass/application.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task
    grunt.registerTask('default', ['sass']);
};

