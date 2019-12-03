const reader = process.stdin;
const writer = process.stdout;

console.log('\nEnter your text:');
reader.on('readable', () => {
    const data = reader.read();
    writer.write(data.reverse().toString().replace(/\n/g, ''));
    writer.write('\n\n');
});
