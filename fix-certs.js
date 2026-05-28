const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="cert-back glass-card">[\s\S]*?onclick="openCertModal\('([^']+)',\s*'([^']+)',\s*'([^']+)'\)"[\s\S]*?<\/div>/g;

let count = 0;
html = html.replace(regex, (match, imgSrc, title, pdfSrc) => {
  count++;
  return `<div class="cert-back glass-card" style="padding:0; overflow:hidden;" onclick="openCertModal('${imgSrc}', '${title}', '${pdfSrc}')">
              <img src="${imgSrc}" alt="${title}" style="width:100%; height:100%; object-fit:contain; border-radius:12px; cursor:pointer;" loading="lazy" />
            </div>`;
});

fs.writeFileSync('index.html', html, 'utf8');
console.log('Replaced ' + count + ' cert-back elements.');
