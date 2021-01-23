const { Router } = require("express");
const router = Router();
const cloudinary = require("../../utilities/cloudinary");
const upload = require("../../utilities/multer")
const dotenv = require('dotenv');
dotenv.config()


//------ testing call ----------- hand crossed finger crossed !!

router.post('/test',upload.single('file'), async (req, res) =>{
    try{
        console.log('full file data : ', req.file)
        console.log('file path : ', req.file.path)
        const newUpload = await cloudinary.uploader.upload(req.file.path);
        console.log(newUpload.secure_url);
        res.status(200).send(newUpload.secure_url);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
//------exporting routes ---------

module.exports = router;