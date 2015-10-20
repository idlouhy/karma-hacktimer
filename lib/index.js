var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initHackTimer = function(files) {
  var hacktimerPath = path.dirname(require.resolve('hacktimer'));
  files.unshift(createPattern(hacktimerPath + '/HackTimerWorker.min.js'));
  files.unshift(createPattern(hacktimerPath + '/HackTimer.silent.min.js'));
};

initHackTimer.$inject = ['config.files'];

module.exports = {
  'framework:hacktimer': ['factory', initHackTimer]
};

