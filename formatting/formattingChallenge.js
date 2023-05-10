// (c) Maximilian Schwarzmüller / Academind GmbH

// *********
// Imports
// *********
const fs = require('fs');
const path = require('path');

// *********
// Main
// *********
// A class which allows us to create DiskStorage instances
class DiskStorage {
    constructor(directoryName) {
        this.storageDirectory = directoryName;
    }

    getDirectoryPath() {
        return path.resolve(this.storageDirectory);
    }

    // This must be called before a file is inserted
    createDirectory() {
        if (!fs.existsSync(this.getDirectoryPath())) {
            fs.mkdirSync(this.getDirectoryPath());
        }
    }

    // Warning: Directory must exist in advance
    insertFile(fileName, content) {
        fs.writeFileSync(path.join(this.getDirectoryPath(), fileName), content);
        // Todo: Add proper error handling
    }
}

const logStorage = new DiskStorage('logs');

logStorage.createDirectory();
logStorage.insertFile('test.txt', 'Test');