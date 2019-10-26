process.stdin.setEncoding('utf8');

let radarImage: string  = '';

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    radarImage += chunk;
  }
});

process.stdin.on('end', () => {
  process.stdout.write(radarImage);
});
