var dezalgo = require('dezalgo')

function streamLength (stream, done) {
  done = dezalgo(done)
  var count = 0

  stream.on('data', function (data) {
    var isObjectMode = !!stream.objectMode || data.length == null
    count += isObjectMode ? 1 : data.length
  })
  .on('error', done)
  .on('end', function() {
    done(null, count)
  })
}

module.exports = streamLength
