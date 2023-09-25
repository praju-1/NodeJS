const fs = require('fs').promises;

// An array of file paths to read
const filePaths = ['example.txt', 'file2.txt', 'file3.txt'];

// This function reads files one by one and continues to the next file when finished:
async function readFilesParallel(filePaths) {
  try {
    const fileContents = await Promise.all(
      filePaths.map(async (filePath) => {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(`\nContents of ${filePath}:`);
        console.log(data);
        return data;
      })
    );

    console.log('\nAll files read in parallel.');
    // You can work with fileContents array here.
  } catch (err) {
    console.error(`Error reading files: ${err.message}`);
  }
}

// Start reading files in parallel
// start reading files sequentially by calling the readFilesSequentially function:
readFilesParallel(filePaths);