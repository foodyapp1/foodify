const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage: multer.diskStorage({}), 
    fileFilter: (req, file, cd) =>{
        let extension = path.extname(file.originalname).toLocaleLowerCase();
        if(extension !== '.jpg' && extension !== '.jpeg' && extension !== '.png'){
            cd(new Error('File type not supported !'), false);
            return;
        }
        cd(null, true);
        console.log(extension);
    }
})