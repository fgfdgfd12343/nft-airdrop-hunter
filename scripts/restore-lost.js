const fs = require('fs');
const { execSync } = require('child_process');

function rb(s) {
  if (s.charCodeAt(0) === 0xFEFF) return s.slice(1);
  return s;
}

// Pull the original 4 projects from initial commit (ecba0cb has clean originals)
const committedRaw = execSync('git show ecba0cb:data/airdrops.json', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const committed = JSON.parse(rb(committedRaw));

const current = JSON.parse(rb(fs.readFileSync('data/airdrops.json', 'utf8')));
const currentIds = new Set(current.map(x => x.id));

// Extract the 3 classic projects from committed
const wanted = ['layerzero-zro', 'zksync-era', 'starknet-strk'];
const restored = [];
for (const id of wanted) {
  if (!currentIds.has(id)) {
    const proj = committed.find(x => x.id === id);
    if (proj) {
      // Clean the latestSignal field (had garbled encoding) - remove it
      delete proj.latestSignal;
      proj.lastUpdated = '2026-06-26';
      restored.push(proj);
    }
  }
}

console.log('Restoring:', restored.map(x => x.id).join(', '));

// Put classics first, then current
const final = [...restored, ...current];

fs.writeFileSync('data/airdrops.json', JSON.stringify(final, null, 2), 'utf8');
console.log('Final total:', final.length);
