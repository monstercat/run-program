var test = require('tape')
var run = require('./')

test('works', function (t) {
  t.plan(3)

  run('echo', ['hello'], function (err, std) {
    t.notOk(err, 'shouldnt have an error')
    t.equal(std.out, 'hello\n', 'stdout should be right')
    t.equal(std.err, null, 'empty fd should be null')
  })

})

test('handles errors', function (t) {
  t.plan(3)

  run('echo2', ['hello'], function (err, std) {
    t.ok(err, 'shoud have an error')
    t.equal(std.out, null)
    t.equal(std.err, null)
  })
})
