/*!
 * Ratchet's Gruntfile
 * http://goratchet.com
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 */

/* jshint node: true */
module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // var generateRatchiconsData = require('./grunt/ratchicons-data-generator.js');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    meta: {
      srcPath:        'src/sass/',
      entryPath:       'entry/',
      distPath:       'dist/'
    },

    banner: '/*!\n' +
            ' * =====================================================\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' *\n' +
            ' * v<%= pkg.version %> designed by zhangandyhui.\n' +
            ' * =====================================================\n' +
            ' */\n',

    clean: {
      dist: ['<%= meta.distPath %>']
    },

    sass: {
      options: {
        banner: '<%= banner %>',
        style: 'expanded',
        unixNewlines: true
      },
      entry: {
        files: {
          '<%= meta.distPath %>css/main.css': '<%= meta.entryPath %>main.scss',
         }
      }
    },

    watch: {
      scripts: {
        files: [
          '<%= meta.srcPath %>**/*.scss',
          '<%= meta.entryPath %>**/*.scss',
          '<%= meta.entryPath %>**/*.js'
        ],
//        tasks: ['sass', 'jshint', 'requirejs:entry', 'uglify:mainjs']
          tasks: ['sass', 'requirejs:entry','cssmin:rage', 'uglify:mainjs']
      }
    },

    jshint: {
      options: {
        // jshintrc: 'js/.jshintrc'
        '-W033' : true,
        '-W014' : true,
        '-W030' : true,
        '-W032' : true,
        '-W069' : true,
        '-W061' : true,
        '-W103' : true,//__proto__     
      },
      grunt: {
        src: ['Gruntfile.js', 'grunt/*.js']
      },
      src: {
        src: 'js/*.js'
      },
      public: {
        src: ['public/**/*.js']
      },
      components: {
        src: ['components/**/*.js']
      },
      docs: {
        src: ['<%= meta.docsAssetsPath %>/js/docs.js', '<%= meta.docsAssetsPath %>/js/fingerblast.js']
      }
    },
    cssmin: {
      options: {
        banner: '', // set to empty; see bellow
        keepSpecialComments: '*' // set to '*' because we already add the banner in sass
      },
      ratchet: {
        src: '<%= meta.distPath %>css/<%= pkg.name %>.css',
        dest: '<%= meta.distPath %>css/<%= pkg.name %>.min.css'
      },
      theme: {
        files: {
          '<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.css',
          '<%= meta.distPath %>css/<%= pkg.name %>-theme-android.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-android.css'
        }
      },
      rage: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        compress: true,
        mangle: true,
        preserveComments: false
      },
      mainjs: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },

    open: {
        kitchen: {
            path: 'http://localhost:3000/entry/huoche/entry.html'
        }
    },
    requirejs: {
      entry: {
          options: {
              baseUrl: "./",
              // baseUrl: 'entry/huoche/',
              name : 'lib/almond',
              // mainConfigFile: "entry/huoche/config.js",
              include : [
                'entry/main'
              ],
              out: '<%= meta.distPath %>js/main.js',
              //optimize : 'uglify2',
              optimize : '',
              wrap : true,
          }
      }
    },
    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver');
          return old ? RegExp.quote(old) : old;
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    },
    /*copy: {
        fonts: {
          expand: true,
          src: 'fonts/*',
          dest: '<%= meta.distPath %>'
        },
        entry:{
          files: [
            {expand: false, src: ['<%= meta.entryDist %>css/main.css'], dest: '../mycontent/css/main.css'},
            {expand: false, src: ['<%= meta.entryDist %>js/main.js'], dest: '../mycontent/js/main.js'},
          ],
        }
      },*/
  });

  // Load the plugins
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);


  // 核心
  grunt.registerTask('core', ['clean', 'dist-css', 'dist-js', 'build-ratchicons-data']);

  // server
  grunt.registerTask('server', 'Run server', [
        'watch'
  ]);
//  grunt.registerTask('entry', ['sass', 'requirejs:entry','copy:entry']);
  grunt.registerTask('entry', ['sass', 'requirejs:entry']);
};
