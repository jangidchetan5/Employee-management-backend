const { imagesCollectionObj } = require("../../models/image");

//createHoliday List route
exports.upload_file = async function (req, res) {
    const url = `http://localhost:8000/profile_image/${req.file.filename}`
    try {
        const imgObj = new imagesCollectionObj({ url });
        const imageurl = await imgObj.save();
        res.status(200).json({ message: imageurl });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};