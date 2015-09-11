module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    bases: ['/home/alyssa/Documents/Sites/phonebook'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/main.css': 'css/main.scss'
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:8080/index.html'
            }
        },
        watch: {
            css: {
                    files: '**/*.scss',
                    tasks: ['sass'],
                    options: {
                        livereload: true
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-express'),
    grunt.loadNpmTasks('grunt-contrib-sass'),
    grunt.loadNpmTasks('grunt-open'),
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'express',
        'sass',
        'open',
        'watch'
    ]);   
}     