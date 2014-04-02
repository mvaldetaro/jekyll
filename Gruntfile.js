module.exports = function(grunt) {

grunt.initConfig({
  less: {
    development: {
      options: {
        paths: ["assets/css"],
        compress: true
      },
      files: {
        "assets/css/main.min.css": "assets/less/main.less"
      }
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    },
    deploy: {
      cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'less', 'exec:build', 'exec:serve' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};