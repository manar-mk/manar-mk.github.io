module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'bin/styles.min.css': [
                        'css/style.css',
                        'css/jquery.fullPage.css'
                    ]
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'bin/styles.min.css': 'bin/styles.min.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index-dev.html'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'bin/scripts.min.js': [
                        'js/parallax.js',
                        'js/jquery-1.11.1.min.js',
                        'js/jquery.particleground.min.js',
                        'js/jquery.easings.min.js',
                        'js/jquery.slimscroll.min.js',
                        'js/jquery.fullPage.min.js',
                        'js/demo.js',
                    ]
                }
            }
        },
        watch: {
            styles: {
                files: ['style.css'],
                tasks: ['cssmin', 'autoprefixer', 'uglify', 'htmlmin', 'watch']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'autoprefixer', 'uglify', 'htmlmin']);
};
