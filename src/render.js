/* eslint-disable */
const plist = require('simple-plist');

document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault();
};

document.body.ondrop = (ev) => {
  let path = ev.dataTransfer.files[0].path;
  plist.readFile(`${path}/Contents/info.plist`, (err, data) => {
    if (err) {
      throw err;
    }

    plist.writeFileSync(`${path}/Contents/info.plist.bak`, data);
    const mutated = data;
    mutated.NSRequiresAquaSystemAppearance = false;
    plist.writeFileSync(`${path}/Contents/info.plist`, mutated);
  });
  ev.preventDefault();
};
