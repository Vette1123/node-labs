const { diskStorage } = require('multer');
const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/storage`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;