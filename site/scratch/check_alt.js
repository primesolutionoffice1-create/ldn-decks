const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const srcDir = path.join(process.cwd(), 'src');

walk(srcDir, filePath => {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Handle multi-line tags
    const imageTags = content.match(/<(Image|img)[\s\S]*?>/g);
    if (imageTags) {
      imageTags.forEach(tag => {
        if (!tag.toLowerCase().includes('alt=')) {
          console.log(`Missing alt in ${filePath}:\n${tag}\n`);
        }
      });
    }
  }
});
