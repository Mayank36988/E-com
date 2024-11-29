const multer = require("multer");

// Memory storage to keep the file in memory (as Buffer)
const storage = multer.memoryStorage();

// Multer configuration for a single file upload, where "file" is the field name
const upload = multer({ storage: storage }).single("file");

module.exports = upload;
