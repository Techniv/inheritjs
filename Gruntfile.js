
module.exports = function(grunt){

	grunt.initConfig({
		nodeunit:{
			all: ["tests/node/**/*.test.js"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-nodeunit");

};
