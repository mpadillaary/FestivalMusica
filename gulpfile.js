const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  // Identificar el archivo de SASS
  // Compilar
  // Almacenarla en el disco duro

  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("build/css")); //**Identificando el archivo*/

  done(); //**Callback que avisa a gulp cuando llegamos al final */
}

function dev(done) {
    watch("src/scss/app.scss", css)
    
    done();
}

exports.css = css;
exports.dev = dev;