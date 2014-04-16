module.exports = function(grunt) {
  
	grunt.initConfig({
	  jshint: {
      src: ['public/js/*.js'],
      options: {
	      curly: true,
	      eqeqeq: true,
	      eqnull: true,
	      browser: true,
	      globals: {
	        jQuery: true
	      }
	    }
    },
    concat: {
	    css: {
	      src: ['public/css/*.css'],
	      dest: 'public/css/asset.css'
	    },
	    js: {
	      src: ['public/js/*.js'],
	      dest: 'public/js/asset.js'
	    }
	  }
	});


  // Load the tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat']);
};