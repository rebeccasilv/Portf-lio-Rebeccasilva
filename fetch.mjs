import fs from 'fs';

const projectUrls = {
  "Receitas Culinárias": [
    'https://ibb.co/RpN6CP2V',
    'https://ibb.co/Q70RcznV',
    'https://ibb.co/XZDnrDG7',
    'https://ibb.co/ynMCg84K'
  ],
  "Sintony": [
    'https://ibb.co/Gvzm3hnR',
    'https://ibb.co/WWbgM0jR',
    'https://ibb.co/GfzQWxhs',
    'https://ibb.co/MxSr2mb7'
  ],
  "ByteX Media": [
    'https://ibb.co/67mZ8czm',
    'https://ibb.co/xtdJfFzd',
    'https://ibb.co/G4M7yb6B'
  ],
  "UnityRede Partners": [
    'https://ibb.co/MD0ywn12',
    'https://ibb.co/KcfqJpwd',
    'https://ibb.co/kgDZXTFw',
    'https://ibb.co/PfmT9Yf',
    'https://ibb.co/RpwcCn4P'
  ]
};

async function fetchImage(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/property="og:image" content="(.*?)"/);
    if(match) return match[1];
    return null;
  } catch(e) {
    return null;
  }
}

async function run() {
  const result = {};
  for(const [project, urls] of Object.entries(projectUrls)) {
    console.log(`Fetching ${project}...`);
    result[project] = [];
    for(const url of urls) {
      const img = await fetchImage(url);
      if(img) {
        result[project].push(img);
        console.log(`  ${url} -> ${img}`);
      } else {
        console.log(`  ${url} -> Not found`);
      }
    }
  }
  fs.writeFileSync('images_output.json', JSON.stringify(result, null, 2));
  console.log('Done!');
}

run();
