import express from "express"
const router = express.Router()
import { addOrderItems } from "../controllers/orderControllers.js"
import { protect } from "../middleware/authMiddleware.js"

router.route("/").post(protect, addOrderItems)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 8e55bdc4dbe329154d02e56d448f28ecaad8a699
