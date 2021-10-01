const express = require("express")
const router = new express.Router()
const path = require("path")
var multer = require('multer')
const fileController = require('../controllers/fileUploadController')
//storage
var storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
var upload = multer({ storage: storage })
//signup route
router.post('/file-upload', upload.single('url'), async (req, res) => {
    fileController.upload_file(req, res);
})

module.exports = router