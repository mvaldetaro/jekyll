module.exports = function(grunt) {

grunt.initConfig({
  less: {
    development: {
      options: {
        paths: ["blog/assets/css"],
        compress: true
      },
      files: {
        "blog/assets/css/main.min.css": "blog/assets/less/main.less"
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

grunt.registerTask('default', [ 'less', 'exec:build']);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};