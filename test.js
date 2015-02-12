var test = require('tape')
var from = require('from2')
var count = require('./')

function countEqual (t, stream, expected) {
  count(stream, function (err, len) {
    if (err)
      t.fail(err)
    else
      t.equal(len, expected)
  })
}

test('works for data streams', function (t) {
  t.plan(3)
  var countEql = countEqual.bind(null, t)

  countEql(from([]), 0)
  countEql(from(['abc', 'd']), 4)
  countEql(from([new Buffer([1, 2, 3, 4])]), 4)
})

test('works for object streams', function (t) {
  t.plan(2)
  var countEql = countEqual.bind(null, t)

  countEql(from.obj([]), 0)
  countEql(from.obj([{a: 2}]), 1)
})
