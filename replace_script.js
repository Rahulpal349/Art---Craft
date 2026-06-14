const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.git') && !dirFile.includes('dist')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js') || dirFile.endsWith('.html') || dirFile.endsWith('.json')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('c:/Users/rahul/Documents/Art & Craft');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Case-sensitive replacements
  content = content.replace(/Art & Craft/g, 'Art & Craft');
  content = content.replace(/Art & Craft/g, 'Art & Craft');
  
  // Lowercase replacements (emails, package names)
  content = content.replace(/artisanatgallery\.com/g, 'artandcraft.com');
  content = content.replace(/artisanat\.com/g, 'artandcraft.com');
  content = content.replace(/art-and-craft/g, 'art-and-craft');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
