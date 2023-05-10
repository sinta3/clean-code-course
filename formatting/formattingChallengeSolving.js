// (c) Maximilian Schwarzmüller / Academind GmbH

const fs = require('fs');
const path = require('path');

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

    // Warning: Directory must exist in advance
    insertFile(fileName, content) {
        const dirPath = this.getDirectoryPath();
        const filePath = path.join(dirPath, fileName);
        fs.writeFileSync(filePath, content);
        // Todo: Add proper error handling
    }

    getDirectoryPath() {
        return path.resolve(this.storageDirectory);
    }
}

const logStorage = new DiskStorage('logs');

logStorage.createDirectory();
logStorage.insertFile('test.txt', 'Test');