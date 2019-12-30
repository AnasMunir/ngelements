const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ngelements/runtime-es5.js',
    './dist/ngelements/polyfills-es5.js',
    './dist/ngelements/scripts.js',
    './dist/ngelements/main-es5.js',
  ];

  await fs.ensureDir('ngelements');
  await concat(files, 'public/ngelements.js');
})();
