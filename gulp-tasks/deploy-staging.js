module.exports = function ( gulp, ftp ) {
  
  return function () {

    var credenitals = require('../deploy-staging.json')

    var user = credenitals.user,
        password = credenitals.password,
        host = credenitals.host,
        port = 21,
        localFilesGlob = ['./public/*.html', './public/imgs/**/*', './public/js/**/*', './public/.htaccess', './public/*.css', , './public/data/**/*.json'],
        remoteFolder = credenitals.remoteFolder;

    function getFtpConnection() {
      return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 5
      });
    }

    var conn = getFtpConnection();

    gulp.src(localFilesGlob, { base: './public', buffer: false })
        .pipe( conn.newer( remoteFolder ) )
        .pipe( conn.dest( remoteFolder ) );
  };
};