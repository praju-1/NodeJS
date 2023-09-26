const fs = require('fs');

// Read a file
fs.readFile('readme.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Write to a file
// syntax
// fs.writeFile(path, data, options, callback)
fs.writeFile('example.txt', 'Hello, world!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully.');
});

// Append to a file
fs.appendFile('example.txt', 'Additional data.', 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Data appended successfully.');
});

// Open a file for both reading and writing
fs.open('example.txt', 'r+', (err, file) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }
  console.log('File opened for reading and writing.');
});

// Open a file for writing exclusively
fs.open('example.txt', 'wx', (err, file) => {
  if (err) {
    console.error('Error opening file exclusively:', err);
    return;
  }
  console.log('File opened for writing exclusively.');
});

// Open a file for both appending and reading
fs.open('example.txt', 'a+', (err, file) => {
  if (err) {
    console.error('Error opening file for append and read:', err);
    return;
  }
  console.log('File opened for appending and reading.');
});
