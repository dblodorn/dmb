module.exports = function ( gulp, ftp ) {
  return function () {
    
    var user = 'dain@db13.us',
        password = '8J[4$f6r/{E9BZB2',
        host = 'db13.us',
        port = 21,
        localFilesGlob = ['./public/*.html', './public/imgs/**/*', './public/js/**/*', './public/.htaccess', './public/*.css', , './public/data/**/*.json'],
        remoteFolder = '/dain.kim/html/';

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