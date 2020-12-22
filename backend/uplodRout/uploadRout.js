import exoress from "express"
import multer from "multer"
import path from "path"
const router = exoress.Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/")
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`
        )
    },
})

function checkFileType(file, cb) {
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(
        path.extname(file.originalname).toLocaleLowerCase()
    )
    const mineType = fileTypes.test(file.mimetype)
    if (extName && mineType) {
        return cb(null, true)
    } else {
        return cb(" images only ")
    }
}
const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
})

router.post("/", upload.single("image"), (req, res) => {
    if (req.currentUser.isAdmin) {
        res.send(`/${req.file.path}`)
    } else {
        throw new Error("only admin can upload files ")
    }
})

export default router
