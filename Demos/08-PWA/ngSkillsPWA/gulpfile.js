const gulp = require("gulp");
const gutil = require("gutil");
const ftp = require("vinyl-ftp");

var localFiles = ["./dist/ngSkillsPWA/**/*"];

var remoteLocation = "/site/wwwroot";

function getFtpConnection() {
  return ftp.create({
    host: "waws-prod-am2-237.ftp.azurewebsites.windows.net",
    port: 21,
    user: "SkillsUI\\user",
    password: "pwd",
    log: gutil.log
  });
}

gulp.task("deploy", function() {
  var conn = getFtpConnection();
  return gulp
    .src(localFiles, { base: "./dist/ngSkillsPWA/", buffer: false })
    .pipe(conn.newer(remoteLocation))
    .pipe(conn.dest(remoteLocation));
});
