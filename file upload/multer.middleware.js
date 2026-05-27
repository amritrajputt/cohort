import multer from "multer"
import ImageKit from "@imagekit/nodejs"
import dotenv from "dotenv"
import fs from "node:fs"
import path from "path"
dotenv.config()

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndPoint: process.env.IMAGEKIT_URLENDPOINT
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
})

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowed = ["image/png", "image/jpeg", "image/gif", "image/webp"]
        if (allowed.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("File type not supported"), false)
        }
    }
})

const uploadAvatar = async (req, res) => {
    try {
        const file = req.file
        if (!file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }
        
        const result = await handleUpload(req.user.id, file)
        return res.status(200).json({
            "message": "avatar uploaded successfully",
            data: result
        })

    } catch (error) {
        console.error("upload error:", error)
        return res.status(500).json({
            message: "file not uploaded",
            error: error.message
        });
    }
}
const handleUpload = async (userId, file) => {
    try {
        const fileStream = fs.createReadStream(file.path)
        const uploadResponse = await imageKit.files.upload({
            file: fileStream,
            fileName: file.filename,
            folder: "/user-avatars"
        })
        
        // Delete from disk after successful upload
        fs.unlinkSync(file.path)
        
        // TODO: find user and store ImageKit URL in database
        return uploadResponse
        
    } catch (error) {
        console.error("ImageKit upload error:", error)
        // Clean up the local file in case of error
        if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path)
        }
        throw error
    }
}