import multer from "multer";
import express from "express";
import cookieParser from "cookie-parser"
import path from "path";
const app = express()

// const upload = multer(); // with no configuration in multer files is stored in ram 

const storage = multer.diskStorage({
    // this is used for giving destination to store data after upload
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    // if multiple user send data with same file name for ex: image.png (very common) it will overwrite previous one so it will chnage the file name creates a unique name and append to file name
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname) // file.originalname extract extension
    }
})

const upload = multer({
    storage: storage,
    // we can also give filesize limits
    limits: {
        fileSize: 1024 * 1024 * 2 //2mb
    },
    // we can also give filefilter 
    fileFilter: (req, file, cb) => {
        const allowed = ["image/png", "image/jpeg", "application/pdf"]
        if (allowed.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("File type not supported"), false)
        }
    }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// single is use for single file and we have to give feild name to image  for example in a personal detail the passport photo is a field and also signature is a field

app.post("/uploadfile", upload.single("signature"), (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }

    console.log(req.file);

    res.status(200).json({
        "message": "file uploaded successfully"
    })

})

//for multiple photos
app.post("/uploadfiles", upload.fields([
    { name: "signature", maxCount: 1 },
    { name: "photo", maxCount: 1 }
]), (req, res) => {

    if (!req.files) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }

    console.log(req.files);

    res.status(200).json({
        "message": "file uploaded successfully"
    })
})




const port = 3000

app.listen(port, () => {
    console.log("server is running on port 3000");
})