const { src, dest, task, series, parallel } = require('gulp')

const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlhint = require("gulp-htmlhint")
const gulpUseref = require("gulp-useref")
const gulpif = require("gulp-if")
const connect = require('gulp-connect')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()


// 开发
const devCss = () => {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dev', { append: '.css' }))
        .pipe(connect.reload())
}
const devJs = () => {
    return src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dev'))
        .pipe(connect.reload())
}
const devImage = () => {
    return src('src/**/images/**')
        .pipe(dest('dev'))
        .pipe(connect.reload())
}
const devFonts = () => {
    return src('src/**/fonts/**')
        .pipe(dest('dev'))
        .pipe(connect.reload())
}
const devPages = () => {
    return src('src/**/*.html')
        .pipe(dest('dev'))
        .pipe(connect.reload())
}
const watchs = () => {
    watch('src/**/*.scss', devCss)
    watch('src/**/*.js', devJs)
    watch('src/**/*.html', devPages)
    watch('src/**/images/**', devImage)
    watch('src/**/fonts/**', devFonts)
}
const serve = () => {
    return connect.server({
            name: 'Dev App',
            root: 'dev',
            port: 8000,
            livereload: true,
            open: true,
        })
}


// 上线
const distCss = () => {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist', { append: '.css' }))
}
const distJs = () => {
    return src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist'))
}
const distImage = () => {
    return src('src/**/images/**')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(dest('dist'))
}
const distFonts = () => {
    return src('src/**/fonts/**')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(dest('dist'))
}
const distPages = () => {
    return src('src/**/*.html')
        .pipe(htmlhint())
        .pipe(dest('dist'))
        .pipe(connect.reload())
}
const extra = () => {
    return src('public/**')
        .pipe(dest('dist/public'))
}
const useref = () => {
    return src('dist/**/*.html')
        .pipe(gulpUseref({ searchPath: ['dist', '.'] }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(dest('dist'));
}



const dev = series(parallel(devCss, devJs, devImage, devFonts, devPages), parallel(serve, watchs))
const dist = series(parallel(distCss, distJs, distImage, distFonts, distPages, extra), useref)
module.exports = {
    dev,
    dist,
}