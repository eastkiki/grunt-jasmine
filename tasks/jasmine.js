/*
 * grunt-jasmine
 * https://github.com/dong-ilgim/grunt-jasmine
 *
 * Copyright (c) 2012 Dong-il Kim
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('jasmine', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('jasmine'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('jasmine', function() {
    return 'jasmine!!!';
  });

};
