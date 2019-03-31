const plist = require('simple-plist');

plist.readFile('info.plist', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  const mutated = data;
  mutated.NSRequiresAquaSystemAppearance = false;
  // mutated.CFBundleDisplayName = 'lol';
  console.log(JSON.stringify(mutated));
  // Write data to a binary plist file (synchronous)
  plist.writeFileSync('binary.plist', mutated);
});
