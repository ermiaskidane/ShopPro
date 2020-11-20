import express from "express"
import { getProducts, getProductById } from "../controllers/productController.js"

const router = express.Router()


router.route("/").get(getProducts).post(protect, admin, createProduct)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

export default router
