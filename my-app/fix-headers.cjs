const fs = require('fs');

function fixFile(filePath, componentName) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove Github, Twitter, Linkedin, Instagram from imports if they exist
  content = content.replace(/Github,\s*/g, '');
  content = content.replace(/Twitter,\s*/g, '');
  content = content.replace(/Linkedin,\s*/g, '');
  content = content.replace(/Instagram,\s*/g, '');

  // Remove the Navbar component definition
  const navbarRegex = new RegExp(`const Navbar = \\(\\) => \\{[\\s\\S]*?\\};\\s*const ${componentName} =`, 'g');
  content = content.replace(navbarRegex, `const ${componentName} =`);

  // Remove <Navbar />
  content = content.replace(/<Navbar \/>\s*/g, '');

  // Remove footer
  const footerRegex = /<footer className="footer">[\s\S]*?<\/footer>/g;
  content = content.replace(footerRegex, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${filePath}`);
}

fixFile('src/pages/About.jsx', 'About');
fixFile('src/pages/Home.jsx', 'Home');
