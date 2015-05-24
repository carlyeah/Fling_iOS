gulp = require('gulp')
gutil = require('gulp-util')
coffee = require('gulp-coffee')
exec = require('gulp-exec')
rename = require('gulp-rename')
config =
  watchers:
    index: '*.coffee'
    files: 'App/**/*.coffee'
  index:
    src: 'index.ios.coffee'
    dist: './'
  files:
    src: 'App/**/*.coffee'
    dist: './App/dist'
gulp.task 'build', ->
  options =
    continueOnError: false
    pipeStdout: true
  gulp.src(config.files.src).pipe(exec('cjsx-transform <%= file.path %>', options)).pipe(rename((path) ->
    path.extname = '.js'
    return
  )).pipe(coffee(bare: true).on('error', gutil.log)).pipe gulp.dest(config.files.dist)
  return
gulp.task 'cjsx', ['build'], ->
  options =
    continueOnError: false
    pipeStdout: true
  gulp.src(config.index.src).pipe(exec('cjsx-transform <%= file.path %>', options)).pipe(coffee(bare: true).on('error',
    gutil.log)).pipe gulp.dest(config.index.dist)
  return
gulp.task 'watch', ['cjsx'], ->
  gulp.watch [
    config.watchers.index
    config.watchers.files
  ], ['cjsx']
  return
gulp.task 'default', ['watch']