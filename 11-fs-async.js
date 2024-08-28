const { readFile, writeFile } = require('fs');

// Read the first file
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    // Read the second file
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        // Write the combined result to a new file
        writeFile('./content/resultASYNC.txt', `Here is the result of these: ${first}, ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully');
        });
    });
});
