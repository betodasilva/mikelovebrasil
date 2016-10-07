module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
		  dist: {
		    files: {
		    	'assets/css/style.css' : 'assets/css/sass/style.scss'
		    }
		  },
		},
		watch: {
			css: {
				files: 'assets/css/sass/*.scss',
				tasks: ['sass']
			}
		}

	});

grunt.registerTask('default',['watch', 'sass']);
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

}