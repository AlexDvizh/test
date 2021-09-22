const {src, dest, series} = require('gulp');
const csso = require('gulp-csso');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const sync = require('browser-sync').create();

const html = () => {
    return src('index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('build'))
};

const css = () => {
    return src('src/css/*.css')
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(dest('build'))
};

const scripts = () => {
    return src('src/js/script.js')
        .pipe(dest('build'))
};

const clean = () => {
    return del('build')
};

const server = () => {
    sync.init({
        server: './build'
    })
}


exports.build = series(clean, css, html, scripts);
exports.server = series(clean, css, html, scripts, server);