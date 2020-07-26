var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// External dependancies
var Transform = require('stream').Transform;
    Database = require('better-sqlite3'),
    error = require('plugin-error');

// createDatabase
function gulp_sqlite3(databasefile) {

    //stream handling    
    var transformStream = new Transform({objectMode: true});

    // Validation
    if( !databasefile ) throw new PluginError({plugin: 'custom gulp-sqlite3', message: 'missing database filename!'});

    // Connect to the database
    var db = new Database(databasefile, { verbose: console.log });
    
    transformStream._transform = function(file, encoding, callback) {        
        if( file.isBuffer() ) {
            db.exec(file.contents.toString(encoding));
        }
        callback(null, file);
    };
    
    return transformStream;
}

gulp.task('sqlite', function() {
    return gulp.src("sql/schema.sql")
        .pipe(gulp_sqlite3("dist/guild_storage.db"));
});

gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('build'));

gulp.task('install', gulp.parallel('sqlite', 'build'));
