import express from "express"
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } from "../controllers/orderControllers.js"
import { protect } from "../middleware/authMiddleware.js"
 
router.route("/").post(protect, addOrderItems)
<<<<<<< HEAD

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 8e55bdc4dbe329154d02e56d448f28ecaad8a699
=======
router.route("/myorders").get(protect, getMyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, updateOrderToPaid)
   
export default router
>>>>>>> 09checkout2AndAdminPart1
