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
    createDirectory() {
        const dirPath = this.getDirectoryPath();
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
    }

    insertFile(fileName, content) {
        const dirPath = this.getDirectoryPath();
        const filePath = path.join(dirPath, fileName);
        fs.writeFileSync(filePath, content);
    }

    getDirectoryPath() {
        return path.resolve(this.storageDirectory);
    }
}

const logStorage = new DiskStorage('logs');
logStorage.createDirectory();
logStorage.insertFile('test.txt', 'Test');