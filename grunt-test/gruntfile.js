module.exports = grunt => {
  grunt.registerTask('foo', '任务描述', () => {
    console.log('hello, grunt')
  })
  // 异步写法
  grunt.registerTask('async-task', function() {
    const done = this.async()
    setTimeout(() => {
      console.log('async task working~')
      done()
    }, 1000)
  })
}