const fs = require('fs');

// Open a file for reading
fs.open('example.txt', 'r', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
        return;
    }

    // Do some operations with the file...

    // Close the file when done
    fs.close(fd, (err) => {
        if (err) {
            console.error('Error closing file:', err);
            return;
        }
        console.log('File closed successfully.');
    });
});
